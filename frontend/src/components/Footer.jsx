import React, { useEffect } from 'react';
import './footer.css';

export default function Footer() {

  useEffect(() => {
    let timeoutId;

    function hideFooter() {
      const footer = document.querySelector('.footer');
      footer.style.opacity = 0; // Hide the footer
    }

    function resetTimer() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(hideFooter, 2000); // Set the timer for 20 seconds
    }

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);

    // Initial setup to start the timer
    resetTimer();

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousemove', resetTimer);
      document.removeEventListener('keydown', resetTimer);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span className='footer'>
      <span className='footerTitle'>Follow Us</span>
      <a href="https://twitter.com/btcpodcast33">
        <i className="TopIcon fa-brands fa-twitter"></i>
      </a>
      <a href="https://instagram.com/beyond_the_canvas_33">
        <i className="TopIcon fa-brands fa-instagram"></i>
      </a>
      <a href="https://m.facebook.com/profile.php?id=61553200865355">
        <i className="TopIcon fa-brands fa-square-facebook"></i>
      </a>
      <h1>Contact:<a href="mailto:Beyondthecanvaspod@gmail.com">Beyondthecanvaspod@gmail.com</a></h1>
    </span>
  );
}