// SocialMediaSection.jsx

import React from "react";
import "../App.css";

const SocialMediaSection = () => {
  return (
    <div className="social-media-section posts-container">
      <h2 className="subheading">Follow Us</h2>
      <a href="https://twitter.com/btcpodcast33">
        <i className="TopIcon fa-brands fa-twitter"></i>
      </a>
      <a href="https://instagram.com/beyond_the_canvas_33">
        <i className="TopIcon fa-brands fa-instagram"></i>
      </a>
      <a href="https://m.facebook.com/profile.php?id=61553200865355">
        <i className="TopIcon fa-brands fa-square-facebook"></i>
      </a>
      <a href="https://discord.gg/nKS8Xpb7">
        <i className="TopIcon fa-brands fa-discord"></i>{" "}
      </a>
      <a href="https://www.patreon.com/BeyondTheCanvas334">
        <i className="TopIcon fa-brands fa-patreon"></i>
      </a>
      <a href="https://www.youtube.com/channel/UCAXZdDSl8S5mhWXzqBC1ZQw">
        <i className="TopIcon fa-brands fa-youtube"></i>
      </a>
    </div>
  );
};

export default SocialMediaSection;
