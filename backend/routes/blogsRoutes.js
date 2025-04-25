const express = require("express");
const { createBlog, getBlogs, deleteBlog, getBlogById } = require("../controllers/blogsController");
const router = express.Router();

// Create a new blog
router.post("/create", createBlog);

// Get all blogs
router.get("/all", getBlogs);

// Get a single blog by ID
router.get("/:id", getBlogById);

// Delete a blog by ID
router.delete("/delete/:id", deleteBlog);

module.exports = router;