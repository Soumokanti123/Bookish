import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner.mp4";

import { FiArrowRight } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-image-section">
          <video src={BannerImage} autoPlay loop muted />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Discover Your Next Adventure</h1>
          <p className="primary-text">
            Welcome to our Bookstore - Your Gateway to Imagination and
            Knowledge.
          </p>
          <button className="secondary-button">
            Explore <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
