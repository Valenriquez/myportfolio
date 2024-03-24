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
        <div className='text-zone-about'>
            <br/>
            <main>

            <span className='effect'><p className='important-det'>I´m Valeria</p></span>
            </main> <br />

            <p className='page'><span className='symbol'>・❥ </span>I'm a passionate programmer that's looking to make a change through technology. 
            <br />
            <span className='symbol'>・❥ </span> I'm ready to dive into the world of technology, learning, and growth. I'm eager to collaborate, adapt, and contribute, knowing that every challenge I face is a stepping stone towards a brighter
            , tech-driven tomorrow.
            <br />
            <span className='symbol'>・❥ </span>I'm heavely interested in: <strong>Software development, Innovating with UI/UX and software architecture</strong>
            <br/><br/>
 
            <span className='symbol'>˚ ༘♡ ⋆｡˚ </span>'I´m currently continuing working on my love-letter-sender webpage, Mr.sudoku and a team project whcih will use AI to verify the overall life quality.
             
            </p>
        </div>
    </div>
    </>
  )
}

export default About
