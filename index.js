import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//ROUTES
import userRoute from "./routes/users-route.js";
import videoRoute from "./routes/videos-route.js";
import commentRoute from "./routes/comments-route.js";
import authRoute from "./routes/auth.js";
import ReportsRoute from "./routes/reports-route.js";

//Drench Routes
import clientsRoute from "./routes/clients-route.js";

import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const connectDB = () => {
  mongoose
    .connect(process.env.DRENCH_DATABASE, { useNewUrlParser: true })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true }));

app.use("/api/clients", clientsRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);
app.use("/api/reports", ReportsRoute);

app.use((err, request, response, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return response.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`port is listening on ${PORT}`);
  console.log("express connected");
});
