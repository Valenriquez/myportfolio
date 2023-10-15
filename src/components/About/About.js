import React from 'react'
import Navbar from '../Navbar.js';
import Particles from '../Particles.js';
import './About.css';


function About() {
  return (
    <>
    <Navbar/> 
    <Particles id="tsparticles" />
    <div className='container about-page'>
        <div className='text-zone'>
            <br/>
            <h1> I´m Valeria</h1>
            <p className='p-about-page'>I'm a passionate programmer that's looking to make a change through technology. <br />
            As a student pursuing a tech internship, I find myself at the threshold of innovation and endless possibilities.<br />
             Each line of code I write is a brushstroke on the canvas of the future, where creativity meets problem-solving. <br />
             This internship is not just an opportunity; it's a platform to sculpt my dreams into reality. With determination<br />
              and a thirst for knowledge, I'm ready to dive into the world of technology, learning, and growth. I'm eager to <br />
              collaborate, adapt, and contribute, knowing that every challenge I face is a stepping stone towards a brighter, <br />
              tech-driven tomorrow.
             </p>
        </div>
    </div>
    </>
  )
}

export default About
