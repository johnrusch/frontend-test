import { createCookieSessionStorage, redirect } from "@remix-run/node";

type SessionData = {
  credentials: {
    token: string;
    user: {
      email: string;
      role: string;
      name: string;
    };
  };
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__session",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 1000 * 60 * 60,
      secrets: [process.env.SESSION_SECRET as string],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };

export async function getUserSession(request: Request) {
  // get the session
  return await getSession(request.headers.get("Cookie"));
}

export async function requireUserSession(request: Request) {
  // get the session
  const session = await getUserSession(request);

  // check if session has the credentials
  if (!session.has("credentials")) {
    // if there is no user session, redirect to login
    throw redirect("/sign-in");
  }

  return session;
}

export async function getSessionUserRole(request: Request) {
  const session = await requireUserSession(request);

  const credentials = session.get("credentials");
  if (credentials) {
    const { role } = credentials.user;
    return role;
  }
  return null;
}

export async function logOut(request: Request) {
  console.log("logging out")
  const session = await getUserSession(request);
  return redirect("/sign-in", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  })
}

export async function redirectToRoleDashboard(request: Request) {
  const session = await requireUserSession(request);

  // check if session has the credentials
  if (!session.has("credentials")) {
    // if there is no user session, redirect to login
    throw redirect("/sign-in");
  }

  const credentials = session.get("credentials");
  if (credentials) {
    const { role } = credentials.user;
    if (role === "SYS_ADMIN") {
      throw redirect("/admin");
    } else {
      throw redirect("/dashboard");
    }
  }
  return credentials;
}
