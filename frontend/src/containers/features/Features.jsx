import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Mobile App Development',
    title2: 'Backend Development',
  },
  {
    title: 'Website Development',
    title2: 'Frontend Development',
  },
  {
    title: 'DevOps Engineer',
    title2: 'Translator',
  },
  {
    title: 'Graphic Designer',
    title2: 'Assignment Writer',
  },
  {
    title: 'Video Editor',
    title2: 'Digital Marketing',
  },
  {
    title: 'Content Writer',
    title2: 'Creative PPT Making',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Remain updated on contemporary trends and utilize your capabilities to capitalize on these burgeoning fields, thereby yielding revenue.</h1>
      <p>Start Your Journey Here</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} title2={item.title2}  key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;