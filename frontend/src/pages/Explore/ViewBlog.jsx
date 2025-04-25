import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./viewBlog.module.scss";

const ViewBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/v1/blogs/${id}`);
        setBlog(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog details");
        setLoading(false);
        navigate("/myBlog"); // Redirect if blog doesn't exist or error occurs
      }
    };

    fetchBlog();
  }, [id, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className={classes.view_blog}>
      <h2>{blog.packageName}</h2>
      {blog.image && <img src={blog.image} alt={blog.packageName} />}
      <p><strong>Location:</strong> {blog.locations}</p>
      <p><strong>Attractions:</strong> {blog.attractions}</p>
      <p><strong>Duration:</strong> {blog.duration}</p>
      <p><strong>Price:</strong> {blog.price} Rs.</p>
      <p><strong>Description:</strong> {blog.description}</p>
      <button onClick={() => navigate("/myBlog")}>Back</button>
    </div>
  );
};

export default ViewBlog;