
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const Varanasi = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/vara1.jpg", "./images/vara2.jpg", "./images/vara3.jpg", "./images/vara4.jpg", "./images/vara5.jpg"];
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
      name: 'Banarasi Pan ',
      location: 'Local Pan stalls',
      images: [
        './images/varaF4.jpg'
        
      ],
    },
    samarthaJuice: {
      name: 'Malaiyyo',
      location: 'Pali Da Dhaba in Bemloi or Sharma Dhaba on Circular Road',
      images: [
        './images/varaF6.jpg'
        
      ],
    },
    karadBhel: {
      name: 'Tamatar Chat',
      location: 'Madra',
      images: [
        './images/varaF5.jpg'
        
      ],
    },
    
    sayantara: {
        name: 'Kachori Sabzi',
        location: 'bhola ji tikki',
        images: [
          './images/varaF1.jpg',
          './images/varaF2.jpg'
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
            <img src="./symbols/location.png" alt="loc" id="loc" /> Varanasi🛕
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.22405537314!2d82.99110895!3d25.32076265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1737579537918!5m2!1sen!2sin"
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
          <h3 id="intro">Varanasi: The Eternal City, Where Spirituality Meets Serenity! 🌳✨</h3>
          <p>Varanasi, also known as Kashi or Benares, is one of the oldest continuously inhabited cities in the world and a spiritual capital of India. Situated on the banks of the sacred River Ganga in the state of Uttar Pradesh, Varanasi is revered as a holy city by Hindus, Buddhists, and Jains. Known for its ancient temples, vibrant ghats, and timeless traditions, the city is a hub of spirituality, culture, and learning. The Kashi Vishwanath Temple, Dashashwamedh Ghat, and the mesmerizing Ganga Aarti are some of its iconic attractions. With a history that dates back thousands of years, Varanasi is not just a place but a living testament to India’s rich heritage, where life and death are celebrated as part of a sacred continuum.</p>

          
          <br />
          <h3 id="history">History</h3>
          <p>Varanasi, often regarded as the spiritual capital of India, has a history that spans over 3,000 years, making it one of the oldest continuously inhabited cities in the world. Its name, Varanasi, is derived from the two rivers, Varuna and Assi, which flow through the city. The city has been an important center of learning, culture, and religion for millennia, especially for Hindus, who consider it the holiest place on Earth. According to Hindu mythology, Varanasi was founded by the Lord Shiva and is believed to be the place where he emerged from the earth. It is said that anyone who dies in Varanasi attains moksha (liberation from the cycle of rebirth), making the city a major pilgrimage site.</p>
        <p>Historically, Varanasi was part of various ancient Indian kingdoms, including the Kushana and Maurya empires, and later became an important city in the Gupta era (4th to 6th centuries CE), a period marked by significant cultural and intellectual advancements. The city gained prominence as a hub of Vedic learning, philosophy, and religious practices, with its association to the Benares Hindu University (BHU) established in 1916 further cementing its role as an academic center. Under the rule of different dynasties, including the Mughals and later the British, Varanasi continued to thrive, with many temples and ghats built or renovated during these periods, though the city also faced several invasions and periods of decline. The Kashi Vishwanath Temple, one of the most sacred sites for Hindus, was destroyed and rebuilt multiple times, reflecting the city’s resilience and spiritual significance.</p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">Places You Can Visit in Varanasi</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
                <h5>1) Kashi Vishwanath Temple</h5>
                <section>
                  <div id="location_info">
                  <p>
            The Kashi Vishwanath Temple is one of the most sacred temples in India, dedicated to Lord Shiva. It is situated in the heart of Varanasi, on the banks of the River Ganga. This ancient temple has a rich history, with its origins dating back to over 3,000 years. The temple is famous for housing the Jyotirlinga of Lord Shiva, one of the twelve holiest shrines in the Hindu religion. Pilgrims from across the world visit Varanasi specifically to offer prayers at this temple, believing that a visit here helps them attain moksha (liberation from the cycle of rebirth).

        </p><p>The temple complex, with its towering gold-plated dome and intricate architectural design, is a symbol of Varanasi’s spiritual heritage. Over time, it has faced several invasions and destruction, notably by the Mughal emperor Aurangzeb in the 17th century, who destroyed the original structure. However, it was rebuilt and continues to draw millions of devotees. The temple’s narrow lanes, bustling with pilgrims, shops, and holy men, contribute to the lively and divine atmosphere that defines Varanasi.</p>
                  </div>
                  <img src="./images/Kashi Vishwanath Temple.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kalaram Temple */}
            <section className="info_block">
              <div>
                <h5> 2) Dashashwamedh Ghat</h5>
                <section>
                  <div id="location_info">
                  <p>
            Dashashwamedh Ghat is one of the most vibrant and important ghats in Varanasi. Situated near the Kashi Vishwanath Temple, this ghat is renowned for its breathtaking Ganga Aarti that takes place every evening. The ritual is a magnificent display of fire, chanting, and devotion, where priests use large fire lamps while singing hymns in reverence to the River Ganga. The sight of the setting sun, the sound of conch shells, and the glow of flames create an unforgettable spiritual experience for visitors.</p>

            <p>The ghat itself has deep religious significance. It is believed that Lord Brahma performed a ten-horse sacrifice (Dashashwamedh) here to welcome Lord Shiva. Today, Dashashwamedh Ghat remains a focal point of life in Varanasi, where people come to take holy dips, perform religious rituals, and offer prayers to the Ganga. Along with its spiritual importance, the ghat offers a lively atmosphere with boat rides, vibrant markets, and local vendors, making it a must-visit spot for anyone visiting </p>
                  </div>
                  <img src="./images/Dashashwamedh Ghat.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kapaleshwar Temple */}
            <section className="info_block">
              <div>
                <h5> 3)   Sarnath</h5>
                <section>
                  <div id="location_info">
                  <p>
            Sarnath, located about 10 kilometers northeast of Varanasi, is one of the most important pilgrimage sites for Buddhists. It is the place where Lord Buddha delivered his first sermon after attaining enlightenment at Bodh Gaya, beginning the Dharma Chakra (Wheel of Dharma). This event marks the birth of Buddhism as a major world religion. Today, Sarnath is home to several important archaeological sites and structures that draw pilgrims and tourists.</p> <p>

