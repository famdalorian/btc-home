import React, { useEffect } from "react";
import "./footer.css";

export default function Footer() {
  useEffect(() => {
    let timeoutId;

    function hideFooter() {
      const footer = document.querySelector(".footer");
      footer.style.opacity = 0; // Hide the footer
    }

    function showFooter() {
      const footer = document.querySelector(".footer");
      footer.style.opacity = 1; // Show the footer again
    }

    function resetTimer() {
      clearTimeout(timeoutId);
      hideFooter(); // Hide the footer initially
      timeoutId = setTimeout(showFooter, 2000); // Set the timer for 2 seconds
    }

    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);

    // Initial setup to start the timer
    resetTimer();

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", resetTimer);
      document.removeEventListener("keydown", resetTimer);
      clearTimeout(timeoutId);
      showFooter(); // Ensure the footer is visible when the component is unmounted
    };
  }, []);

  return (
    <div>
   
    <span className="footer">    

      <span className="footerTitle">Follow Us</span>
      <a href="https://twitter.com/btcpodcast33">
      <i class="TopIcon fa-brands fa-twitter"></i>
      </a>
      <a href="https://instagram.com/beyond_the_canvas_33">
        <i className="TopIcon fa-brands fa-instagram"></i>
      </a>
      <a href="https://m.facebook.com/profile.php?id=61553200865355">
        <i className="TopIcon fa-brands fa-square-facebook"></i>
      </a>
      <a href="https://discord.gg/nKS8Xpb7">
        <i class="TopIcon fa-brands fa-discord"></i>{" "}
      </a>
      <a href="https://www.patreon.com/BeyondTheCanvas334">
        <i class="TopIcon fa-brands fa-patreon "></i>      </a>
        <a href="https://www.youtube.com/channel/UCAXZdDSl8S5mhWXzqBC1ZQw">
        <i className="TopIcon fa-brands fa-youtube"></i>
      </a>
    </span> </div>
  );
}
