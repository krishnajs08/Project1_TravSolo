
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const Manali = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/manali4.jpg", "./images/manali2.jpg", "./images/manali3.jpg", "./images/manali1.jpg", "./images/manali5.webp"];
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
      name: 'Siddu',
      location: 'Taala Restaurant ,Manali – Naggar Road ShivAdya Resort & Spa, Karjan, Manali Tehsil 175136 India',
      images: [
        './images/manaliF1.jpg',
        './images/manaliF3.jpg',
        './images/manaliF4.jpg'
      ],
    },
    samarthaJuice: {
      name: 'Thali',
      location: 'Near Jana Waterfall, Jana Gaon',
      images: [
        ' ./images/manaliF5.png',
        './images/manaliF6.png',
        './images/manaliF7.png'
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
            <img src="./symbols/location.png" alt="loc" id="loc" /> Manali
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.53251957052!2d77.16652018451926!3d32.23947037911064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1737542577139!5m2!1sen!2sin"
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
          <h3 id="intro">🏔️ Escape to Manali – The Heaven on Earth! ❄️</h3>
          <p>Manali is a resort town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh. It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of New Delhi. With a population of 8,096 people recorded in the 2011 Indian census Manali is the beginning of an ancient trade route through Lahaul (H.P.) and Ladakh, over the Karakoram Pass and onto Yarkand and Hotan in the Tarim Basin of China. Manali is a popular tourist destination in India and serves as the gateway to the Lahaul and Spiti district as well as the city of Leh in Ladakh.</p>
          <br />
          <h3 id="history">History</h3>
          <p>Manali is named after Manu, the progenitor of humanity in Hinduism. The name Manali is regarded as the derivative of Manu-Alaya (transl. 'the abode of Manu'). In Hindu cosmology, Manu is believed to have stepped off his ark in Manali to recreate human life after a great flood had deluged the world at the end of an cyclic age. The Kullu Valley in which Manali is situated is often referred to as the "Valley of the Gods". An old village in the town has an ancient temple dedicated to the sage Manu.</p>
        <p>Historically, the Kullu Valley, including Manali, was part of the ancient "Satluj Corridor," an important trade route connecting India with Central Asia and Tibet. During medieval times, Manali served as a vital stopover for merchants and travelers journeying through passes like Rohtang and Lahaul. The valley was ruled by the Kullu kings, who were known for their patronage of art, culture, and religion, as seen in architectural marvels like the Hidimba Devi Temple, built in the 16th century.</p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">Places You Can Visit in Manali</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
                <h5>1) Solang Valley</h5>
                <section>
                  <div id="location_info">
                  <p>
          Solang Valley, located about 13 km from Manali, is a paradise for adventure enthusiasts. Known for activities like paragliding, zorbing, and ATV rides during summer and skiing in winter, it is a hotspot for adrenaline seekers. The valley offers breathtaking views of snow-capped peaks and lush greenery, depending on the season. It is also an ideal destination for families looking to enjoy scenic beauty and fun-filled activities. The best time to visit is during summer (March to June) for adventure sports and winter (December to February) for snow-based activities.
            </p>
            
            <p>Apart from adventure, Solang Valley provides a serene escape for families and couples looking to enjoy the natural beauty. You can relax while taking in the views or indulge in a ropeway ride for a bird's-eye view of the valley. With local food stalls and souvenir shops adding to the experience, Solang Valley promises an unforgettable outing. The best time to visit depends on the activities you want to try—March to June for summer sports and December to February for snow adventures.

            </p>
                  </div>
                  <img src="./images/sollang vally.JPG" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kalaram Temple */}
            <section className="info_block">
              <div>
                <h5>2)Rohtang Pass</h5>
                <section>
                  <div id="location_info">
                  <p>
          Rohtang Pass, located at an altitude of 13,050 feet, is one of the most scenic destinations near Manali. Known for its snow-capped peaks and breathtaking landscapes, it attracts thousands of tourists every year. The pass serves as a gateway to Lahaul and Spiti Valleys, offering a mix of adventure and natural beauty. Visitors can engage in activities like sledding, snow scootering, and skiing, making it a favorite among thrill-seekers. Its awe-inspiring beauty has also made it a popular shooting location for Bollywood movies.
            </p>
            
            <p>Reaching Rohtang Pass is an adventure in itself, with winding roads offering panoramic views of the surrounding mountains. Due to its high altitude and popularity, permits are required to visit, and it is best to plan your trip between May and October when the pass is open. Travelers are advised to dress warmly and acclimatize to the altitude. Whether you're there for the snow or the views, Rohtang Pass is sure to leave you spellbound.</p>
                  </div>
                  <img src="./images/rohtang pass.webp" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kapaleshwar Temple */}
            <section className="info_block">
              <div>
                <h5> 3) Hidimba Devi Temple</h5>
                <section>
                  <div id="location_info">
                  <p>
          The Hidimba Devi Temple, also known as the Dhungri Temple, is a historic and spiritual landmark in Manali. Built in 1553, the temple is dedicated to Hidimba, a character from the Mahabharata. Nestled amidst dense cedar forests, its architecture stands out with its pagoda-style design and intricate wooden carvings. The temple exudes a serene and mystical ambiance, making it a favorite spot for visitors seeking peace and spirituality. The surrounding forest adds to its charm, making it a perfect blend of culture and nature.
            </p>
            
            <p>The temple is especially popular during winter when snowfall creates a magical atmosphere around it. A stone footprint believed to belong to Hidimba is preserved within the temple, adding to its cultural significance. Visitors can explore the tranquil surroundings or simply sit and admire the architecture. Whether you’re a history buff, a spiritual seeker, or just a lover of nature, the Hidimba Devi Temple offers a unique and peaceful experience.

            </p>
                  </div>
                  <img src="./images/hidimba.webp" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            
            <section className="info_block">
              <div>
                <h5>4)Old Manali</h5>
                <section>
                  <div id="location_info">
                  <p>
          Old Manali, a quaint village near Manali town, is a haven for those seeking a laid-back and peaceful atmosphere. Known for its bohemian vibe, this area is lined with charming cafes, small shops, and vibrant street art. The narrow lanes lead to traditional Himachali homes and scenic spots, offering a glimpse of local life. Many travelers flock to Old Manali for its unique culture, which blends the old-world charm of the mountains with the modern-day traveler’s lifestyle.
            </p>
            
            <p>The area is also a base for various trekking routes and nature trails, making it a great starting point for adventure lovers. Visitors can enjoy local delicacies in the riverside cafes or shop for handmade jewelry, woolen clothes, and souvenirs. The Beas River flows nearby, adding a soothing touch to the environment. Perfect for backpackers and couples, Old Manali offers a refreshing break from the hustle and bustle of the main town.</p>
                  </div>
                  <img src="./images/oldmanali.webp" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>
            <section class="info_block">
        <div>
          <h5> 5) Manikaran</h5>
          <section>
            <div id="location_info">
         <p>
          Manikaran, located 80 km from Manali, is a small town known for its spiritual and natural attractions. The town is famous for its hot springs, which are believed to have therapeutic properties. Pilgrims flock to the Manikaran Sahib Gurudwara, a revered Sikh shrine, to take a holy dip in the springs and enjoy langar (community meals). The area also houses ancient Hindu temples dedicated to Lord Shiva and Vishnu, adding to its religious significance.
            </p>
            
            <p>Beyond its spiritual appeal, Manikaran offers stunning views of the surrounding mountains and the Parvati River. Visitors can explore the peaceful trails, visit local markets, or simply relax in the serene environment. The hot springs are a unique feature, as they are used to cook food at the Gurudwara. Open year-round, Manikaran is a must-visit for anyone seeking a blend of spirituality, nature, and cultural experiences.
            </p>
            
          </div>
          <img src="./images/manikarna.webp" alt="Sample Image" id="si"></img>
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

export default Manali;