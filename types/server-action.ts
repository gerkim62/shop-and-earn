"use server";

type ServerActionReturnType<TData> = Promise<
  | never
  | {
      success: boolean;
      message: string;
      data: TData | unknown;
    }
>;

async function serverAction<TData>({}: FormData): Promise<ServerActionReturnType<TData>> {
  throw new Error(
    "This is a workaround for the ServerAction type. Do not use this function."
  );
}

export type ServerAction = typeof serverAction;

export default ServerActionReturnType;
