
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const Shimla = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/shimla1.jpg", "./images/shimla2.jpg", "./images/shimla3.jpg", "./images/shimla4.jpg", "./images/Shimla.jpg"];
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
      name: 'Thupka',
      location: 'Cafe Sol, Wake and Bake Cafe, Hide Out Cafe, Goofa Ashiana Restaurant, or Cafe 1873. ',
      images: [
        './images/shimlaF1.jpg'
        
      ],
    },
    samarthaJuice: {
      name: 'Rajma Masala',
      location: 'Pali Da Dhaba in Bemloi or Sharma Dhaba on Circular Road',
      images: [
        './images/shimlaF5.jpg'
        
      ],
    },
    karadBhel: {
      name: 'Koshary',
      location: 'Madra',
      images: [
        './images/shimlaF2.jpg'
        
      ],
    },
    sayantara: {
      name: 'Siddu',
      location: 'Local Shops',
      images: [
        './images/shimlaF3.jpg'
      ],
    },
    sayantara: {
        name: 'bhola ji tikki',
        location: 'bhola ji tikki',
        images: [
          './images/shimlaF4.jpg'
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
            <img src="./symbols/location.png" alt="loc" id="loc" /> Shimla🚞
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54674.13627271683!2d77.11782150548237!3d31.078212851078582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1737577510414!5m2!1sen!2sin"
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
          <h3 id="intro">Shimla: The Queen of Hills, Where Nature Meets Serenity! 🌳✨</h3>
          <p>
          Shimla, often referred to as the "Queen of Hills", is a picturesque hill station nestled in the foothills of the Himalayas in Himachal Pradesh, India. Situated at an altitude of approximately 2,200 meters (7,200 feet), Shimla is renowned for its colonial charm, scenic landscapes, and pleasant climate. It served as the summer capital of British India during the colonial era, a legacy evident in its Victorian-style architecture, including iconic landmarks like the Christ Church, Viceregal Lodge, and the elegant structures lining the famous Mall Road.
          </p>
          
          <br />
          <h3 id="history">History</h3>
          <p>
          Shimla, the capital of Himachal Pradesh, has a rich and fascinating history that dates back to the early 19th century. Before the British arrival, it was a small, sparsely populated village surrounded by dense forests and ruled by local chieftains. The area came under British control after the Anglo-Gurkha War (1814-1816) and the subsequent Treaty of Sugauli. Shimla’s potential as a retreat from the scorching Indian summers was first recognized by British officers in the early 1820s. By the mid-19th century, its cool climate, scenic beauty, and strategic location in the Himalayan foothills made it the official summer capital of British India in 1864. During this time, the British developed the town extensively, building iconic colonial structures like the Viceregal Lodge, Christ Church, and Gaiety Theatre, giving Shimla its distinct architectural charm.</p>
          <p>Shimla also played a significant role in shaping India’s political history. It was the site of key events such as the Shimla Conference of 1945, which aimed to discuss India’s independence, and the drafting of the Shimla Agreement in 1914, which established boundaries between British India and Tibet. Post-independence, Shimla retained its importance and became the capital of Punjab before being designated as the capital of Himachal Pradesh in 1966. Over the years, Shimla has evolved from a colonial retreat into a vibrant hill station, preserving its historical legacy while emerging as a popular tourist destination celebrated for its natural beauty and cultural heritage.
          </p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">Places You Can Visit in Shimla</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
                <h5>1) The Ridge</h5>
                <section>
                  <div id="location_info">
                  <p>
                  Located in the heart of Shimla, The Ridge is a sprawling open space offering stunning views of the surrounding mountains. It is a hub for cultural events, fairs, and social activities. Landmarks like Christ Church, one of the oldest churches in North India, and the bustling Mall Road are located nearby. The Ridge is also a great spot for shopping and dining.</p>
                  </div>
                  <img src="./images/ridge.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kalaram Temple */}
            <section className="info_block">
              <div>
                <h5>2) Kufri</h5>
                <section>
                  <div id="location_info">
                  <p>
                  Just 16 kilometers from Shimla, Kufri is a picturesque hill station known for its adventure activities and scenic beauty. Surrounded by snow-capped mountains and dense forests, Kufri is a popular destination for skiing and horse riding during the winter months. The Himalayan Nature Park, located here, is home to various rare species of flora and fauna.</p>
                  </div>
                  <img src="./images/Kufri.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kapaleshwar Temple */}
            <section className="info_block">
              <div>
                <h5> 3) Jakhoo Temple</h5>
                <section>
                  <div id="location_info">
                  <p>
            Situated atop Jakhoo Hill, the highest peak in Shimla, this ancient temple is dedicated to Lord Hanuman. The temple is famous for its gigantic 108-foot Hanuman statue, visible from many parts of Shimla. Visitors can enjoy panoramic views of the city and the surrounding Himalayan landscape from the temple.</p>
            
                  </div>
                  <img src="./images/Jakhoo Temple.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Ramkund */}
            <section className="info_block">
              <div>
                <h5>4)Viceregal Lodge (Rashtrapati Niwas)</h5>
                <section>
                  <div id="location_info">
                  <p>
                  This grand colonial-era building served as the summer residence of the British Viceroy of India. Now housing the Indian Institute of Advanced Study, the Viceregal Lodge is an architectural marvel surrounded by beautifully landscaped gardens. It is steeped in history, having been the venue for many significant decisions during British rule, including discussions leading to India's independence.</p>
                  </div>
                  <img src="./images/Viceregal Lodge (Rashtrapati Niwas).jpg" alt="Sample Image" id="si" />
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

export default Shimla;