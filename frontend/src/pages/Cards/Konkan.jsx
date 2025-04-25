
import React, { useState } from 'react';

import './cards.css'; // Import the CSS file

const Konkan = () => {
    
  // Data for images and descriptions
  const [selectedFood, setSelectedFood] = useState(null);

  const images = ["./images/konkan5.jpg", "./images/konkan2.jpg", "./images/konkan3.jpg", "./images/konkan4.jpg", "./images/konkan.jpg"];
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
      name: 'Sol kadhi',
      location: 'Gomantak in Mumbai, Soul Fry in Bandra West, Mahesh Lunch Home, Ritz Classic in Goa, or Bhatti Village Family Bar & Restaurant',
      images: [
        './images/konkanF2.jpg'
        
      ],
    },
    samarthaJuice: {
      name: 'Malvani fish curry',
      location: 'Malvan Katta, Jai Hind Lunch Home, or Chivala Shack',
      images: [
        './images/konkanF1.jpg'
        
      ],
    },
    karadBhel: {
      name: 'kambdi Vade',
      location: 'Hotel Konkan Swad, Sanskruti Restaurant, Malvan Katta Restaurant, and Malvani Kitchen',
      images: [
        './images/konkanF3.jpg'
        
      ],
    },
    
    sayantara: {
        name: 'ghavane and Coconut Chutny',
        location: 'Konkan local Houses',
        images: [
          './images/konkanF4.jpg'
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905482.1460330966!2d73.87690994999998!3d17.075225000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe4e9768b9a8ab%3A0x9d8dcc18b10d5f17!2sKonkan!5e0!3m2!1sen!2sin!4v1737581739146!5m2!1sen!2sin"
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
          <h3 id="intro">Konkan: Where the Sea Meets the Sky, and Nature Shines Bright ! 🌳✨</h3>
          <p>The Konkan is a coastal region that stretches along the western coastline of India, from Gujarat in the north to Goa in the south, and is primarily located in the states of Maharashtra, Goa, and parts of Karnataka. Known for its stunning natural beauty, the Konkan is a land of serene beaches, lush green hills, tranquil rivers, and vibrant coastal villages. The region is rich in cultural diversity, with influences from Portuguese, Maratha, and other traditions. Famous for its delectable seafood, coconut groves, and spice plantations, the Konkan offers a unique blend of rural charm and coastal splendor. With its unspoiled beaches, historical forts, and a slower pace of life, it is a perfect getaway for nature lovers and those seeking peace amidst natural beauty.
</p>

          
          <br />
          <h3 id="history">History</h3>
          <p>The history of the Konkan region is rich and diverse, shaped by centuries of migration, trade, and cultural exchanges. Historically, Konkan was inhabited by various indigenous communities and has seen the influence of several great dynasties and empires. The region's strategic location along the Arabian Sea made it an important hub for maritime trade, connecting India with the Middle East, Africa, and Southeast Asia.</p><p>

In ancient times, the Konkan was part of the Maurya Empire and later the Satavahana dynasty. It flourished under the rule of the Chalukyas and the Rashtrakutas, who recognized the region's importance as a coastal trade route. However, the region's real prominence emerged during the medieval period when it came under the control of the Kadamba dynasty of Goa, followed by the Shilahara dynasty of Thane. The Maratha Empire, founded by Chhatrapati Shivaji Maharaj in the 17th century, played a pivotal role in the region’s history. Many forts, including Sindhudurg and Vijaydurg, were constructed along the Konkan coast to defend against Portuguese and British colonial powers.</p><p>

During the Portuguese colonial period (16th to 18th centuries), parts of Konkan, especially Goa, became an important center of European influence. The Portuguese ruled Goa for several centuries, and their presence is still evident in the region’s churches, architecture, and cultural traditions. The British East India Company took control of the region in the 18th century, and it became part of British India until independence in 1947.</p><p>

In modern times, Konkan has evolved into a region known for its scenic beauty and agriculture, particularly coconut farming, spices, and seafood. It is also an important tourist destination, with its untouched beaches, coastal forests, and quaint villages attracting travelers from across the world. Despite the changing hands of various empires and colonial powers, the Konkan region has preserved its distinct cultural identity, which blends traditional coastal lifestyles with rich historical influences.</p>
        </div>
        <br />
        {/* Places Section */}
        <div>
          <h3 id="places">Places You Can Visit in Konkan</h3>
          <div className="info">
            {/* Sita Gufa */}
            <section className="info_block">
              <div>
                <h5>1) GanpatiPule</h5>
                <section>
                  <div id="location_info">
                  <p>
            Ganpatipule is a small coastal town located in the Ratnagiri district of Maharashtra, renowned for its pristine beaches and spiritual significance. Situated along the Konkan Coast, Ganpatipule is famous for the ancient Ganapati Temple, dedicated to Lord Ganesha. The temple houses a unique idol of Lord Ganesha that is believed to be self-originated (Swayambhu). The town attracts thousands of devotees every year, especially during the Ganesh Chaturthi festival, when the temple becomes the center of vibrant celebrations. Surrounded by lush green hills and a picturesque coastline, Ganpatipule is a blend of religious devotion and natural beauty, making it a popular destination for both spiritual seekers and nature lovers.</p><p>

In addition to its religious significance, Ganpatipule is known for its unspoiled beaches, where visitors can relax by the calm blue waters and enjoy a peaceful atmosphere. The beach, with its golden sands and crystal-clear water, is perfect for leisurely strolls, swimming, and water sports. The town’s scenic beauty is enhanced by the surrounding Sahyadri Hills and numerous other attractions like the Jaigad Fort, Aare-Ware Beach, and Pausni waterfalls. Ganpatipule’s tranquil environment and rich cultural heritage make it an ideal getaway for those seeking a blend of spiritual serenity and natural charm.</p>
                  </div>
                  <img src="./images/ganpatipule.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kalaram Temple */}
            <section className="info_block">
              <div>
                <h5>  2) Alibag</h5>
                <section>
                  <div id="location_info">
                  <p>
            Alibag is a coastal town located in the Raigad district of Maharashtra, known for its scenic beaches and colonial-era charm. Just a short ferry ride away from Mumbai, Alibag has long been a popular weekend getaway for city dwellers. The town is dotted with sandy beaches like Alibag Beach, Nagaon Beach, and Kihim Beach, offering visitors the chance to relax by the Arabian Sea, indulge in water sports, or enjoy a quiet evening by the shore. Alibag is also rich in history, with several ancient forts and temples, including the Kolaba Fort, which can be reached by a boat ride from the beach and offers panoramic views of the coastline.</p><p>

