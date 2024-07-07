import { getCurrentUserOrRedirect } from "@/auth/user";
import NothingHere from "@/components/small/nothing-here";
import { Pagination } from "@/components/small/pagination";
import SubmitButton from "@/components/small/submit-button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";
import { z } from "zod";
import { makeEditor, revokeAdmin } from "../_actions/user";
import { MAX_ITEMS_PER_PAGE } from "../_constants";
import Denied from "../_components/denied";

const QueryParamsSchema = z.object({
  search: z.string().trim().catch(""),
  page: z.coerce.number().catch(1),
  sort_order: z.enum(["asc", "desc"]).catch("desc"),
  sort_key: z.enum(["balance", "role", "createdAt"]).catch("balance"),
});

type Props = {
  searchParams: z.infer<typeof QueryParamsSchema>;
};

const UserListPage = async ({ searchParams }: Props) => {
  const { search, page, sort_key, sort_order } =
    QueryParamsSchema.parse(searchParams);

  const currentUser = await getCurrentUserOrRedirect();

  if (currentUser.role !== "ADMIN") {
    return <Denied />;
  }

  const [users, totalUsers] = await Promise.all([
    prisma.user
      .findMany({
        take: MAX_ITEMS_PER_PAGE,
        skip: (page - 1) * MAX_ITEMS_PER_PAGE,
        where: {
          fullName: { contains: search, mode: "insensitive" },
        },
        select: {
          id: true,
          fullName: true,
          email: true,
          referredUsers: {
            select: {
              id: true,
            },
          },
          balance: true,
          orders: {
            select: {
              id: true,
            },
          },
          role: true,
          createdAt: true,
        },
        orderBy: {
          [sort_key]: sort_order,
        },
      })
      .then((users) =>
        users
          .map((user) => ({
            ...user,
            referredCount: user.referredUsers.length,
            ordersCount: user.orders.length,
          }))
          .filter((user) => user.id !== currentUser.id)
      ),
    prisma.user.count({
      where: {
        fullName: { contains: search, mode: "insensitive" },
      },
    }),
  ]);

  console.log(users, totalUsers);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Users ({totalUsers} total)</h1>
      {/* Search bar */}
      <form
        action={async (data: FormData) => {
          "use server";
          const search = data.get("search");
          redirect(`/admin/users?search=${search}`);
        }}
        className="relative mb-8 flex"
      >
        <div className="relative flex-grow">
          <Input
            type="text"
            name="search"
            placeholder="Search users by name..."
            defaultValue={search}
            className="pl-10 pr-4 py-2 rounded-l-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <SubmitButton type="submit" className="rounded-r-full">
          Search
        </SubmitButton>
      </form>
      {users.length === 0 && (
        <NothingHere
          icon={search === "" ? "alert" : "search"}
          title="No users found"
          message={
            search === ""
              ? "There are no users in the system."
              : `No users found for "${search}".`
          }
        />
      )}
      {users.length > 0 && (
        <Table className="mb-4">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Invited Users</TableHead>
              <TableHead>Balance (KSH)</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.referredCount}</TableCell>
                <TableCell>{user.balance.toFixed(2)}</TableCell>
                <TableCell>{user.ordersCount}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <form>
                    <input type="hidden" name="userId" value={user.id} />
                    <SubmitButton
                      formAction={makeEditor}
                      variant={"outline"}
                      className={user.role === "EDITOR" ? "hidden" : ""}
                    >
                      Make Editor
                    </SubmitButton>
                    <SubmitButton
                      formAction={revokeAdmin}
                      variant={"outline"}
                      className={
                        user.role !== "EDITOR" ? "hidden" : "border-red-500"
                      }
                    >
                      Revoke Editor
                    </SubmitButton>
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalUsers / MAX_ITEMS_PER_PAGE)}
      />
    </div>
  );
};

export default UserListPage;
