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
      <h2 className="subheading">News Feed</h2>
      <ul>
        {mockTweets.map((tweet) => (
          <li key={tweet.id}>
            <strong>{tweet.user.name}</strong>: {tweet.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeedSection;
