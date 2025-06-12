if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

import express, { urlencoded } from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);

const start = async () => {
  const dbConnection = await mongoose.connect(process.env.MONGO_URL);
  console.log(`db host ${dbConnection.connection.host}`);
  server.listen(8000, () => {
    console.log("server is listning on port 8000");
  });
};

start();
