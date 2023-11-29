import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Form from "../components/Login";

export function Topbar() {
  return (
    <div className="TopBar">
      <div className="TopLeft">
        <a href="https://twitter.com/btcpodcast33">
        <i className="TopIcon fa-brands fa-twitter"></i>        </a>
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
          <i class="TopIcon fa-brands fa-patreon"></i>{" "}
        </a>
        <a href="https://www.youtube.com/channel/UCAXZdDSl8S5mhWXzqBC1ZQw">
        <i className="TopIcon fa-brands fa-youtube"></i>
      </a>
      </div>

      <div className="topCenter">
        <ul className="TopList">
          <li className="topListItem">
            <Link to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">About</Link>
          </li>
          <li className="topListItem">
            <Link to="/episodes">Podcast</Link>
          </li>
          <li className="topListItem">
            <Link to="/book-of-xxisp">Book</Link>
          </li>
          <li className="topListItem">
            <Link to="/Shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div className="TopRight">
        <Form />
      </div>
    </div>
  );
}

export default Topbar;
