import React from "react";
import { ReactTyped } from "react-typed";
import ProfileBackground from '../assets/img/profile-background.jpg'

const Hero = () => {
  return (
    <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(${ProfileBackground})` }}>

      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Arun pandi</h1>
            <p className="hero-subtitle">
              <ReactTyped
                strings={[
                  "Designer",
                  "Front-End Developer",
                  "Cricketer",
                  "Photographer"
                ]}
                typeSpeed={40}
                className="typed"
                loop
              />
              {/* <span className="typed"
                data-typed-items="Designer, Front-End Developer, Cricketer, Photographer"></span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero;