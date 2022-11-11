import React from 'react';
import './LeftSidebar.css';
import Globe from '../../assets/Globe.svg';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to="/Questions" className="side-nav-links" activeClassName="active" >
                <img src={Globe} alt='Globe' width="10%"/>
                <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            <NavLink to="Tags"style={{paddingLeft:"40px"}} className="side-nav-links" activeClassName="active">
<p>Tags</p>
            </NavLink>
            <NavLink to="Tags"style={{paddingLeft:"40px"}} className="side-nav-links" activeClassName="active">
<p>Users</p>
            </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
