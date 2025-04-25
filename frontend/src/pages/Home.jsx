import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const videos = [
    './videos/All videos.mp4',
  ];

  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "./videos/All videos.mp4"; // Set video source dynamically
    }
  }, []);

  const handleVideoEnd = () => {
    setFade(true); // Start fade-out effect
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Restart video
        videoRef.current.play();
      }
      setFade(false); // Start fade-in effect
    }, 500); // Duration of fade transition
  };

  const handleSearch = () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query === '') {
      alert("Please enter a valid search term.");
      return;
    }
    window.location.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`;
  };

  return (
    <div>
      <Navbar />
      <div className="video-container">
      <video
          ref={videoRef}
          className={`video-player ${fade ? "fade-out" : "fade-in"}`}
          muted
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
        />
        <h1>"Your Journey, Your Rules – Embrace the Solo Spirit."</h1>

        <input type="text" id="searchInput" placeholder="Where to visit ?" />
        <button type="submit" id="searchButton" onClick={handleSearch}>Search</button>
      </div>

      {/* Navbar at the bottom with Conditional Rendering for Explore */}
      <div className="card">
        <ul id="nav-down">
          <li><a href="/" id="option1">Home</a></li>
          {isLoggedIn && <li><a href="/explore" id="option">Explore</a></li>} {/* Show Explore only if logged in */}
          <li><a href="/about" id="option">About</a></li>
        </ul>

        <h2 id="blog-heading">India's famous places you can visit !!</h2>

        <div id="card-container">
          {[
            { name: "Panchavati", img: "/images/Panchavati.jpg", text: "Panchavati, is a place of great religious and historical significance. It is closely associated with the Ramayana", path: "/panchavati" },
            { name: "Jaipur", img: "/images/Jaipur.jpg", text: "Jaipur, is a vibrant city often referred to as the 'Pink City'. Jaipur is renowned for its rich history.", path: "/jaipur" },
            { name: "Rishikesh", img: "/images/Rishikesh.jpg", text: "Rishikesh, often referred to as the 'Yoga Capital of the World,' is a serene town in the Indian state of Uttarakhand.", path: "/rishikesh" },
            { name: "Manali", img: "/images/Manali.jpg", text: "Manali is a picturesque hill station. It is popular for nature lovers and adventure enthusiasts.", path: "/manali" },
            { name: "Gateway of India", img: "/images/IndiaGate.jpg", text: "The Gateway of India is a popular tourist destination and a symbol of Mumbai's vibrant culture and heritage.", path: "/gateWay" },
            { name: "Shimla", img: "/images/Shimla.jpg", text: "Shimla 'Queen of Hills' is a popular tourist destination known for its pleasant weather.", path: "/shimla" },
            { name: "Varanasi", img: "/images/varanasi.jpg", text: "Varanasi is one of the oldest cities in the world, located on the banks of the sacred River Ganges in Uttar Pradesh.", path: "/varanasi" },
            { name: "Konkan", img: "/images/Kokan.jpg", text: "Konkan is a coastal region known for its scenic beauty and delicious seafood.", path: "/konkan" },
          ].map((place, index) => (
            <div className="card1" key={index}>
              <img src={place.img} alt={`${place.name} Image`} className="card1-img" />
              <div className="card1-content">
                <h2 className="card1-heading">{place.name}</h2>
                <p className="card1-text">{place.text}</p>
                <button id="card1-button" onClick={() => navigate(place.path)}>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="about-section">
        <div className="about-content">
          <p>
            TraveSolo is your ultimate travel companion, designed to inspire solo adventurers to explore the world.
            Whether you're seeking peaceful retreats, adventurous destinations, or cultural experiences,
            TraveSolo connects you to the perfect places to visit.
          </p>
          <p>Embark on your solo adventure today!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
