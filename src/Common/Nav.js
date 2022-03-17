// import React, { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import './Nav.css';
import React from 'react';


const Nav = () => {

  
    return (

      // <input className='input' onClick={getValue} />
        <div class="container" id="nav_container">

            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/" >Home</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/myfeed" >My feed</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/like" >Like</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/mypage">My Page</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/calendar">Calendar</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/" >Log Out</a></div>

        </div>
    );
}


export default Nav;
