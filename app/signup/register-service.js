import { encryptPassword, generateJWT } from "./register-utils";
import registerRepository from "./register-repository";

const registerUser = async (email, rawPassword) => {
  // TODO: add validation
  const password = await encryptPassword(rawPassword);

  await registerRepository.registerUser(email, password);

  const token = await generateJWT(email);

  return token;
};

const registerService = {
  registerUser,
};

export default registerService;
