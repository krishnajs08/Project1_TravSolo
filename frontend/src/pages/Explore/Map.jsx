import React, { useState } from 'react';
import classes from './map.module.scss';

const Map = () => {
  const [location, setLocation] = useState('India');
  const [mapUrl, setMapUrl] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21111619.28269778!2d67.02186713936922!3d21.802138366034516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1737559919870!5m2!1sen!2sin'
  );

  const handleSearch = () => {
    const encodedLocation = encodeURIComponent(location);
    setMapUrl(`https://www.google.com/maps?q=${encodedLocation}&output=embed`);
  };
  
  
  

  return (
    <div className={classes.mapContainer}>
      <div className={classes.searchBar}>
        <div className={classes.navBar}>
          <a href="/" className={classes.navItem}>Home</a>
        <a href="/explore" className={classes.navItem}>Explore</a>
        </div>
        
        
        <input
          type="text"
          placeholder="Search location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={classes.searchInput}
        />
        <button onClick={handleSearch} className={classes.searchButton}>Search</button>

    
      </div>
      <iframe
        src={mapUrl}
        allowFullScreen
        loading="lazy"
        className={classes.map}
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
