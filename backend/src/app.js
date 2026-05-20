import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("TaskFlow API Running...");
});

export default app;