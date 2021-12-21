import React from 'react';
import img1 from '../../Images/propsImg1.png';
import img2 from '../../Images/propsImg2.png';
import img3 from '../../Images/propsImg3.png';

export default function MainSlider() {
  let images = [img1, img2, img3];
  return (
    <div className="main-slider">
      {images.map((img,index) => {
        return (
          <div key={index}>
            <img src={img} alt="" />
            <h3>Comfort Launge Chairs</h3>
          </div>
        );
      })}
      <div className="arrow-down">
      <i className="fas fa-long-arrow-alt-down"></i>
      </div>
    </div>
  );
}
