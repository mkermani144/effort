/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "postgresql",
  connection: process.env.POSTGRES_URL,
};
