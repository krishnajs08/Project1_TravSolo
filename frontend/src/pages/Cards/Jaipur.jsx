
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const Jaipur = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/jaipur (2).jpg", "./images/jaipur1.jpg", "./images/jaipur (3).jpg", "./images/jaipur (4).jpg", "./images/jaupur5.jpg"];
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
      name: 'dal bhati',
      location: 'Chokhi Dhani , 5 star restro',
      images: [
        './images/jaipurF2.jpg',
        './images/jaipurF3.jpg',
        './images/jaipurF1.jpg',
        './images/jaipurF4.avif',
      ],
    },
    samarthaJuice: {
      name: 'Kullad Lassi',
      location: 'Shreenath Lassiwala , Ground Floor Shop No 314 Mirza Ismail Road | Near Raj Mandir Cinema Hall, Jaipur 302001',
      images: [
        './images/jaipurF5.jpg',
        './images/jaipurF6.jpg',
        './images/jaipurF7.jpg',
        './images/jaipurF8.jpg',
      ],
    },
    karadBhel: {
      name: 'Ghevar',
      location: 'Sambhar Fini in Johari Bazaar and Laxmi Mishthan Bhandar in Johri Bazar',
      images: [
        './images/jaipurF9.jpg',
        './images/jaipurF10.jpg',
        './images/jaipurF11.jpg',
        './images/jaipurF12.jpg',
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
            <img src="./symbols/location.png" alt="loc" id="loc" /> Jaipur
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05321101635!2d75.62574595312087!3d26.885115144570598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1737549226882!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Information Section */}
      <div id="information">
        <div>
          <h3 id="intro">🏰 Jaipur: Where Royal Heritage Meets Vibrant Culture! 🏰</h3>
          <p>
          Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.
          </p>
          
        <br />
          <h3 id="history">History</h3>
          <p>
          Jaipur, the capital city of Rajasthan, is famously known as the "Pink City" and boasts a rich history deeply rooted in royal grandeur and architectural brilliance. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was meticulously planned as India’s first well-designed city. The Maharaja, a visionary leader and an astronomer, built the city based on Vastu Shastra and Shilpa Shastra principles, ensuring a harmonious balance between aesthetics and functionality. The city was laid out in a grid system with wide streets and distinct zones for commercial, residential, and administrative purposes, making it a marvel of urban planning. The iconic pink color, which symbolizes hospitality, was introduced in 1876 during the visit of Prince Albert of Wales, giving Jaipur its nickname.
          </p>
          <p>
          The city’s history is intertwined with its stunning architecture and cultural heritage. Landmarks like the Amer Fort, Hawa Mahal, Jantar Mantar (an astronomical observatory and a UNESCO World Heritage site), and City Palace reflect the blend of Rajput, Mughal, and European architectural styles. Jaipur was not only a hub of trade and culture but also a center of arts, with the royals promoting crafts like gemstone cutting, block printing, and jewelry making. Today, Jaipur stands as a vibrant testament to its royal past, seamlessly blending tradition and modernity, making it a cherished destination for history, culture, and architecture enthusiasts.
          </p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">Places You Can Visit in Jaipur</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
                <h5>1)Amber Fort (Amer Fort)</h5>
                <section>
                  <div id="location_info">
                    <p>
                    Amber Fort, located about 11 km from Jaipur, is a magnificent palace built in 1592 by Raja Man Singh. Perched on a hill, it offers breathtaking views of Maota Lake and the surrounding landscape. The fort is a fine blend of Rajput and Mughal architecture, featuring stunning courtyards, intricate mirror work, and impressive frescoes. Key attractions inside the fort include the Sheesh Mahal (Mirror Palace), Diwan-e-Aam (Hall of Public Audience), and Diwan-e-Khas (Hall of Private Audience). The fort's grandeur makes it a UNESCO World Heritage Site and a must-visit for history enthusiasts.
                    </p>
                    <p>
                    Visitors can enjoy an elephant ride up to the fort or take a jeep ride to explore its beauty. The sound and light show in the evening adds to its charm, narrating the history of Amber and Jaipur. Amber Fort is a popular destination not just for its architecture but also for its historical significance, giving visitors a glimpse into the opulence of Rajasthan’s royal past.
                    </p>
                  </div>
                  <img src="./images/ambar.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kalaram Temple */}
            <section className="info_block">
              <div>
                <h5>2)   Hawa Mahal (Palace of Winds)</h5>
                <section>
                  <div id="location_info">
                    <p>
                    The Hawa Mahal, an iconic symbol of Jaipur, is a five-story architectural marvel built in 1799 by Maharaja Sawai Pratap Singh. Designed with 953 small windows or "jharokhas," it resembles a honeycomb and was constructed to allow royal women to observe street festivities without being seen. Made of pink sandstone, the palace showcases the finest example of Rajput architecture with delicate latticework and intricate carvings.
                    </p>
                    <p>
                    The palace is particularly stunning during sunrise when the morning light illuminates its façade. Visitors can climb up to the top for a panoramic view of the bustling Jaipur streets and the Jantar Mantar. The Hawa Mahal also houses a small museum displaying artifacts, weapons, and other relics from the royal era, making it an enriching cultural experience for travelers.
                    </p>
                  </div>
                  <img src="./images/hawamehel.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kapaleshwar Temple */}
            <section className="info_block">
              <div>
                <h5>3)City Palace</h5>
                <section>
                  <div id="location_info">
                    <p>
                    The City Palace, situated in the heart of Jaipur, is a stunning complex that showcases a blend of Mughal and Rajput architectural styles. Built by Maharaja Sawai Jai Singh II, the palace features several courtyards, gardens, and buildings, each boasting intricate detailing and grandeur. Key attractions include the Chandra Mahal, which is still home to the royal family, and the Mubarak Mahal, which houses a museum showcasing royal costumes, weapons, and artifacts.
                    </p>
                    <p>
                    The City Palace is a testament to the royal lifestyle of Jaipur’s rulers and offers visitors a glimpse into the region's rich history. The Peacock Gate, adorned with intricate patterns and vibrant colors, is one of the most photographed spots in the palace. Guided tours are available, and the evening light illuminations make the palace even more enchanting for visitors..
                    </p>
                  </div>
                  <img src="./images/city palace.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Ramkund */}
            <section className="info_block">
              <div>
                <h5> 4) Jal Mahal (Water Palace)</h5>
                <section>
                  <div id="location_info">
                    <p>
                    The Jal Mahal, or Water Palace, is a serene architectural wonder located in the middle of Man Sagar Lake. Built in the 18th century by Maharaja Madho Singh, the palace is an exquisite example of Rajput and Mughal styles. Though the palace appears to float on water, it has five stories, with four submerged underwater. The structure is made of red sandstone and offers a breathtaking view against the backdrop of the Aravalli hills.
                    </p>
                    <p>
                    While entry into the palace is restricted, visitors can enjoy the picturesque views from the lake's shore or take a boat ride. The surrounding area is a birdwatcher’s paradise, as many migratory and local birds can be spotted near the lake. Jal Mahal is especially captivating at night when it is beautifully lit, creating a magical reflection on the water.
                    </p>
                  </div>
                  <img src="./images/jal mahal.jpg" alt="Sample Image" id="si" />
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

export default Jaipur;