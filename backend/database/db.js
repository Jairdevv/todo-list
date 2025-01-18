import { createPool } from "mysql2/promise";
import {
  DATABASE,
  HOST_DB,
  PASSWORD,
  PORT_DB,
  USER_DB,
} from "../config/config.js";

export const pool = createPool({
  host: HOST_DB,
  database: DATABASE,
  password: PASSWORD,
  port: PORT_DB,
  user: USER_DB,
});
