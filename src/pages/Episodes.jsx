import React from "react";
import "../App.css";

function Episodes() {
  return (
    <div><div className="episode-box">
     
   
      <iframe
        src="https://podcastle.ai/show/episode-embed-player/CBF0/A2DD?theme=system&mode=compact"
        width="100%"
        height="150px"
        style={{ border: "none", backgroundColor: "transparent" }}
        allowtransparency="true"
      />
    </div> </div>
  );
}

export default Episodes;
