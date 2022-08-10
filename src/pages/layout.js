import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ContactButton from "../components/ContactButton/ContactButton"

import React from 'react'
import SmallLogo from "../assets/jackk-meubels-logo.png";


const Layout = () => {
  return (
    <React.Fragment>
      <Navbar >
        <a href='/' className='nav-brand'>
          <img className='logo' src={SmallLogo} alt='Jackk Meubels'/>
        </a>
        <ul className='flex-container top-menu'>
          {/*<li className='flex-item'>
            <a href='#meubels-op-maat' className='nav-link'>Meubels op maat</a>  
          </li>
          <li className='flex-item'>
            <a href='#over-mij' className='nav-link'>Over mij</a>  
          </li>*/}
          <li>
            <ContactButton class="call-to-action-button"/>
          </li>
        </ul>
      </Navbar>

      <Outlet />
    </React.Fragment>
  )
};

export default Layout;