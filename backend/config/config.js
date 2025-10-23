import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const HOST_DB = process.env.HOST_DB || "localhost";
export const USER_DB = process.env.USER_DB || "root";
export const PASSWORD = process.env.PASSWORD;
export const DATABASE = process.env.DATABASE || "tasksdb";
export const PORT_DB = process.env.PORT_DB || 3306;
