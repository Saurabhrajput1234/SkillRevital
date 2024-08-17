import React from 'react';
import possibilityImage from '../../assets/upliftednoperson.png';
import './possibility.css';
import { MdCheckCircle, MdSettings } from 'react-icons/md'; 
const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Equip yourself to work alongside us, where you'll encounter numerous possibilities for project completion, skill advancement, and revenue generation, all while securing regular work opportunities.</p>
      <h1 className="gradient__text">Elevate your work game <br/> with ease.</h1>
      <ul>
        <li><MdCheckCircle /> List item 1</li>
        <li><MdCheckCircle /> List item 2</li>
        <li><MdSettings /> List item 3</li>
      </ul>
      <h4>Start Your Journey Here</h4>
    </div>
  </div>
);

export default Possibility;