const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3001;

// MongoDB connection
connectDB();

// Router imports
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogsRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blogs", blogRoutes); 

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});
