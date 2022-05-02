import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth";

const DashboardNavbar = ({ links, logout }) => {
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
          {links.map((link) => (
            <li class="navigation__item">
              <a href="/" class="navigation__link">
                {link}
              </a>
            </li>
          ))}
          <div className="navigation__item--auth">
            <li class="navigation__item">
              <Link to="/login" class="navigation__link">
                Logout
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
    <div className="center-content">
      <div className={"nav"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="nav__logo gradient-text">DoctorzBook</h1>
        </Link>
        <nav className="nav__nav">
          <ul className="nav__list">
            {links.map((link) => (
              <li className="nav__list-item">
                <a className="nav__list-link" href={link[1]}>
                  {link[0]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={logout}
          style={{ cursor: "pointer" }}
          className="nav__cta"
        >
          <div className="nav__cta-login">Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { logout })(DashboardNavbar);
