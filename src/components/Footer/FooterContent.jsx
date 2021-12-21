import React from 'react';
import members from '../../Images/Group 10.png'

export default function FooterContent() {
  return (
    <div className="footer-content">
      <div className="title">
        <h3>Luxury & Fancy Chair</h3>
        <p>
          All the Lorem Ipsum generators on the Internet tend to predefined
          chunks this the first true generator on the Internet.
        </p>
      </div>
      <div className="about">
        <p>
          <span>
            <strong>20K+</strong> People Visiting this year
          </span>
          <span>
            <strong>15</strong>Years Experience
          </span>
        </p>
        <div className="members">
          <img src={members} alt="" />
          <div>
            <h4>Trust Members</h4>
            <h6>More than 50k people integrate with us.</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
