"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const search = async (formData: FormData) => {
  const searchQuery = formData.get("search_term");
  const searchTarget = formData.get("search_target");

  if (typeof searchQuery !== "string" || typeof searchTarget !== "string") {
    return;
  }

  revalidatePath("/admin");
  redirect(`/admin?${searchTarget}_search_query=${searchQuery.trim()}`);
};

export default search;
