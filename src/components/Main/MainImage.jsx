import React from 'react'
import mainImg from '../../Images/231170_copy_300x300-removebg-preview 1.png'

export default function MainImage(props) {
  return (
    <div className='main-image'>
      <img src={mainImg} alt="" />
      <div className="color-block">
        <div className="title">
          Popular shades
        </div>
        <div className="blocks">
          {props.colors.map((color)=>{
            return <div className='circle' style={color} key={color.backgroundColor}></div>
          })}
        </div>
      </div>
    </div>
  )
}
