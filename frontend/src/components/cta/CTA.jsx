import React from "react";
import "./cta.css";
import { NavLink } from "react-router-dom";

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>
        Are you a consortium of freelancers ready to take on a large-scale
        project?{" "}
      </h3>
    </div>
    <div className="gpt3__cta-btn">
      <NavLink to="/toggle">
        <button type="button">Get Started</button>
      </NavLink>
    </div>
  </div>
);

export default CTA;
