import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import Form from "../components/Login";

export function Topbar() {
  return (
    <div className="TopBar">
      <div className="TopLeft">
        <a href="https://twitter.com/btcpodcast33">
          <i className="TopIcon fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com/beyond_the_canvas_33">
          <i className="TopIcon fa-brands fa-instagram"></i>
        </a>
        <a href="https://m.facebook.com/profile.php?id=61553200865355">
          <i className="TopIcon fa-brands fa-square-facebook"></i>
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
