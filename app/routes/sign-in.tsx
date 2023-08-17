import TextFieldMd from "~/components/TextFieldMd";
import { type ActionArgs, redirect } from "@remix-run/node";
import { Form, useSearchParams, useActionData } from "@remix-run/react";
import { getSession, commitSession } from "~/utils/session.server";
import Api from "~/api";

export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string) {
  if (password.length < 6) {
    return "Passwords must be at least 6 characters long";
  }
}

export function validateUrl(url: string) {
  const urls = ["/"];
  if (urls.includes(url)) {
    return url;
  }
  return "/";
}

export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const form = await request.formData();
  const password = form.get("password");
  const email = form.get("email");
  if (typeof password !== "string" || typeof email !== "string") {
    return new Response("Bad Request", { status: 400 });
  }

  const payload = {
    email,
    password,
  };

  const api = new Api();

  try {
    const response = await api.signInUser(payload);
    const sessionPayload = {
      token: response.data.accessToken,
      user: {
        email: response.data.user.email,
        role: response.data.user.userrole,
        name: `${response.data.user.firstname} ${response.data.user.lastname}`,
      },
    };
    session.set("credentials", sessionPayload);
    return redirect("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error: any) {
    console.log("error signing in: ", error, typeof error);
    return Error(error);
  }

};

export default function SignIn() {
  // const actionData = useActionData<typeof action>();
  const [searchParams] = useSearchParams();
  return (
    <div className="container">
      <div className="row justify-content-md-center mt-1 mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Sign in</h2>
              {/* #parse("../__inc/validation-msgs.vm") */}
              <Form className="md-form" method="post">
                <input
                  type="hidden"
                  name="redirectTo"
                  value={searchParams.get("redirectTo") ?? undefined}
                />
                <TextFieldMd
                  name="email"
                  label="Email"
                  tabIndex={1}
                  required={true}
                ></TextFieldMd>
                <TextFieldMd
                  name="password"
                  label="Password"
                  tabIndex={2}
                  required={true}
                >
                  <small className="form-text text-right">
                    <a href="/password/forgot" tabIndex={6}>
                      Forgot password?
                    </a>
                  </small>
                </TextFieldMd>
                {/* <div className="checkbox">
                <label>
                    <input value="true" name="rememberme" type="checkbox" tabindex="3"></input>
                    <i className="helper"></i>
                    Remember me
                </label>
                </div> */}
                <div className="pt-3">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                    tabIndex={4}
                  >
                    Sign in
                  </button>
                  <a
                    className="btn btn-link btn-sm"
                    role="button"
                    href="/sso/login"
                  >
                    NRC Health Account Login
                  </a>
                </div>
              </Form>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
