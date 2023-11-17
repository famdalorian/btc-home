// App.js or your main application file
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Episodes from "./pages/Episodes";
import BookOfXXisp from "./pages/BookOfXXisp";
import Topbar from "./topbar/TopBar";
import Footer from "./components/Footer";
import "../src/App.css";

function App() {
  return (
    
    <HashRouter>
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/book-of-xxisp" element={<BookOfXXisp />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
