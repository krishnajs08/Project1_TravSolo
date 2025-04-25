
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const GateWay = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/gate (1).jpg", "./images/gate1.jpg", "./images/gate2.jpg", "./images/gate (2).jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Data for food items and their images
  const foodData = {
    budhaHalwai: {
      name: 'Vada Pav',
      location: 'Aaram Vada Pav',
      images: [
        './images/mumbai1.jpg',
        
      ],
    },
    samarthaJuice: {
      name: 'PavBhaji',
      location: 'Sukh Sagar',
      images: [
        './images/mumbai3.jpg',
        
      ],
    },
    karadBhel: {
      name: 'Dabeli',
      location: 'Thakur Village, just ahead of the Vasant Sagar entrance gate, known for his cheese dabeli.c',
      images: [
        './images/mumbai4 .jpg',
        
      ],
    },
    sayantara: {
      name: 'Bhaji',
      location: 'Shree Siddhivinayak Fast Food',
      images: [
        './images/mumbai2.jpg',
        
      ],
    },
  };

  // Function to handle food item click
  const handleFoodClick = (foodKey) => {
    setSelectedFood(foodKey);
  };

return (
    <div className="bg-body-tertiary">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./symbols/location.png" alt="loc" id="loc" /> GateWay of India🏛️
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
                <a className="nav-link active" aria-current="page" href="#intro">
                  Introduction
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#history">
                  History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#places">
                  Places
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#food">
                  Food
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" >
                  Home
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel and Map */}
      <div id="upper">
      <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} className="carousel-item" alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
    </div>
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2125433647457!2d72.83207937497328!3d18.921984082251164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sGateway%20Of%20India%20Mumbai!5e0!3m2!1sen!2sin!4v1737575687692!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            id='map'
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Information Section */}
      <div id="information">
        <div>
          <h3 id="intro">Gateway to India, Embracing the Spirit of the Nation!</h3>
          <p>
          The Gateway of India, located at Apollo Bunder in Mumbai, is one of the city’s most iconic landmarks. Built in 1924, it was constructed to commemorate the visit of King George V and Queen Mary to India in 1911. Designed by British architect George Wittet, the structure showcases a blend of Hindu and Muslim architectural styles with influences from the Indo-Saracenic design. Made of yellow basalt and reinforced concrete, the Gateway stands at a height of approximately 26 meters (85 feet) and overlooks the Arabian Sea.
          </p>
          <br />
          <h3 id="history">History</h3>
          <p>
          Historically, the Gateway of India served as a ceremonial entrance for British Viceroys and dignitaries arriving by sea. After India’s independence in 1947, it also became a symbolic site marking the departure of British troops in 1948. Today, it is a major tourist attraction, offering stunning views of the Arabian Sea and serving as a starting point for ferries to the UNESCO World Heritage Site of Elephanta Caves. Surrounded by vibrant street markets and food stalls, and located near the iconic Taj Mahal Palace Hotel, the Gateway of India remains a bustling hub for locals and tourists alike.
          </p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">More information about Gateway of india</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
               
                <section>
                  <div id="location_info">
                  <p>
          The Gateway of India is a grand historical monument located in Mumbai, Maharashtra, along the waterfront at Apollo Bunder, overlooking the Arabian Sea. It stands as a prominent symbol of Mumbai’s rich colonial past and a testament to the city’s role as a major port during British rule. The monument, built in 1924, was constructed to honor the visit of King George V and Queen Mary to India in 1911. Though the foundation stone was laid during their visit, the actual construction of the Gateway began in 1915 and was completed in 1924.
            </p>
            
            <p>Designed by British architect George Wittet, the Gateway of India reflects a harmonious blend of Indo-Saracenic architectural style, characterized by intricate latticework and domes, with subtle elements of Gujarati and Islamic architecture. The structure, standing at a height of 26 meters (85 feet), is made of yellow basalt and reinforced concrete. Its prominent central arch, flanked by smaller arches and crowned with a central dome, offers a majestic and imposing appearance.</p>
            <br />
            <p>The location of the Gateway of India was strategically chosen at Apollo Bunder, a bustling waterfront area that served as a key arrival point for British governors, dignitaries, and merchants traveling by sea. It was initially used as a ceremonial entrance to India, symbolizing the grandeur of the British Empire. After India gained independence in 1947, the Gateway became historically significant as the site where British troops departed India in 1948, marking the end of colonial rule.</p>
            <br />
            <p>Over the years, the Gateway of India has transformed into a cultural and social hub. Its location near the iconic Taj Mahal Palace Hotel, built in 1903, enhances its historical importance. The monument is surrounded by vibrant street vendors, offering local snacks and souvenirs, and provides a lively atmosphere for tourists and locals alike. It also serves as the departure point for ferries to the Elephanta Caves, a UNESCO World Heritage Site located on an island in the Arabian Sea, famous for its ancient rock-cut sculptures and temples dedicated to Lord Shiva.</p>
            <br />
            <p>The Gateway of India has witnessed significant historical events, cultural celebrations, and public gatherings over the decades. It has become a symbolic entry point to Mumbai, often referred to as the "City of Dreams." Today, the monument is a popular tourist attraction and a serene spot to enjoy views of the sea, particularly at sunrise and sunset. Illuminated at night, the Gateway stands as a glowing reminder of Mumbai's storied past and its enduring legacy as a global city.</p>
            <br />
                  </div>
                  
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-body-tertiary">
      {/* Navbar and other sections... */}

      <div className="bg-body-tertiary">
      {/* Navbar and other sections... */}

      {/* Food Section */}
    
      <div id="food" className="container mt-4">
        <h3>Food</h3>

        {/* Food List */}
        <div className="food-list">
          {Object.keys(foodData).map((foodKey) => (
            <div
              key={foodKey}
              className={`food-item ${selectedFood === foodKey ? 'active' : ''}`}
              onClick={() => handleFoodClick(foodKey)}
            >
              <h4>{foodData[foodKey].name}</h4>
              <p>
                <strong>Location:</strong> {foodData[foodKey].location}
              </p>
            </div>
          ))}
        </div>
        

        {/* Display Images for Selected Food */}
        {selectedFood && (
          <div className="food-images">
            {foodData[selectedFood].images.map((image, index) => (
              <img key={index} src={image} alt={`${foodData[selectedFood].name} ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
    </div>
    
  );
};

export default GateWay  ;