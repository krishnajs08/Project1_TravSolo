// const express = require("express");
// const app = express();
// const cors = require("cors");
// const morgan = require("morgan");
// const colors = require("colors");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const connectDB = require("./config/db");
// let databaseError = null;

// // Load environment variables
// dotenv.config();
// const port = process.env.PORT || 3001;

// // MongoDB connection
// // connectDB().catch((error) => {
// //   console.error("Database routes will return 503 until MongoDB is reachable.");
// //   console.error("MongoDB ERROR:", error.message);
// // });

// connectDB().catch((error) => {
//   databaseError = error.message;
//   console.error("DATABASE_CONNECTION_ERROR:", error);
// });

// // Router imports
// const userRoutes = require("./routes/userRoutes");
// const blogRoutes = require("./routes/blogsRoutes");

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// // app.get("/health", (_req, res) => {
// //   const connected = mongoose.connection.readyState === 1;
// //   res.status(connected ? 200 : 503).json({
// //     status: connected ? "ok" : "degraded",
// //     database: connected ? "connected" : "disconnected",
// //   });
// // });

// app.get("/health", (_req, res) => {
//   const connected = mongoose.connection.readyState === 1;

//   res.status(connected ? 200 : 503).json({
//     status: connected ? "ok" : "degraded",
//     database: connected ? "connected" : "disconnected",
//     mongoUrlConfigured: Boolean(process.env.MONGO_URL),
//     mongooseReadyState: mongoose.connection.readyState,
//     databaseError: databaseError || null,
//   });
// });

// const requireDatabase = (_req, res, next) => {
//   if (mongoose.connection.readyState !== 1) {
//     return res.status(503).json({
//       error: "Database unavailable",
//       message: "MongoDB is disconnected. Check MONGO_URL in backend/.env.",
//     });
//   }
//   next();
// };

// // Routes
// app.use("/api/v1/user", (req, res, next) => {
//   if (req.method === "POST" && req.path === "/logout") return next();
//   return requireDatabase(req, res, next);
// }, userRoutes);
// app.use("/api/v1/blogs", requireDatabase, blogRoutes);

// // Start server
// const server = app.listen(port, () => {
//   console.log(`Server running on port ${port}`.yellow.bold);
// });

// server.on("error", (error) => {
//   if (error.code === "EADDRINUSE") {
//     console.error(`Port ${port} is already in use. Stop the other server or set PORT to a free port.`);
//   } else {
//     console.error("Backend failed to start:", error.message);
//   }
//   process.exit(1);
// });'







const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3001;

// MongoDB connection
connectDB().catch(() => {
  console.error("Database routes will return 503 until MongoDB is reachable.");
});

// Router imports
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogsRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  const connected = mongoose.connection.readyState === 1;
  res.status(connected ? 200 : 503).json({
    status: connected ? "ok" : "degraded",
    database: connected ? "connected" : "disconnected",
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
app.use("/api/v1/user", (req, res, next) => {
  if (req.method === "POST" && req.path === "/logout") return next();
  return requireDatabase(req, res, next);
}, userRoutes);
app.use("/api/v1/blogs", requireDatabase, blogRoutes);

// Start server
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

