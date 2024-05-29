import React from 'react';
import Styles from './hero.module.css'


const Hero = () => {
    return(
        <header>
      <div className={Styles.Hero}>
        <nav className={Styles.Nav}>
          <div className={Styles.logo}>AyEstate</div>
          <div className={Styles.menu}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Listings</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
            <button className={Styles.ContactUs_Button}>Contact Us</button>
        </nav>

        <div className={Styles.Column}>
          <div className={Styles.Content}>
            <h1 className={Styles.Hero_title}>Discover Your Dream Home Today</h1>
            <p className={Styles.Hero_text}>
              Find the perfect property that suits your lifestyle. Our real estate
              service offers unique selling propositions that set us apart from the competition. Find your perfect home today!
            </p>
          </div>
          <div className={Styles.Actions}>
            <button className={Styles.ExploreNow_Button}>Explore Now</button>
            <button className={Styles.LearnMore_Button}>Learn More</button>
          </div>
        </div>
        <img src="/Placeholder Image.png" alt="Example" className={Styles.PlaceholderImage} />
      </div>
    </header>
  );
};
   

export default Hero
