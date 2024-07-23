import React, { useState } from 'react';
import './toggle.css';

const Toggle = () => {
  const [selectedOption, setSelectedOption] = useState('client');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <div className="grid-wrapper grid-col-auto">
        <label htmlFor="radio-card-1" className="radio-card">
          <input
            type="radio"
            name="radio-card"
            id="radio-card-1"
            value="client"
            defaultChecked={selectedOption === 'client'}
            onChange={handleRadioChange}
          />
          <div className="card-content-wrapper">
            <span className="check-icon"></span>
            <div className="card-content">
              <img
                src="https://image.freepik.com/free-vector/group-friends-giving-high-five_23-2148363170.jpg"
                alt=""
              />
              <h4>Join </h4>
              <h5>Get your work done with best freelancer</h5>
            </div>
          </div>
        </label>

        <label htmlFor="radio-card-2" className="radio-card">
          <input
            type="radio"
            name="radio-card"
            id="radio-card-2"
            value="freelancer"
            defaultChecked={selectedOption === 'freelancer'}
            onChange={handleRadioChange}
          />
          <div className="card-content-wrapper">
            <span className="check-icon"></span>
            <div className="card-content">
              <img
                src="https://image.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg"
                alt=""
              />
              <h4>Join as Freelancer</h4>
              <h5>Don't wait be an Earner now.</h5>
            </div>
          </div>
        </label>
      </div>
      {/* <button className={`${selectedOption === 'client' ? 'client-highlight' : 'freelancer-highlight'} raise`}>
        {selectedOption === 'client' ? 'Join as Client' : 'Join as Freelancer'}
      </button> */}
    </div>
  );
};

export default Toggle;