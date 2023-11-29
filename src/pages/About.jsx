// About.jsx
import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-container">
      {/* Podcast Introduction Section */}
      <div className="section podcast-info">
        <div className="image-box">          <div className="profile-image">

       

          <div className="stationary-image">

          </div> </div>
        </div>
        <h2 className="section-header">"Beyond The Canvas" Podcast</h2>

        <p className="section-text">
          Welcome to "Beyond The Canvas," the podcast that takes you on an
          extraordinary journey through the realms of art, music, science,
          technology, spirituality, and martial arts. Join your host, XXisp, as
          we uncover hidden stories, inspirations, and connections that lie
          beneath the surface of these captivating worlds.
        </p>
        <p className="section-text">
          Each episode is a mix of engaging conversations, thought-provoking
          monologues, and enlightening interviews with guests who excel in their
          fields. Whether you're an artist, music aficionado, science
          enthusiast, tech geek, spiritual seeker, or martial arts practitioner,
          "Beyond The Canvas" is crafted just for you.
        </p>
      </div>

      {/* About Me Section */}
      <div className="section about-me">
        <div className="about-me-content">
          <h2 className="section-header">About XXisp</h2>
          <div className="about-me-text">
            <p>
              Hey there! I'm your host, XXisp, on this adventure. Former pro
              fighter turned podcast enthusiast, my journey involves more plot
              twists than a Marvel movie. From coaching kids in martial arts to
             Becoming a Software engineer, each experience has shaped my
              unique perspective.
            </p>
            <p>
              "Beyond The Canvas" isn't just a podcast; it's my way of exploring
              the intersection of various disciplines. Together, we'll go beyond
              the ordinary, diving deep into the fascinating realms of
              creativity, discovery, and inspiration. Tune in every week and
              let's embark on an adventure that transcends the boundaries of the
              canvas.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="section">
        {/* Feel free to add more sections as needed */}
      </div>
    </div>
  );
}

export default About;
