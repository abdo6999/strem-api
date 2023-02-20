import env from "dotenv";
import { Pool } from "pg";

env.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  NODE_ENV_TEST,
} = process.env;
const Client =
  NODE_ENV_TEST === "test"
    ? new Pool({
      host: POSTGRES_HOST,
      database: POSTGRES_TEST_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
    }):new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
      })
    

export default Client;
