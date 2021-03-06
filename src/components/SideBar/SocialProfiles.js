import React from 'react';
import './SocialEffect.css';

export default function SocialProfiles({dataSocials}) {
  return (
    <div>
      <h5 className="tittle">Social Profiles</h5>
      <div className="social-wrapper">
        <ul className="wrapperIcon">
          {dataSocials.map((item, index) => (
            <li key={index} className={item.title}>
              <a href={item.link}>
                <span />
                <span />
                <span />
                <span />
                <span className={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
