import React from 'react'
import ReactPlayer from 'react-player'
import '../App.css'
import { Button } from './Button'
import './About.css'

const url = "/home/labber/lighthouse/portfolio/gurulangar/public/videos/testvideo.mp4"

function About() {
  return (
    <div className='about-container'>
        <video loop muted autoPlay controls>
          <source src='public/videos/video-2.mp4' type='video/mp4'></source>
        </video>
        {/* <video src='public/videos/video-1.mp4' autoPlay loop muted /> */}
        {/* <ReactPlayer url={url} muted loop playing /> */}
        {/* <VideoPlayer /> */}
        
        <h1>Welcome</h1>
        <p>Gurulangar is a non-profit organizationt that helps Sikhs in need within punjab</p>
        <div className='about-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'
            >
              Get Started
            </Button>
            <Button 
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'
            >
              YouTube <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default About;