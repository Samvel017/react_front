import React, { Component } from 'react'
import MainContent from './MainContent'
import MainImage from './MainImage'
import MainSlider from './MainSlider'
import './main.scss'

export default class Main extends Component {
  
  render() {
    let colors = [
      {backgroundColor: '#26394A'},
      {backgroundColor: '#F5DCDC'},
      {backgroundColor: '#A58054'},
      {backgroundColor: '#F7C461'}
    ]
    return (
      <div className='main'>
      <MainContent />
      <MainImage colors={colors}/>
      <MainSlider />
    </div>
    )
  }
}

