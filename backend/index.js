import express from "express";
import cors from "cors";
import { PORT } from "./config/config.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();
// const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
