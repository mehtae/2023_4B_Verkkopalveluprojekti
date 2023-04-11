import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> OAMK Monkeys</h1>
        <p> Helps when everything else fucks up</p>
        <Link to="/menu">
          <button> LogIn </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
