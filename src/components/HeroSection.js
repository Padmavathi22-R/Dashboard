import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container' style={{backgroundColor:"#9b9c9b"}}>
     
     
      <h1 style={{color:"black",fontFamily: "Times New Roman",fontSize:"60px"}}>MUSIC=LIFE</h1>
      <p style={{color:"black"}}>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <h2 style={{color:"black"}}>GET STARTED</h2>
        </Button>
        
       
       
      </div>
    </div>
  );
}

export default HeroSection;
