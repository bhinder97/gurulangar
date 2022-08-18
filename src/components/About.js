import React from 'react'
import '../App.css'
import { Button } from './Button'
import './About.css'


function About() {
  return (
    <div className='about-container'>
        {/* <video controls autoPlay loop muted>
          <source src='/home/labber/lighthouse/portfolio/gurulangar/public/videos/video-2.mp4' type='video/mp4'></source>
        </video> */}
        
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
              Watch Trailer <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default About;