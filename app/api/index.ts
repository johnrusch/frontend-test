import axios from "axios";
import { getSession } from "~/utils/session.server";

export type LoginPayload = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};



const Api = class Api {
  baseURL: string;
  token: string | undefined;
  constructor() {
    this.baseURL = process.env.API_BASE_URL as string;
    this.token = "";
  }

  initializeInstance = () => {
    const baseURL = this.baseURL;
    console.log(baseURL);

    const instance = axios.create({
      baseURL,
      withCredentials: false,
    });

    instance.interceptors.request.use(
      (config: any) => {
        return config;
      },
      (error: any) => {
        console.log(error);

        return Promise.reject(error);
      }
    );

    return instance;
  };

  publicRequest = (url: string, method: string, data: any) => {
    const instance = this.initializeInstance();
    return instance({
      url,
      method,
      data,
    });
  };

  signInUser = (payload: LoginPayload) => {
    const url = "/auth/signIn";
    return this.publicRequest(url, "POST", payload);
  };

  async setToken(request: Request) {
    const session = await getSession(request.headers.get("Cookie"));
    const token = session.get("credentials")?.token;
    this.token = token;
  }

  authClient = (url: string, method: string, data: any) => {
    const instance = this.initializeInstance();
    instance.interceptors.request.use(
      (config: any) => {
        // const token = getStorage(Constants.AUTH_TOKEN);
        config.headers = {
          Authorization: `Bearer ${this.token}`,
        };

        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    return instance({
      url,
      method,
      data,
    });
  };
};

export default Api;
