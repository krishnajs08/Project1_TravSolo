import classes from "./about.module.scss";
import photo from "../assets/images/krishna photo.jpg"
// import photo from "../assets/images/dhanashree.jpg"
import logo from "../assets/symbols/logoFinal.png"
const About = () => {
  return (
    
    <div className={classes.aboutCont}>
      
      <div className={classes["rotating-card-container"]}>
        <div className={classes.card}>
          <div className={classes["card-front"]}>
            <img src={photo} alt="photo" />
            <p><b>Krishna Sunil Pangarkar</b></p>
           <br />
           <br />
            <p>Frontend And Backend Developer</p>
          </div>
          <div className={classes["card-back"]}>
            <img src={logo} alt="logo" />
            <p>TravSolo</p>
          </div>
        </div>
      </div>
      <section id="about" className="about-section">
        <div className="about-content">
          <p>
            TraveSolo is your ultimate travel companion, designed to inspire solo adventurers to explore the world.
            Whether you're seeking peaceful retreats, adventurous destinations, or cultural experiences,
            TraveSolo connects you to the perfect places to visit.
          </p>
          <p>Embark on your solo adventure today!</p>
        </div>
      </section>
    </div>



// Code for Dhanashree

// the code of about section for dhanashree
    // <div className={classes.aboutCont}>
      
    //   <div className={classes["rotating-card-container"]}>
    //     <div className={classes.card}>
    //       <div className={classes["card-front"]}>
    //         <img src={photo} alt="photo" />
    //         <p><b>Dhanashree Jejurkar</b></p>
    //        <br />
    //        <br />
    //         <p>Frontend And Backend Developer</p>
    //       </div>
    //       <div className={classes["card-back"]}>
    //         <img src={logo} alt="logo" />
    //         <p>TravSolo</p>
    //       </div>
    //     </div>
    //   </div>
    //   <section id="about" className="about-section">
    //     <div className="about-content">
    //       <p>
    //         TraveSolo is your ultimate travel companion, designed to inspire solo adventurers to explore the world.
    //         Whether you're seeking peaceful retreats, adventurous destinations, or cultural experiences,
    //         TraveSolo connects you to the perfect places to visit.
    //       </p>
    //       <p>Embark on your solo adventure today!</p>
    //     </div>
    //   </section>
    // </div>
 
  );
};

export default About;
