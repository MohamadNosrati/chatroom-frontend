"use server";
import { redirect } from "next/navigation";
import authServices from "@/lib/services/authServices";
import {
  Ijwt,
  ISigninValues,
  ISignResponse,
  ISignupValues,
} from "@/lib/types/auth";
import { cookies } from "next/headers";
import frontRoutes from "@/lib/routes/frontRoutes";

export const signUpAction = async (formData: FormData) => {
  try {
    const payload = {
      email: formData.get("email"),
      userName: formData.get("userName"),
      password: formData.get("password"),
    };
    const { data } = await authServices.signup(payload as ISignupValues);
    setToken(data.data);
    redirect("/dashboard");
  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) {
      throw err; // rethrow to allow redirect to proceed
    }
    console.log("Signup error:", err);
  }
};

export const singInAction = async (formData: FormData) => {
  try {
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const { data } = await authServices.signin(payload as ISigninValues);
    setToken(data.data);
    redirect("/dashboard");
  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) {
      throw err; // rethrow to allow redirect to proceed
    }
    console.log("signin error:", err);
  }
};

export const setToken = async (data: ISignResponse) => {
  try {
    const jwt = {
      token: data.token,
      userId: data.user._id,
    };
    const cookieStore = await cookies();
    console.log("this is jwt", jwt);
    cookieStore.set(process.env.NEXT_PUBLIC_TOKEN_KEY!, JSON.stringify(jwt), {
      expires: new Date(
        Date.now() +
          Number(process.env.NEXT_PUBLIC_TOKEN_EXPIRE_DATE) * 24 * 3600 * 1000
      ),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    console.log("token settttted");
  } catch (err) {
    console.log(err);
  }
};

export const getToken: () => Promise<Ijwt | null> = async () => {
  try {
    const cookiesStore = await cookies();
    const cookie = cookiesStore.get(process.env.NEXT_PUBLIC_TOKEN_KEY!);
    if (cookie?.value) {
      console.log("gc", JSON.parse(cookie?.value));
      return JSON.parse(cookie?.value);
    }
    return null;
  } catch (error) {
    console.log("getToken", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.set(process.env.NEXT_PUBLIC_TOKEN_KEY as string, "");
    redirect(frontRoutes.signin())
  } catch (err:any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) {
      throw err; // rethrow to allow redirect to proceed
    }
  }
};
