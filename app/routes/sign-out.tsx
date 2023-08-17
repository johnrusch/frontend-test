// routes/sign-out.tsx
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logOut } from "../utils/session.server";

export let action = async ({ request }: ActionArgs) => {
  console.log("sign out action");
  return logOut(request);
};

export const loader = async () => redirect("/");
