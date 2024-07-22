import React, { useState, useEffect } from 'react';
import './togglepage.css'; // You can define your CSS styles in this file
import '../../containers/toggle/toggle.css';
import startImg from '../../assets/toggledown1.png';
import endImg from '../../assets/toggledown2.png';
import client from '../../assets/client.svg';
import freelancer from '../../assets/freelancer.svg';
import team from '../../assets/team.svg';
import { NavLink } from 'react-router-dom';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const handleClick = (event) => {
      const clickedElement = event.target;
      const isRadioCard = clickedElement.closest('.radio-card');

      if (!isRadioCard) {
        setSelectedOption('');
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  
  function handleButtonClick() {
    if (!selectedOption) {
      // If no option is selected, display an alert
      alert('Please select an option');
    } else {
      // If an option is selected, navigate to the signup page
      window.location.href = '/signup';
    }

  }

  return (
    <div className="container">
      <div className="top-panel">
        <div className="grid-wrapper grid-col-auto">
          <label htmlFor="radio-card-1" className="radio-card">
            <input
              type="radio"
              name="radio-card"
              id="radio-card-1"
              checked={selectedOption === 'client'}
              onChange={() => handleOptionChange('client')}
            />
            <div className="card-content-wrapper">
              <span className="check-icon"></span>
              <div className="card-content">
                <img src={client} alt="" />
                <h4>Join as client</h4>
                <h5>Get your work done with the best freelancer</h5>
              </div>
            </div>
          </label>
          {/* /.radio-card 1*/}
          <label htmlFor="radio-card-2" className="radio-card">
            <input
              type="radio"
              name="radio-card"
              id="radio-card-2"
              checked={selectedOption === 'freelancer'}
              onChange={() => handleOptionChange('freelancer')}
            />
            <div className="card-content-wrapper">
              <span className="check-icon"></span>
              <div className="card-content">
                <img src={freelancer} alt="" />
                <h4>Join as a freelancer</h4>
                <h5>Need money? Don't wait, be an earner now.</h5>
              </div>
            </div>
          </label>
          <label htmlFor="radio-card-3" className="radio-card">
            <input
              type="radio"
              name="radio-card"
              id="radio-card-3"
              checked={selectedOption === 'team'}
              onChange={() => handleOptionChange('team')}
            />
            <div className="card-content-wrapper">
              <span className="check-icon"></span>
              <div className="card-content">
                <img src={team} alt="" />
                <h4>Join as a team</h4>
                <h5>Bring your own team to grab big projects.</h5>
              </div>
            </div>
          </label>
          {/* /.radio-card */}
        </div>
        {/* /.grid-wrapper */}
        <div className="button">
        <NavLink to="/signup">
              <button className="btn first" onClick={handleButtonClick}>
                {selectedOption ? `Join as ${selectedOption}` : 'Select your role'}
              </button>
        </NavLink>

        </div>
      </div>
      {/* /.top-panel */}
      <div className="bottom-panel">
        <img className="start-img" src={startImg} alt="Start Image" />
        <img className="end-img" src={endImg} alt="End Image" />
      </div>
      {/* /.bottom-panel */}
    </div>
    /* /.container */
  );
}

export default App;