Among the key attractions in Sarnath is the Dhamek Stupa, which marks the spot where Buddha is believed to have preached the first sermon. The Sarnath Archaeological Museum houses a wealth of ancient artifacts, including the famous Lion Capital of Ashoka, which once adorned the pillar of Ashoka and is now the national emblem of India. The serene and peaceful surroundings of Sarnath, with its well-maintained gardens and monuments, make it a place for reflection and spiritual contemplation. It serves as a testament to the spread of Buddhism in India and beyond.</p>
                  </div>
                  <img src="./images/Sarnath.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Ramkund */}
            <section className="info_block">
              <div>
                <h5> 4) Manikarnika Ghat</h5>
                <section>
                  <div id="location_info">
                  <p>
            Manikarnika Ghat, one of the oldest and holiest ghats of Varanasi, holds profound religious and cultural significance. It is one of the primary cremation ghats in the city, where countless Hindus come to perform the last rites of their loved ones. According to Hindu belief, cremation at this ghat allows the soul to attain moksha, or liberation, from the cycle of life and death. The ghat's constant activity, with funeral pyres burning throughout the day and night, makes it a solemn yet integral part of the city's spiritual landscape.</p><p>

Apart from its association with death and cremation, Manikarnika Ghat is also linked to several Hindu legends. It is believed that the earring (manikarnika) of Goddess Parvati fell into the ghat, and hence the name. Pilgrims often visit this ghat to perform rituals for their deceased ancestors, seeking peace for their souls. The atmosphere at Manikarnika is intense and poignant, providing a unique perspective on life, death, and the sacred practices that form an integral part of Varanasi’s religious life.</p>
            
                  </div>
                  <img src="./images/Manikarnika Ghat.jpg" alt="Sample Image" id="si" />
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

export default Varanasi;