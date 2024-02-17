import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import registerRouter from "./routes/index.js";

// receives an object of app and initializes it
const initialize = (app) => {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Serve uploaded images statically
  app.use("/", express.static("public"));

  app.use(cookieParser());
  // Separate DB configs for the scope of assignment
  // MongoDB config
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  console.log("Server started");

  // Initialize Routes
  registerRouter(app);
  // Flow:
  // server.js -> app.js -> routes -> controller -> services -> model
};

export default initialize;
