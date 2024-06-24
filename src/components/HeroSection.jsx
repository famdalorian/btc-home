import React from "react";
import "../App.css";
import "./HeroSection.css"; // Create a separate CSS file for styling
import { Link } from "react-router-dom";
import NewsFeedSection from "../components/NewsFeedSection";

const HeroSection = () => {
  // Sample data for image tags
  const tagData = [
    {
      id: 1,
      imageSrc: "/images/image1.jpg",
      tag: "XXisp: Founder",
      link: "/About",
    },
    { id: 2, imageSrc: "/images/image2.jpg", tag: "Shop", link: "/Shop" },
    {
      id: 3,
      imageSrc: "/images/image3.jpg",
      tag: "Urchins NFT Collection",
      link: "/Urchins",
    },
    {
      id: 4,
      imageSrc: "/images/image4.jpg",
      tag: "Beyond The Canvas Podcast",
      link: "/Episodes",
    },
    {
      id: 5,
      imageSrc: "/images/image5.png",
      tag: "Book Of XXisp",
      link: "/Book-Of-XXisp",
    },
  ];

  return (
    <div className="hero-section">
      {tagData.map((item) => (
        <Link key={item.id} to={item.link} className="tag-link">
          <img
            src={process.env.PUBLIC_URL + item.imageSrc}
            alt={item.tag}
            className="tag-image"
          />
          <span className="tag-label">{item.tag}</span>
        </Link>
      ))}{" "}
      <div className="news">
        {/* {" "}
        <NewsFeedSection /> */}
      </div>{" "}
    </div>
  );
};

export default HeroSection;
