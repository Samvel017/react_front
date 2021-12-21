import React, { Component } from 'react'
import './footer.scss'
import FooterContent from './FooterContent'
import FooterImg from './FooterImg'


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <FooterImg />
        <FooterContent />
      </div>
    )
  }
}
