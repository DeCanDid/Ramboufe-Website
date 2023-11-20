import React from 'react';
import './Dynam.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">
      <img src={require ('../Images/chefHook-logo.jpg')}
      className='w-25' alt="" />
    </a>
    <ul>
      <li><Link to={'./Menus'}>MENUS</Link></li>
      <li><Link to={'./Reservation'}>RESRVATION</Link></li>
      <li><Link to={'./Restaurants'}>RESTAURANT</Link></li>
      <li><Link to={'./catering'}>CATERING</Link></li>
      <li>OUR TEAM</li>
      <li>ABOUT US</li>
      <li>CONTACT</li>
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Navbar;