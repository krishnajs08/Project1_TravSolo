import React from 'react'
import classes from "./explore.module.scss"
import logoBlack from '../assets/images/logoBlack.png'; // Import images
import homeIcon from '../assets/symbols/home.png';
import hotelIcon from '../assets/symbols/hotel.png'
import mapIcon from '../assets/symbols/map.png';
import blogIcon from '../assets/symbols/edit.png';
import resumeIcon from '../assets/symbols/blog.png';
import indiaMap from '../assets/images/indiamap.jpg';
import calender from '../assets/symbols/calender.png'
const Explore = () => {
  return (
  
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          <img src={logoBlack} alt="Logo" />
        </div>
        <div className={classes['nav-links']}>
          <a href="/">
            <img src={homeIcon} alt="home" /> Home
          </a>
          <a href="/hotel">
            <img src={hotelIcon} alt="hotel" /> Hotel
          </a>
          <a href="/map">
            <img src={mapIcon} alt="map" /> Map
          </a>
          <a href="/createblog">
            <img src={blogIcon} alt="blogs" /> CreateBlog
          </a>
          <a href="/myBlog">
            <img src={resumeIcon} alt="YourBlog" /> Blog's
          </a>
          <a href="/calender">
            <img src={calender} alt="YourBlog" /> TravCalender
          </a>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes['explore-container']}>
          <img src={indiaMap} alt="map" />
        </div>
      </div>
    </div>
    
  )
}

export default Explore
