// Testimonials.jsx

import React from 'react';
import '../App.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      author: 'Froggy McFrogface',
      position: 'CEO, Hop Industries',
      review: 'As a frog, I\'ve always struggled to find high-quality flies. The service provided by Go Forth and Be Awesome has revolutionized my dining experience. Now, I can enjoy gourmet flies right at my pond!',
    },
    {
      id: 2,
      author: 'Sparkle Sparklington',
      position: 'Founder, Glitter Unicorn Co.',
      review: 'Being a unicorn in a glitter business, I demand excellence. Go Forth and Be Awesome not only met but exceeded my expectations. Their magical services have added an extra sparkle to my life!',
    },
    {
      id: 3,
      author: 'Techie McTechface',
      position: 'CTO, Digital Innovations Inc.',
      review: 'In the tech world, precision is key. Go Forth and Be Awesome demonstrated an unparalleled level of precision and attention to detail. Their services are like a perfectly written code—flawless!',
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>Client Testimonials</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <p className="testimonial-text">{testimonial.review}</p>
            <div className="testimonial-author">
              <p className="author-name">{testimonial.author}</p>
              <p className="author-position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
