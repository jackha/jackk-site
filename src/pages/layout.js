import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import openContact from "../common"
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
            <button className="call-to-action-button" button="success" onClick={() => openContact()}>
              Contact
            </button>
          </li>
        </ul>
      </Navbar>

      <Outlet />
    </React.Fragment>
  )
};

export default Layout;