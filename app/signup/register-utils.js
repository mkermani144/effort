import { hash } from "bcrypt";

import { SignJWT } from "jose";

export const encryptPassword = async (rawPassword) => {
  return hash(rawPassword, 10);
};

const secret = new TextEncoder().encode(
  "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
);
export const generateJWT = async (email) => {
  const token = await new SignJWT({
    email,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d") // Set your own expiration time
    .sign(secret);

  return token;
};
