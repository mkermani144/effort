"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import registerService from "./register-service";

/**
 * @param {FormData} formData
 */
const register = async (formData) => {
  try {
    const token = await registerService.registerUser(
      formData.get("email"),
      formData.get("password")
    );

    cookies().set("token", token, "/");
  } catch (error) {
    // TODO:
  }

  redirect("/");
};

export default register;
