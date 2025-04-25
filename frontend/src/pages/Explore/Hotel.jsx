import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./hotel.module.scss";
import logo from "../../assets/images/1-removebg-preview.png";
import hotelImg from "../../assets/images/hotel.jpg";

const BlogPage = () => {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [initialHotels, setInitialHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/api.json")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setInitialHotels(shuffleArray(data).slice(0, 9));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const filteredHotels = searchQuery
    ? hotels.filter((hotel) =>
        hotel.property_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.state?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : initialHotels;

  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={classes.navLinks}>
          <a href="/" className={classes.navItem}>Home</a>
          <a href="/explore" className={classes.navItem}>Explore</a>
        </div>
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder="Search hotels by name, city, or state..."
            className={classes.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={classes.searchButton}>Search</button>
        </div>
      </nav>
      <div className={classes.wallpaper}>
        <img src={hotelImg} alt="Hotel" className={classes.wallpaperImage} />
      </div>
      <div className={classes.blog_container}>
        <div className={classes.blog_grid}>
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <div
                key={index}
                className={classes.blog_card}
                onClick={() => navigate(`/hotel/${hotel.uniq_id}`, { state: hotel })}
              >
                <h2 className={classes.blog_hotel}>{hotel.property_name}</h2>
                <p className={classes.blog_location}>{hotel.city}, {hotel.state}</p>
                <p className={classes.blog_category}>Category: {hotel.room_type}</p>
                <p className={classes.blog_rooms}>Total Rooms: {hotel.room_count}</p>
                <p className={classes.blog_address}>{hotel.address}</p>
              </div>
            ))
          ) : (
            <p className={classes.no_results}>No matching hotels found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
