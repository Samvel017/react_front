import React from 'react'
import LogoImg from '../../Images/Mask Group.png'
import LogoImgDesc from '../../Images/logoDesc.png'

export default function Logo() {
  return (
    <div className='logo'>
      <img src={LogoImg} alt="" />
      <img src={LogoImgDesc} alt="" />
    </div>
  )
}
