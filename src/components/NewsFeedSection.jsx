import React from "react";
import "../App.css";

const NewsFeedSection = () => {
  // Mock data, replace it with your actual data structure
  const mockTweets = [
    { id: 1, user: { name: "User1" }, text: "This is tweet 1" },
    { id: 2, user: { name: "User2" }, text: "This is tweet 2" },
    // Add more mock tweets as needed
  ];

  return (
    <div className="news-feed-section posts-container">
      <h1>News Feed</h1>
      <div className="twitter-tweet-container">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            I am a professional combat sports coach and have achieved accolades
            in my field from local to a world level. <br />
            <br />
            In 2020 I decided due to the lockdown I was going to return to a
            computer after 15 years and increase my digital skills to catch up
            with the rest of the world. <br />
            <br />I did.…
          </p>
          &mdash; xxisp.eth 👁⃤. 🕉 (@famdalorian){" "}
          <a href="https://twitter.com/famdalorian/status/1727659824144359847?ref_src=twsrc%5Etfw">
            November 23, 2023
          </a>
        </blockquote>{" "}
        <a
          href="https://twitter.com/famdalorian?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow xxisp
        </a>
       
      </div>
    </div>
  );
};

export default NewsFeedSection;
