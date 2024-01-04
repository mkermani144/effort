const { default: knex } = require("@/knex");

const registerUser = (email, password) => {
  return knex("users").insert({
    email,
    password,
  });
};

const registerRepository = {
  registerUser,
};

export default registerRepository;
