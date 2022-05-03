import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import HeroLogo from "../../assets/svgs/hero-doctors.svg";
import CompanyLogo from "../../assets/images/company-logo.jpg";
import Footer from "./Footer";
import ServiceItem from "./ServiceItem";

import ServicesData from "../../seeds/ServicesData";
import Team from "./Team";

const Landing = () => {
  const [navbar, setNavbar] = useState(false);

  // change background of navbar on scroll
  useEffect(() => {
    scrollTop();
    window.addEventListener("scroll", scrollTop);
    return () => {
      scrollTop();
    };
  }, []);

  const scrollTop = () => {
    setNavbar(window.scrollY >= 40);
  };

  return (
    <div>
      <div id="top"></div>
      <div className="center-content">
        <Navbar />

        {/* Hero section */}
        <div className="hero">
          {/* heading */}
          <div className="hero__main">
            <p className="hero__main--head-1">Appointments Made Easy</p>
            <p className="hero__main--head-2">
              Medical Care Services on your finger tips. <br></br>
              <span className="highlight">Find Doctors nearby</span>
            </p>
            <Link to="/login">
              <button className="button button--primary button--primary--small u-margin-top-medium">
                Make appointments
              </button>
            </Link>
          </div>
          {/* image */}
          <div className="hero__image">
            <img src={HeroLogo} alt="hero" />
          </div>
        </div>
      </div>

      <div id="about"></div>
      {/* About Section */}
      <div className="about">
        <h1 className="heading heading--primary center-content">
          <span className="highlight">About</span>
        </h1>
        <div className="about__main center-content">
          <div className="about__main-content">
            This is a project that is built as a part of{" "}
            <b>Veersa Technologies </b>
            Hackathon competition with aim of Transforming Healthcare through
            technology innovation. The submission is made by students of
            Deenbandhu Chottu Ram University of Science and Technology,
            Murthal(Sonipat), Haryana. <br />
            Doctors are lifesavers and that is why they shouldn't be too far
            from those who need healthcare. With more and more people having the
            need to seek medical attention, doctors need to make their services
            accessible and available to their patients. In this time and age
            where everything and anything can be found on the internet, we need
            to take advantage of the digital tools/ channels to enable quick
            scheduling of appointments.
          </div>
          <div className="about__main-logo">
            <img src={CompanyLogo} alt="company logo" />
          </div>
        </div>
      </div>

      <div id="services"></div>
      {/* Services */}
      <div className="services">
        <h1 className="heading heading--primary center-content">
          <span className="highlight">Services</span>
        </h1>
        <div className="services__main">
          {ServicesData &&
            ServicesData.map((service) => {
              return (
                <ServiceItem
                  key={service.index}
                  index={service.index}
                  name={service.name}
                  description={service.description}
                />
              );
            })}
        </div>
      </div>

      {/* Our Team */}
      <div id="team"></div>
      <Team />

      <div id="contact"></div>
      {/* Footer */}
      <Footer />

      {/* for scrolling to the top */}
      {navbar && (
        <a href="#top" className="scroll-top">
          <ChevronDoubleUpIcon className="scroll-top--icon" />
        </a>
      )}
    </div>
  );
};

export default Landing;
