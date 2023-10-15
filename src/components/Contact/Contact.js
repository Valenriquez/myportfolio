import React from 'react'
import Navbar from '../Navbar.js';
import Particles from '../Particles.js';
import './Contact.css';

function Contact() {
  return (
    <> 
    <Navbar/> 
    <Particles id="tsparticles" />
    <div className='contact-buttons'>
    <a href="https://www.linkedin.com/in/valeria-enr%C3%ADquez-lim%C3%B3n-a2704b235/" target="_blank">  
        <button type="button" className='btn1 btn-outline-success'>
        LinkedIn
        </button>
    </a>
    <br/>
    <a href="https://github.com/Valenriquez" target="_blank">  
        <button type="button" className='btn1 btn-outline-success'>
        Github
        </button>
    </a>
    <br/>
    </div>
    </>
  )
}

export default Contact
