import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from 'cookie-parser';
import cors from "cors";

import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000; // Fallback for port
const MONOGO_URL = process.env.MONOG_URI;

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
app.use(cors({
  origin: [process.env.FRONTEND_URL, "http://localhost:5173"], // Ensure this is set in your .env file
  credentials: true, // Allow credentials like cookies
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
}));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

// Database Connection
mongoose.connect(MONOGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
