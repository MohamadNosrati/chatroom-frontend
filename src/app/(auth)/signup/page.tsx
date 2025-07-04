"use client";
import CustomInput  from "@/coponents/ui/shared/customInput";
import { signUpAction } from "@/lib/actions/auth/authActions";
import { Input } from "@heroui/react";

const SignUp = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="rounded-4xl p-6 bg-white w-96">
        <h1 className="text-center text-cyan-500 mb-10">singup please!</h1>
        <form className="w-full" action={signUpAction}>
          <div className="w-full">
            <label htmlFor="email">email</label>
            <Input classNames={{
                mainWrapper:"w-full"
            }}  fullWidth color="danger" radius="full" name="email" />
          </div>
          <div className="w-full">
            <label htmlFor="userName">userName</label>
            <CustomInput fullWidth color="danger" radius="full" name="userName" />
          </div>
          <div className="w-full">
            <label htmlFor="password">password</label>
            <CustomInput fullWidth color="danger" radius="full" type="password" name="password" />
          </div>
          <button className="bg-cyan-500 w-full rounded-3xl text-center mt-4 text-white capitalize text-lg font-bold" type="submit">submit</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
