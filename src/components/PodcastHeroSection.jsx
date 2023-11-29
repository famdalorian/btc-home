import React from 'react';
import '../App.css';

function PodcastHeroSection() {
  return (
    <div className="podcast-hero-section">
      <div className="podcast-info">
        <h1>Podcast Platforms</h1>
        <p>please leave us a review if you would be so kind</p>
        <p>It really helps us grow!</p>
      </div>

      <div className="podcast-service-links">
        <div className="service-link">
          <a href="https://link-to-your-apple-podcast" target="_blank" rel="noopener noreferrer">
            <i className="TopIcon fab fa-apple"></i>
          </a>
        </div>
        <div className="service-link">
          <a href="https://open.spotify.com/show/3x0iqkD2fOUfj43Mn63eEx" target="_blank" rel="noopener noreferrer">
            <i className="TopIcon fab fa-spotify"></i>
          </a>
        </div>
        <div className="service-link">
          <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5wb2RjYXN0bGUuYWkvY2ZiNmE4MTQtOGFjNy00MjZhLTg4Y2EtOTliYTQ5MDljNGJjLnJzcw" target="_blank" rel="noopener noreferrer">
            <i className="TopIcon fab fa-google"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PodcastHeroSection;
