import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./hotelDetails.module.scss";
import logo from "../../assets/images/1-removebg-preview.png";
const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state;

  if (!hotel) {
    return <p className={classes.error}>Hotel details not found.</p>;
  }

  return (
    <div>
        <nav className={classes.navbar}>
                <div className={classes.logo}>
                  <img src={logo} alt="Logo" />
                </div>
                <div className={classes.navLinks}>
                  <a href="/" className={classes.navItem}>Home</a>
                  <a href="/explore" className={classes.navItem}>Explore</a>
                  <a href="/hotel" className={classes.navItem}>Hotels</a>
                </div>
                
              </nav>
        <p className={classes.title}>{hotel.property_name}</p>
    <div className={classes.container}>
      
      <p className={classes.location}>{hotel.city}, {hotel.state}</p>
      <p className={classes.address}>{hotel.address}</p>
      <p className={classes.description}>{hotel.hotel_description}</p>
      <div className={classes.details}>
        <p><strong>Room Type:</strong> {hotel.room_type}</p>
        <p><strong>Total Rooms:</strong> {hotel.room_count}</p>
        <p><strong>Facilities:</strong> {hotel.hotel_facilities}</p>
      </div>
      <a 
    href={hotel.pageurl} 
    className={classes.bookingLink} 
    target="_blank"    // open the link on new tab
    rel="noopener noreferrer"  // security while opening new tab
    >
  Book Now
</a>

    </div>
    </div>
  );
};

export default HotelDetails;
