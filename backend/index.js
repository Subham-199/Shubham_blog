import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from 'cookie-parser';
import cors from "cors";
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));

// CORS Configuration
app.use(cors({
  origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Content Security Policy Middleware
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://your-allowed-scripts-source.com;
        connect-src 'self' https://rajblog-app.onrender.com;
        img-src 'self' data:;
        style-src 'self' 'unsafe-inline' https://your-allowed-styles-source.com;
        font-src 'self' https://rajblog-app.onrender.com;
    `);
    next();
});

// File upload configuration
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

// Database Connection
mongoose.connect(MONGO_URL)
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
