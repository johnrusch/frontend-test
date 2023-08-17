import { Outlet } from "@remix-run/react";
import OrganizationBar from "~/components/OrganizationBar";
import type { LoaderArgs } from "@remix-run/node";
import { requireUserSession } from "~/utils/session.server";

export async function loader({ request }: LoaderArgs) {
  return await requireUserSession(request);
}

export default function AppLayout() {
  return (
    <>
      <OrganizationBar />
      <Outlet />
    </>
  );
}
