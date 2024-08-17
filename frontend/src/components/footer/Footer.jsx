import React from "react";
import gpt3Logo from "../../../src/assets/updatedlogo.png";
import "./footer.css";
import { NavLink } from "react-router-dom";
import instaicon from "../../assets/instagram.svg";
import linkdinicon from "../../assets/linkdin.svg";
import facebookicon from "../../assets/facebook.svg";
const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step into the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <NavLink to="/toggle">
        <p>Get Started</p>
      </NavLink>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1>SkillRevital</h1>
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Social media handles</h4>
        <div className="socialmedia">
          <img
            src={instaicon}
            alt="gpt3_logo"
            style={{ width: "2em", height: "2em" }}
          />
          <img
            src={linkdinicon}
            alt="gpt3_logo"
            style={{ width: "2em", height: "2em" }}
          />
          <img
            src={facebookicon}
            alt="gpt3_logo"
            style={{ width: "2em", height: "2em" }}
          />
        </div>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Something in Mind?</p>
        <p>Say 👋 at saurabh2113076@gmail.com</p>
      </div>
    </div>

    {/* <div className="gpt3__footer-copyright">
      <p>@2021 SkillRevital. All rights reserved.</p>
    </div> */}
  </div>
);

export default Footer;
