import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/" className="navbar-brand">
            React Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
