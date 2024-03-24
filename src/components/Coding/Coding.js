import React, { useState } from 'react';
import Navbar from '../Navbar.js';
import Particles from '../Particles.js';
import './Coding.css';

function Coding() {

   
  return (
    <>
    <Navbar/> 
    <Particles id="tsparticles" />
    <div className='container about-page'>
        
      
        <div className='animation-effect'><h1>Most Relevant Team Projects</h1></div>
         
        <br/>
          <div class='square' tabindex="0">
            <p><a href="https://github.com/Valenriquez/Udedata" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
          <strong>Udedata</strong> 
          </a><br />
            Python analyzer project. We analyzed different Udemy courses from a public dataset. This was my first python project ever so someday I´ll try to improve it :)</p>
          </div>

        <br/>
        <div className='square' tabindex="0">
        <p><a href="https://github.com/Valenriquez/signolingo/tree/main" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
          <strong>SignoLingo</strong> 
          </a><br /> 
            Web App to aid the "Dilo en señas" company, a non-profit organizaation that helps deaf people in Mexico.</p>
        </div>

        <br/>
        <div className='square' tabindex="0">
        <p><a href="https://github.com/Valenriquez/InBank" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
          <strong>InBank</strong> 
          </a><br />
        Hackathon iOS Bank app that shows the risk and analyzes the returns of investment funds for users in a personalized way..</p>
        </div>

        <br/>
          <div class='square' tabindex="0">
            <p><a href="https://github.com/Valenriquez/VRSteps" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
          <strong>VRSteps</strong> 
          </a><br />
          Unity Virtual reality shooting game, it is interactive and has a medieval background. It contains authentic medieval music and sound effect to make the experience more enjoyable.</p>
          </div>
        
        <br/>
        <div className='animation-effect'><h1>Most Relevant Personal Projects</h1></div>
         
         <br/>
         <div class='square' tabindex="0">
              <p><a href="https://github.com/Valenriquez/CSES-Problem-Set" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
            <strong>Love Letter Sender</strong> 
              </a>  <br />
             This is a Love Letter Sender, if you want to send a letter to a speacial one or create an online invitation to an event.</p>
           </div>
          <br/>
         <div className='square' tabindex="0">
         <p><a href="https://github.com/Valenriquez/Zoom-Automation" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
         <strong>Zoom-Automation</strong> 
        </a><br />
         This Python Script automates zoom, it uses an excel file called MySchedule.xlsx to extract the Date, Hour, Meeting Number and Passowrd. It can be able to become a process in loop on Windows.</p>
         </div>
 
         <br/>
         <div className='square' tabindex="0">
         <p><a href="https://github.com/Valenriquez/CSES-Problem-Set" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
         <strong>CSES-Problem-Set</strong> 
        </a> <br />
        The CSES Problem Set contains a collection of algorithm programming practice problems. This repositorie will help you prepare for the Technical Interviews.</p>
         </div>


         <br />
         <div class='square' tabindex="0">
             <p><a href="https://github.com/Valenriquez/Mr.Sudoku" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
          <strong>Mr.Sudoku</strong> 
          </a> <br />
             This project is a sudoku maker and solver. The user will later on be able to create its own sudoku. And change the difficulty level.</p>
           </div>
         </div>
 
            
         
     
    </>
   )
}

export default Coding
