
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const Rishikesh = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/rishikesh1.jpg", "./images/rishikesh2.jpg", "./images/rishikesh3.jpg", "./images/rishikesh4.jpg", "./images/rishikesh5.jpg"];
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
      name: 'Rishikesh Thali',
      location: 'Choti wala Restaurant, Rishikesh ',
      images: [
        './images/rishikeshF6.jpg',
        './images/rishikeshF4.jpg',
        './images/rishikeshF5.jpg'
      ],
    },
    samarthaJuice: {
      name: 'Singori',
      location: 'It is the local food of Rishikeah. So location of the Singori will be Rishikesh full 😉',
      images: [
        './images/rishikeshF7.jpg',
        './images/rishikeshF8.jpg',
        './images/rishikeshF9.jpg',
       
      ],
    },
    karadBhel: {
      name: 'Samosa',
      location: 'Ganga Sweet Shop, Bikaners Sweets, and Ram G Samosa Wala',
      images: [
        './images/rishikeshF1.webp',
        './images/rishikeshF2.jpg',
        './images/rishikeshF3.jpg'
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
            <img src="./symbols/location.png" alt="loc" id="loc" /> Rishikesh
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55235.6388216746!2d78.2294089949136!3d30.08767232457314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0xcc78804a6f941bfe!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1737555294134!5m2!1sen!2sin"
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
          <h3 id="intro"> Rishikesh ☸️🏞️ – Where the Ganges Flows, and Souls Glow!</h3>
          <p>
          The ☸️ (Dharma Wheel) symbolizes spirituality and enlightenment, while the 🏞️ (Mountain Landscape) represents the Himalayan beauty and adventure. Let me know if you’d like further variations!
          </p>
          <p>
          Rishikesh, known as the "Yoga Capital of the World," is a serene town in the northern state of Uttarakhand, India. Nestled in the foothills of the Himalayas, it is a spiritual haven and a popular destination for yoga, meditation, and adventure sports. The town is situated on the banks of the sacred Ganges River, where visitors can experience tranquility and divinity. It is also famous for its iconic landmarks, such as the Laxman Jhula, Ram Jhula, and numerous ashrams offering spiritual and wellness retreats.
          </p>
          
          <br />
          <h3 id="history">History</h3>
          <p>JRishikesh, located in the northern Indian state of Uttarakhand, is a town steeped in history, mythology, and spirituality. The name "Rishikesh" is derived from the Sanskrit word Hrishikesha, meaning "Lord of the Senses," a title of Lord Vishnu. According to Hindu mythology, the town was named after Lord Vishnu appeared to sage Raibhya Rishi as a reward for his penance. Mythological tales also associate Rishikesh with Lord Rama, who is believed to have performed penance here after defeating Ravana. It is said that Lakshman, Rama's brother, crossed the Ganges using a jute rope bridge at the site of the current Laxman Jhula, an iconic landmark of the town.</p>
        <p>Since ancient times, Rishikesh has been a hub for spirituality and learning, attracting sages and seekers who meditated and studied the Vedas along the banks of the sacred Ganges River. It is considered the gateway to the Char Dham pilgrimage, leading to Gangotri, Yamunotri, Kedarnath, and Badrinath, further solidifying its importance in Hinduism. During the medieval period, saints like Adi Shankaracharya visited Rishikesh, revitalizing Hindu practices and establishing temples and ashrams that continue to serve as spiritual centers.</p>
        <p>In modern history, Rishikesh gained international fame when The Beatles visited in 1968 to study transcendental meditation under Maharishi Mahesh Yogi, making it a global destination for yoga and meditation. Today, Rishikesh is known as the "Yoga Capital of the World" and hosts the International Yoga Festival annually, attracting visitors from all over the globe. It has also become a hub for adventure tourism, offering activities like white-water rafting, trekking, and bungee jumping. Blending its rich history, spiritual legacy, and natural beauty, Rishikesh continues to captivate travelers and devotees alike.</p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">Places You Can Visit in Rishikesh</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
                <h5> 1)Lakshman Jhula</h5>
                <section>
                  <div id="location_info">
                  <p>
            Laxman Jhula is one of the most iconic landmarks in Rishikesh, standing as a symbol of the town's spiritual heritage. The bridge is a 450-feet-long suspension bridge that spans the Ganges River, connecting the towns of Tapovan and Jonk. It is believed to be the spot where Lord Lakshman, the brother of Lord Rama, crossed the river on a jute rope. According to local legends, Lord Lakshman meditated here after his journey, making the bridge a revered pilgrimage site. The surrounding area is dotted with temples, ashrams, and markets, offering a peaceful yet vibrant atmosphere.
            </p>
            
            <p>The bridge offers spectacular views of the river and the surrounding Himalayan foothills. Visitors can walk across it, experiencing the cool breeze of the Ganges and the serenity of the landscape. Laxman Jhula has become a major tourist attraction not only for its historical and religious significance but also for its aesthetic appeal. The nearby temples, such as the Sri Bharat Mandir and the Laxman Mandir, further enhance the spiritual atmosphere of the place, making it a must-visit for both devotees and travelers seeking peace.

            </p>
                  </div>
                  <img src="./images/lakshaman.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kalaram Temple */}
            <section className="info_block">
              <div>
                <h5> 2) Triveni Ghat</h5>
                <section>
                  <div id="location_info">
                  <p>
            Triveni Ghat is one of the most important and sacred ghats in Rishikesh, located on the banks of the holy Ganges River. The name "Triveni" refers to the confluence of three sacred rivers—Ganges, Yamuna, and Saraswati—making it a significant pilgrimage site. This ghat attracts thousands of devotees and pilgrims who visit to take a holy dip in the river, believed to wash away sins and purify the soul. It's a peaceful and spiritual spot, with temples and small shrines dedicated to various Hindu deities lining the riverbank.
            </p>
            
            <p>The most popular ritual at Triveni Ghat is the Ganga Aarti, held every evening at dusk. During this ceremony, priests perform a ritual involving the offering of lamps, chanting of mantras, and singing hymns to honor the river goddess, Ganga. The sight of hundreds of floating oil lamps on the river, combined with the sounds of bells and chants, creates an enchanting atmosphere that captivates both locals and tourists. The ghat also offers a place for quiet reflection, making it a must-visit for anyone seeking spiritual solace in Rishikesh.
         </p>
                  </div>
                  <img src="./images/triveniGhat.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kapaleshwar Temple */}
            <section className="info_block">
              <div>
                <h5> 3)The Beatles Ashram (Chaurasi Kutia)</h5>
                <section>
                  <div id="location_info">
                  <p>
            The Beatles Ashram, officially known as Chaurasi Kutia, is a serene and historically significant site in Rishikesh that gained international fame when the legendary rock band, The Beatles, stayed there in 1968. They came to learn transcendental meditation under Maharishi Mahesh Yogi, marking a transformative period in their lives and music. Located within the Rajaji National Park, the ashram features meditation huts, lecture halls, and dormitories that were once used by Maharishi’s disciples. The Beatles wrote several songs during their stay, some of which were included in their iconic "White Album," making the site a pilgrimage for music lovers and spiritual seekers alike.
            </p>
            
            <p>Today, The Beatles Ashram is a peaceful retreat surrounded by lush greenery and wildlife. It has been restored as an eco-tourism destination, showcasing murals and graffiti art inspired by The Beatles and their music. Visitors can explore the meditation caves and halls while soaking in the tranquil environment and artistic vibe. The ashram provides an opportunity to connect with both nature and the legacy of a cultural revolution that blended spirituality with creativity.</p>
            
                  </div>
                  <img src="./images/beatles.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Ramkund */}
            <section className="info_block">
              <div>
                <h5> 4) Neelkanth Mahadev Temple</h5>
                <section>
                  <div id="location_info">
                  <p>
            The Neelkanth Mahadev Temple, located about 32 kilometers from Rishikesh, is a sacred Hindu shrine dedicated to Lord Shiva. Nestled amidst the lush green hills of the Nar-Narayan range at an elevation of 1,330 meters, the temple is a popular pilgrimage site for devotees and visitors. According to Hindu mythology, this is the site where Lord Shiva consumed the deadly poison Halahala that emerged during the churning of the ocean (Samudra Manthan). The poison turned his throat blue, earning him the name "Neelkanth," which means "The Blue-Throated One." The temple's architecture features intricate carvings and a spiritual ambiance, making it a serene place for meditation and devotion.


            </p>
            
            <p>The temple is particularly vibrant during the festivals of Mahashivaratri and Shravan, attracting thousands of devotees. A natural spring inside the temple allows pilgrims to take a holy dip before offering prayers. The journey to the Neelkanth Mahadev Temple is as enchanting as the temple itself, with winding roads surrounded by dense forests and views of the Himalayan foothills. The spiritual significance, coupled with its picturesque location, makes it a must-visit destination for those seeking tranquility and divine blessings.</p>
                  </div>
                  <img src="./images/mahadev.webp" alt="Sample Image" id="si" />
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

export default Rishikesh;