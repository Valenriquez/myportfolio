import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar.js';
import Particles from '../Particles.js';
import './Intro.css';
import Maze from './Maze.js';

function Intro() {
  return (
    <> 
    <Navbar/> 
    <Particles id="tsparticles" />
      <div className='introContent'>
      
        <span className='Hello'>Hello,</span>
        <span className='introText'>I´m <span className='introName'>Valeria</span><br /> Programmer</span>
        <p className='introPara'>I´m a passionate and skilled programmer</p>
        
        <a href="https://github.com/Valenriquez" target="_blank">  
        <button type="button" className='btn1 btn-outline-success'>
        Check out my Porjects
        </button>
        </a>
        </div>
    </>
  )
}

export default Intro


 