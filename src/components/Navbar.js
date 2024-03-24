import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {

  return (
    <>
    <nav className='navbar'>
      <Link to="/contact">
      <button type="button-contact" className="btn btn-outline-success"  style={{ marginLeft: '50px' }}>
        Contact me
      </button>
      </Link>
      <div className='desktopMenu'style={{ marginRight: '50px' }}>
        <Link to="/" className='desktopMenuListItem'><strong>Home</strong></Link>
        <Link to="/coding"  className='desktopMenuListItem'><strong>Projects</strong></Link>
        
        <Link to="/about"  className='desktopMenuListItem'><strong>About</strong></Link>
        <Link to="/cv"  className='desktopMenuListItem'><strong>CV</strong></Link>
       </div>
    </nav>
    </>
  )
}

export default Navbar
