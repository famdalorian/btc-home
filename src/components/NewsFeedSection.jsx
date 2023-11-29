import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const NewsFeedSection = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Function to fetch recent tweets
    const fetchTweets = async () => {
      try {
        const response = await axios.get("/api/twitter/recent"); // Replace with your actual API endpoint
        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    // Call the function to fetch tweets
    fetchTweets();
  }, []);

  return (
    <div className="news-feed-section posts-container">
      <h2 className="subheading">News Feed</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <strong>{tweet.user.name}</strong>: {tweet.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeedSection;
