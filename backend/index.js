import express, { json } from "express";
import cors from "cors";
import { PORT } from "./config/config.js";

const app = express();
// const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
