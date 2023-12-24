import knexFactory from "knex";

const knex = knexFactory({
  client: "pg",
  connection: process.env.POSTGRES_URL,
});

export default knex;
