import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.svg';
import './Navbar.css';
import Avatar from '../components/Avatar/Avatar';
import Button from '../components/Button/Button';

function Navbar() {
  var User = null;
  return (
    <nav>
      <div className='navbar '>
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt='logo' className='nav-logo ' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          About
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          Products
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          For Teams
        </Link>
        <form>
          <input type='text' placeholder='Search...' />
          <img src={search} alt='search' width='18' className='search-icon'></img>
        </form>
        {User === null ? (
          <Link to='/Auth' className='nav-item nav-links'>
            Log in
          </Link>
        ) : (
          <>
           
              <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"> <Link to='/User ' style={{color:"white",textDecoration:"none"}}>M</Link></Avatar>
            
            <button className='nav-item nav-links'>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
