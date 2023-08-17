import { type LoaderFunction, redirect } from "@remix-run/node";
import { requireUserSession } from "~/utils/session.server";

export let loader: LoaderFunction = async ({ request }) => {
  console.log("root action")
    try {
        const session = await requireUserSession(request);
        const credentials = session.get("credentials");
        const user = credentials?.user;
        if (user?.role === "SYS_ADMIN") {
            return redirect("/admin");
        } 
        return redirect("/dashboard");
    } catch (error) {
        return redirect("/sign-in");
    }
}

export default function RootRoute() {
  return (
    <div>
      
    </div>
  );
}