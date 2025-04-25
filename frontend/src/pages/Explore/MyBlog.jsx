import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./myBlog.module.scss";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from API on page load
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/v1/blogs/all");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };
    

    fetchBlogs();
  }, []);


  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/blogs/delete/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Blog's
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/explore">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/createBlog">
                  CreateBlog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={classes.my_blog}>
        <div className={classes.blog_list}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div className={classes.blog_card} key={blog._id}>
                {blog.image && <img src={blog.image} alt="Blog" />}
                <h3>{blog.packageName}</h3>
                <p>{blog.locations}</p>
                <Link to={`/viewblog/${blog._id}`}>
                  <button className={classes.view_but}>View</button>
                </Link>
                <button
                  className={classes.delete_but}
                  onClick={() => deleteBlog(blog._id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No blogs available. Create one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBlog;