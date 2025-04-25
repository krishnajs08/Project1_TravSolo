import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./createBlog.module.scss";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    packageName: "",
    description: "",
    locations: "",
    attractions: "",
    duration: "",
    price: "",
    image: "",
  });

  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/v1/blogs/create");

      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
  
    console.log("File selected:", file.type); // Check file type
  
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log("Base64 data:", reader.result); // Check if the image is converted properly
      setBlog({ ...blog, image: reader.result });
    };
    reader.readAsDataURL(file);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/api/v1/blogs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      
  
      const data = await response.json();
      if (response.ok) {
        console.log("Blog Created:", data);
        navigate("/myBlog"); // Redirect on success
      } else {
        console.error("Error:", data);
        alert("Failed to create blog");
      }
    } catch (error) {
      console.error("Request Failed:", error);
      alert("Something went wrong");
    }
  };
  
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/blogs/delete/${id}`);

      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  return (
    <div className={classes.whole2}>
      <div className={classes.out}>
        <div className={classes.overlay}>
          <p>🏕️  𝓒𝓻𝓮𝓪𝓽𝓮 𝔂𝓸𝓾𝓻 𝓭𝓻𝓮𝓪𝓶 𝓣𝓻𝓪𝓿𝓮𝓵 𝓑𝓵𝓸𝓰! 🏝️</p>
        </div>
        <div className={classes.opt}>
          <a href="/">Home</a>
          <a href="/explore">Explore</a>
        </div>
      </div>

      <div className={classes.create_blog}>
        <h2> MyBlog 😊✈️🌍</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="packageName" placeholder="Package Name" value={blog.packageName} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={blog.description} onChange={handleChange} required />
          <input type="text" name="locations" placeholder="Locations" value={blog.locations} onChange={handleChange} required />
          <input type="text" name="attractions" placeholder="Attractions" value={blog.attractions} onChange={handleChange} required />
          <input type="text" name="duration" placeholder="Duration" value={blog.duration} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price" value={blog.price} onChange={handleChange} required />
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          <button type="submit">Create Blog</button>
        </form>
      </div>

      
    </div>
  );
};

export default CreateBlog;
