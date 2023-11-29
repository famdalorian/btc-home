const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const response = await axios.get("https://api.twitter.com/2/tweets/recent", {
      headers: {
        Authorization: `TWITTER_API_BEARER_TOKEN`, // Replace with your Twitter API Bearer Token
      },
      params: {
        tweet.fields: "id,text,user",
        // ... add any additional parameters
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching recent tweets:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
};
