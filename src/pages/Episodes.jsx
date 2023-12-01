// Episodes.jsx

import React from "react";
import "../App.css";
import SocialMediaSection from "../components/SocialMediaSection"; // Import the SocialMediaSection component
import PodcastHeroSection from "../components/PodcastHeroSection";

const episodesData = [
  {
    id: 1,
    title: "Episode 1: Introduction to the Podcast",
    description: "Join us for an exciting introduction to our podcast series.",
    src: "https://podcastle.ai/show/episode-embed-player/CBF0/A2DD?theme=system&mode=compact",
  },
  // {
  //   id: 1,
  //   title: "Episode 1: Introduction to the Podcast",
  //   description: "Join us for an exciting introduction to our podcast series.",
  //   src: "https://podcastle.ai/show/episode-embed-player/CBF0/A2DD?theme=system&mode=compact",
  // },
  // Add more episodes as needed
];

const Episodes = () => {
  return (
    <div className="podcast-page">
      <div className="episode-container">
        <h1 className="posts-title">Latest Episodes</h1>
        {episodesData.map((episode) => (
          <div key={episode.id} className="episode-box">
            <h2 className="subheading">{episode.title}</h2>
            <p className="text">{episode.description}</p>
            <iframe
              title={episode.title}
              src={episode.src}
              width="100%"
              height="150px"
              style={{ border: "none", backgroundColor: "transparent" }}
              allowtransparency="true"
            />
          </div>
        ))}
      </div>
      <PodcastHeroSection/>
      <SocialMediaSection />
     
    </div>
  );
};

export default Episodes;
