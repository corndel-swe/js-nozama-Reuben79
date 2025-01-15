import knex from "knex";
import { fileURLToPath } from "url";

const uri = new URL("./db.sqlite", import.meta.url);

const db = knex({
  client: "sqlite3",
  connection: { filename: fileURLToPath(uri) },
  useNullAsDefault: true,
});

export default db;
