import React from "react";
import PropTypes from 'prop-types'
// import { useState } from 'react';

import {
  // BrowserRouter as Router,
  // Switch,
  // Routes,
  // Route,
   Link
} from "react-router-dom";




export default function Navbar(props) {
  return (
    <>

    {/* In below line we are using backticks (``), because we want to use template literals to call our variale value inside the given html */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  
        <Link className="navbar-brand" to="/">
          {<b><big>{props.title}</big></b>}
        </Link>

        {/* The below code was previously used, where we use <a></a> tag and href, but we are also using routing (we have 2 sections in our app- home and about), therefore we are using Link and to instead of <a></a> and href */}
        
        {/* <a className="navbar-brand" href="/">
          {<b><big>{props.title}</big></b>}
        </a> */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/About">
                {props.about}<span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          
            
            <div className={`form-check form-switch mx-4  text-${props.mode==='light'?'dark':'light'}`}>     
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>


        </div>
      </nav>
    </>
  );
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
 }
 
Navbar.defaultProps= {
    title: 'Set title here',
    about: 'Set About app here'
 }
