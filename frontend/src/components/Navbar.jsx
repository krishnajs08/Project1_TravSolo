import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import logoLight from "../assets/images/1-removebg-preview.png"; // Default logo
import logoDark from "../assets/images/logoBlack.png"; // Scrolled logo

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      // Call logout endpoint
      await axios.post(`http://localhost:3001/api/v1/user/logout`);

      // Clear local storage
      localStorage.removeItem("authToken");
      localStorage.removeItem("userId");

      // Update state
      setIsLoggedIn(false);

      alert("Logout successful!");
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error while logging out. Try again.");
    }
  };

  return (
    <div className="container">
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <img src={scrolled ? logoDark : logoLight} alt="Logo" className="logo" />
        <ul id="menu">
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className={scrolled ? "scrolled-text" :"default-text"} id="logout">Logout</button>
            </li>
          ) : (
            <>
              <li>
                <a href="/login" className={scrolled ? "scrolled-text" : "default-text"}>Login</a>
              </li>
              <li>
                <a href="/register" className={scrolled ? "scrolled-text" : "default-text"}>Register</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
