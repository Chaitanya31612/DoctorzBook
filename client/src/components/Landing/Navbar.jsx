import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileview, setMobileview] = useState(false);

  // determine mobileview
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      resize();
    };
  }, []);

  const resize = () => {
    setMobileview(window.innerWidth <= 750);
  };

  return mobileview ? (
    <div class="navigation">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navigation__logo gradient-text">DoctorzBook</h1>
      </Link>
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="/" class="navigation__link">
              Home
            </a>
          </li>
          <li class="navigation__item">
            <a href="#about" class="navigation__link">
              About
            </a>
          </li>
          <li class="navigation__item">
            <a href="#services" class="navigation__link">
              Services
            </a>
          </li>
          <li class="navigation__item">
            <a href="#team" class="navigation__link">
              Our Team
            </a>
          </li>
          <div className="navigation__item--auth">
            <li class="navigation__item">
              <Link to="/login" class="navigation__link">
                Login
              </Link>
            </li>
            <li class="navigation__item">
              <Link to="/register" class="navigation__link">
                Register
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      {/* <div className="navigation__cta">
        <Link to="/login" className="navigation__cta-login">Log In</Link>
        <Link to="/register" className="navigation__cta-register">Try it for free</Link>
      </div> */}
    </div>
  ) : (
    <div className={"nav"}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="nav__logo gradient-text">DoctorzBook</h1>
      </Link>
      <nav className="nav__nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__list-link" href="/">
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__list-link" href="#about">
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__list-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__list-link" href="#team">
              Our Team
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav__cta">
        <Link to="/login" className="nav__cta-login">
          Log In
        </Link>
        <Link to="/register" className="button button--secondary">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
