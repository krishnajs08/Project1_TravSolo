

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("colors"); // No need to assign to a variable since it extends String.prototype
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3001;

let databaseError = null;

// Middleware to ensure DB connection is ready before processing the request
const ensureConnection = async (req, res, next) => {
  try {
    await connectDB();
    databaseError = null; // Reset error on successful connection
    next();
  } catch (error) {
    databaseError = error.message;
    console.error("DATABASE_CONNECTION_ERROR:", error);
    // Don't crash the serverless function, let requireDatabase handle the response below
    next();
  }
};

// Router imports
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogsRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Attach connection wrapper to all incoming API requests
app.use(ensureConnection);

app.get("/health", (_req, res) => {
  const connected = mongoose.connection.readyState === 1;

  res.status(connected ? 200 : 503).json({
    status: connected ? "ok" : "degraded",
    database: connected ? "connected" : "disconnected",
    mongoUrlConfigured: Boolean(process.env.MONGO_URL),
    mongooseReadyState: mongoose.connection.readyState,
    databaseError: databaseError || null,
  });
});

const requireDatabase = (_req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      error: "Database unavailable",
      message: "MongoDB is disconnected. Check MONGO_URL in backend/.env.",
    });
  }
  next();
};

// Routes
// ... (Your routes and middleware are above this)

// Routes
app.use("/api/v1/user", (req, res, next) => {
  if (req.method === "POST" && req.path === "/logout") return next();
  return requireDatabase(req, res, next);
}, userRoutes);

app.use("/api/v1/blogs", requireDatabase, blogRoutes);


// ==========================================
// REPLACE YOUR OLD START SERVER BLOCK WITH THIS:
// ==========================================
if (process.env.NODE_ENV !== "production") {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`.yellow.bold);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error(`Port ${port} is already in use. Stop the other server or set PORT to a free port.`);
    } else {
      console.error("Backend failed to start:", error.message);
    }
    process.exit(1);
  });
}

// MUST EXPORT FOR VERCEL SERVERLESS
module.exports = app;

