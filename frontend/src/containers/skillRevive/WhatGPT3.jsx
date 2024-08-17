import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is SkillRevive" text="It's a platform for freelancers to connect with clients seeking expertise, where both seasoned professionals and newcomers alike can gain skills and income opportunities Even clients can grasp the execution of their projects and the methodologies employed by freelancers, facilitating a comprehensive understanding of the process via Video chat." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Workfl-ights" text="With Workfli-ghts, we provide a distinctive offering where not only do you receive your project on time, but you also have the opportunity to learn and comprehend the journey leading to its completion. Freelancers guide you through this process via video chat." />
      <Feature title="R.T.D" text="R.T.D or Rapid Talent Dispatch is a commitment to providing a freelancer within 24 hours, or else our proficient team will take charge of the task." />
      <Feature title="Facilitator" text="A dedicated individual will support and guide you throughout the project, ensuring clear communication and understanding of the process, with payment securely held in escrow." />
      <Feature title="Empowerment Zone" text="Freelancers who are just starting out or struggling to secure projects can register on this platform, providing them with an opportunity to learn, grow, and earn income concurrently." />    
    </div>
  </div>
);

export default WhatGPT3;