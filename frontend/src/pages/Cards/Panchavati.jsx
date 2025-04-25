
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const Panchavati = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/Pan5.jpg", "./images/Pan2.jpg", "./images/Pan3.jpg", "./images/Pan4.jpg", "./images/Pan6.jpg"];
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
      name: 'Budha Halwai',
      location: 'Behind Bhadrakali Mandir Road, Naliwadi Pura, Tivandha Chowk, Nashik, Maharashtra 422001',
      images: [
        './images/budha1.jpg',
        './images/budha2.jpg',
        './images/budha3.jpg',
        './images/budha4.jpg',
      ],
    },
    samarthaJuice: {
      name: 'Samartha Juice',
      location: 'Pethe High School Compound, Raviwar Karanja, Panchavati, Nashik, Maharashtra 422001',
      images: [
        './images/samartha1.jpg',
        './images/samartha2.jpg',
        './images/samartha3.jpg',
        './images/samartha4.jpg',
      ],
    },
    karadBhel: {
      name: 'Karad Bhel',
      location: 'Dwarka Hotel, Dwarka, Nashik, Maharashtra 422011',
      images: [
        './images/karadh1.avif',
        './images/karadh2.webp',
        './images/karach3.avif',
        './images/karadh4.jpg',
      ],
    },
    sayantara: {
      name: 'Sayantara',
      location: 'Shop No.5, Deshpande Building, Bhadrakali Fruit Market, Bhadrakali Rd, Nashik, Maharashtra 422001',
      images: [
        './images/sayantara1.jpg',
        './images/sayantara2.jpg',
        './images/sayantara3.jpg',
        './images/sayantara4.jpg',
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
            <img src="./symbols/location.png" alt="loc" id="loc" /> Panchavati, Nashik
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14996.097364180321!2d73.77343386311958!3d20.00749308493009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea54b213a9d7%3A0xc2f9ac85ac767a9d!2sPanchavati%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1737542689227!5m2!1sen!2sin"
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
          <h3 id="intro">Panchavati: Where History, Mythology, and Spirituality Converge! 🌳✨</h3>
          <p>
            Nestled in the heart of Nashik, Maharashtra, Panchavati is a land steeped in sacred history and divine legends. Known as the "Abode of the Five Banyan Trees", it served as a serene sanctuary for Lord Rama, Sita, and Lakshmana during their exile, as narrated in the epic Ramayana.
          </p>
          <p>
            Discover the mystical Sita Gufa, marvel at the ancient beauty of the Kalaram Temple, and feel the divine energy flowing through the Godavari River, often referred to as the Ganga of the South.
          </p>
          <p>
            "Step into Panchavati and walk in the footsteps of divinity!" Whether you're a devotee, a history enthusiast, or a curious traveler, Panchavati promises an experience that's as enriching as it is enchanting.
          </p>
          <br />
          <h3 id="history">History</h3>
          <p>
            Panchavati, located in Nashik, Maharashtra, is a region of immense historical and mythological significance, deeply rooted in the epic Ramayana. The name "Panchavati" comes from the Sanskrit words "Pancha" (five) and "Vata" (banyan trees), referring to the cluster of five sacred banyan trees believed to have existed in this area.
          </p>
          <p>
            According to the Ramayana, Panchavati was the place where Lord Rama, Sita, and Lakshmana spent a significant part of their 14-year exile. It is here that Ravana's sister, Shurpanakha, encountered Rama and Sita, leading to a series of events that ultimately resulted in the abduction of Sita by Ravana. The region is also believed to have been the setting for the construction of Lakshmana's hut and the site of several important episodes, including the battle with Maricha, who came disguised as a golden deer.
          </p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">Places You Can Visit in Panchavati</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
                <h5>1) Sita Gufa (Sita's Cave)</h5>
                <section>
                  <div id="location_info">
                    <p>
                      The Sita Gufa, also spelt as Sita Gumpha or Sita Gupha, is an important location associated with the Ramayana, an epic tale crucial to the narrative of modern Hinduism. It essentially translates to the Cave of Sita, who was the wife of Rama, the protagonist of Ramayana and heir apparent to the throne of Ayodhya. Rama is sentenced to a 14-year exile into the jungles, and he eventually spends many years in Panchavati, a region in what is now Nashik, Maharashtra. Within this place is the Cave of Sita, where it is said that the evil king of Lanka, Ravana, kidnapped Sita.
                    </p>
                    <p>
                      The cave today is a popular place for pilgrims who travel to Panchavati to get closer to the legend of the Ramayana. Located near the five sacred banyan trees in the area, you can enter the cave through the narrow staircase leading into it. Once inside, you will find an idol of Sita along with Rama and his brother, Lakshman. To the left, there is a cave with a Shiva Linga.
                    </p>
                  </div>
                  <img src="./images/Sita.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kalaram Temple */}
            <section className="info_block">
              <div>
                <h5>2) Kalaram Temple</h5>
                <section>
                  <div id="location_info">
                    <p>
                      Kalaram Temple is a Hindu temple in Nashik of Nashik district in Maharashtra, dedicated to the deity Rama. It is a temple situated in Panchavati area of the Nashik. The temple derives its name from a black statue of Rama. The literal translation of kalaram is "black Rama". The sanctum sanctorum also houses the statues of the goddess Sita and the god Lakshmana. Thousands of devotees visit the temple every day.
                    </p>
                    <p>
                      City buses and auto rickshaws are available from various corners of the city to reach the temple. The temple has a seventeen feet high wall of plain dressed stone which surrounds a well kept enclosure 245 feet long and 105 broad. It has separate sabhamandap which is 75’*31’’*12 which is open from all sides. The temple has standing images of Lord Rama, Sita, Laxmana are of black stone and around 2 feet height. The Ramnavami festival is celebrated in Chaitra (March-April).
                    </p>
                  </div>
                  <img src="./images/Pan2.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kapaleshwar Temple */}
            <section className="info_block">
              <div>
                <h5>3) Kapaleshwar Temple</h5>
                <section>
                  <div id="location_info">
                    <p>
                      Nashik's Kapaleshwar Temple is sacred to Lord Shiva. Hop, skip and jump away from the iconic Ramkund, the temple is quite unusual because, like other Shiva shrine, there is no statue of Lord Nandi, the gatekeeper of Shiva. According to the legends, the temple was the place where Lord Shiva performed penance after taking a holy dip in Ramkund to wash off his sin. The reason why there's no Nandi statue in the temple is because Lord Shiva regarded Nandi as a Guru or teacher and hence, there is no Nandi to guard the Kapaleshwar Temple.
                    </p>
                    <p>
                      To see the temple in its full pomp and show, do visit here during the Shivratri festival. Also the temple remains crowded with devotees on Monday. It is located quite close to the Ramkund, barely two kilometers away from the main bus stand. One can reach here, by taking a bus, taxi or three wheelers from anywhere in the city.
                    </p>
                  </div>
                  <img src="./images/kapaleshwar-mandir-nashik1.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Ramkund */}
            <section className="info_block">
              <div>
                <h5>4) Ramkund</h5>
                <section>
                  <div id="location_info">
                    <p>
                      Ramkund is located along the bank of Godavari River. This place is situated at a distance of 2 km from Central Bus stand.
                    </p>
                    <p>
                      This is the holiest spot in Nashik as it is believed to be the place where Lord Rama used to bathe. It contains the bone dissolving Asthivilaya Tirth. It was built by Chitrarao Khatav, a landholder of Khatav in Satara in 1696havrao and was repaired by Gopikabai, the mother of Madhavrao the fourth Peshva. Peoples bring ashes of their deceased relatives and immerse it in Asthivilay kund. Ashes of big personalities like Pandit Nehru, Indira Gandhi, Y B Chavan and others had been immersed at Ramkund.
                    </p>
                  </div>
                  <img src="./images/Pan5.jpg" alt="Sample Image" id="si" />
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

export default Panchavati;