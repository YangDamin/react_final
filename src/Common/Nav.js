import React, { useState } from 'react';
import './Nav.css';


const Nav = () => {

 
    return (

  <div class="container" id="nav_container"> 
      <ul class="navbar-nav" >
        <li class="nav-item" >
          <a class="nav-link" style={{ 'color': 'white' }} href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{ 'color': 'white' }} href="/mypage">My Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{ 'color': 'white' }} href="/like">Like</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{ 'color': 'white' }} href="/calender">Calendar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{ 'color': 'white' }} href="/mypage">My Page</a>
        </li>
      </ul>
    </div>
        // <div class="container" id="nav_container">

        //     <div className="nav"><a className="nav-link" style={{ 'color': 'white' }} href="/" >Home</a></div>
        //     <div className="nav"><a className="nav-link" style={{ 'color': 'white' }} href="/" >My feed</a></div>
        //     <div className="nav"><a className="nav-link" style={{ 'color': 'white' }} href="/" >Like</a></div>
        //     <div className="nav"><a className="nav-link" style={{ 'color': 'white' }} href="/">My Page</a></div>
        //     <div className="nav"><a className="nav-link" style={{ 'color': 'white' }} href="/">Calendar</a></div>
        //     <div className="nav"><a className="nav-link" style={{ 'color': 'white' }} href="/" >Log Out</a></div>

        // </div>
    );
}

export default Nav;