Beyond its beaches, Alibag is known for its lush coconut groves, serene environment, and vibrant local culture. The town is also home to Kanakeshwar Forest, where one can explore nature trails and visit the Kanakeshwar Temple located atop a hill. Alibag’s laid-back atmosphere, combined with its cultural and historical attractions, makes it a perfect destination for those looking for a blend of relaxation and exploration. With its proximity to Mumbai and rich coastal beauty, Alibag has become a favorite destination for both tourists and weekenders seeking a peaceful retreat.
</p>
            
                  </div>
                  <img src="./images/alibaug.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Kapaleshwar Temple */}
            <section className="info_block">
              <div>
                <h5>  3) Tarkarli</h5>
                <section>
                  <div id="location_info">
                  <p>
            Tarkarli is a scenic coastal village located in the Sindhudurg district of Maharashtra, known for its serene beaches, crystal-clear waters, and vibrant marine life. Situated at the confluence of the Tarkarli River and the Arabian Sea, Tarkarli is famous for its clean, unspoiled beaches and tranquil surroundings. The area is ideal for water sports, such as scuba diving, snorkeling, and parasailing, thanks to its clear waters and abundant marine biodiversity, including coral reefs and exotic fish. The Sindhudurg Fort, a 17th-century fort built by Chhatrapati Shivaji Maharaj, is another major attraction in Tarkarli, offering a glimpse into the region's rich history and providing stunning views of the coastline.</p><p>

In addition to its natural beauty and historical significance, Tarkarli is known for its delicious seafood, with local specialties like fish thali and sol kadhi attracting food lovers. The village is a haven for nature lovers, with opportunities to explore nearby Devbagh Beach, Vijaydurg Fort, and Tsunami Island. Tarkarli’s laid-back vibe and pristine environment make it a perfect destination for those seeking relaxation, adventure, and a taste of authentic coastal Maharashtra. Whether it's lounging on the beach, enjoying water sports, or exploring the rich local culture, Tarkarli offers an unforgettable coastal experience.
</p>
                  </div>
                  <img src="./images/tarkarli.jpg" alt="Sample Image" id="si" />
                </section>
              </div>
            </section>

            {/* Ramkund */}
            <section className="info_block">
              <div>
                <h5> 4)Malvan</h5>
                <section>
                  <div id="location_info">
                  <p>
            Malvan is a charming coastal town located in the Sindhudurg district of Maharashtra, known for its serene beaches, rich history, and delicious seafood. Situated on the Konkan coast, Malvan is a popular destination for those looking to explore the tranquil shores and the unique blend of culture and nature that the region offers. The town is famous for its pristine beaches like Tarkarli Beach, which is known for its clear blue waters, soft sands, and opportunities for water sports such as snorkeling, scuba diving, and parasailing. Malvan is also renowned for its fresh seafood, especially Malvani cuisine, which includes specialties like fish curry and prawns, making it a haven for food lovers.</p><p>

Apart from its natural beauty, Malvan is steeped in history, with notable attractions such as the Sindhudurg Fort, built by Chhatrapati Shivaji Maharaj in the 17th century. The fort, located on an island off the coast, offers a glimpse into the region's glorious past and can be reached by boat. The town also has several temples and local markets, where visitors can experience the vibrant culture of the Konkan region. With its peaceful environment, historical significance, and natural attractions, Malvan is a perfect getaway for those seeking a blend of adventure, relaxation, and cultural exploration.
</p>
            
                  </div>
                  <img src="./images/malvan.jpg" alt="Sample Image" id="si" />
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

export default Konkan;