"use client";

import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import TextField from "@/components/TextField";

import register from "./register-action";

const SignupPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-12 w-screen">
      <form className="w-5/6 max-w-xl" action={register}>
        <FormWrapper header="Effortify.">
          <TextField title="Email" type="text" name="email" />
          <TextField title="Password" type="password" name="password" />
          <Button classes={["self-end", "mt-2", "w-24 md:w-36"]} type="submit">
            Signup
          </Button>
        </FormWrapper>
      </form>
    </main>
  );
};

export default SignupPage;
