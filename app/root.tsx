import {
  type MetaFunction,
  type LinksFunction,
  type LoaderArgs,
  json,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getUserSession } from "~/utils/session.server";

import Header from "./components/Header";

import GlobalStylesUrl from "./styles/global.css";
import BootstrapStylesUrl from "./styles/bootstrap.min.css";
import HeaderStylesUrl from "./styles/header.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css",
  },
  { rel: "stylesheet", href: GlobalStylesUrl },
  { rel: "stylesheet", href: BootstrapStylesUrl },
  { rel: "stylesheet", href: HeaderStylesUrl },
];

export async function loader({ request }: LoaderArgs) {
  try {
    const session = await getUserSession(request);
    const credentials = session.get("credentials");
    if (credentials) {
      const user = credentials?.user;
      return json(user);
    }
    return json(null);
  } catch (error) {
    console.log("error: ", error);
    return json({ user: null });
  }
}

export default function App() {
  const user = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header user={user}/>
        <main className="container-fluid">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
