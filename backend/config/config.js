import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 4000;
export const HOST_DB = process.env.HOST_DB;
export const USER_DB = process.env.USER_DB;
export const PASSWORD = process.env.PASSWORD;
export const DATABASE = process.env.DATABASE;
export const PORT_DB = process.env.PORT_DB;
