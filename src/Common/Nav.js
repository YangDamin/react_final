// import React, { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import './Nav.css';
import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Nav = () => {

  const loginStart = (link) => {
    if(sessionStorage.getItem("email")){
        window.location = `/${link}`;
    }else{
        Swal.fire(
            '',
            '로그인 먼저 해주세요!',
            'success'
          )
        setTimeout(function(){
            window.location = '/users/signin';
        },2000)
    }
  }
    return (

      // <input className='input' onClick={getValue} />
        <div class="container" id="nav_container">

            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/" >Home</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/myfeed" onClick={ (e) => {
                e.preventDefault();
                loginStart("myfeed");
            }}>My feed</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/write" onClick={ (e) => {
                e.preventDefault();
                loginStart("write");
            }}>Write</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/like" onClick={ (e) => {
                e.preventDefault();
                loginStart("like");
            }}>Like</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/mypage" onClick={ (e) => {
                e.preventDefault();
                loginStart("mypage");
            }}>My Page</a></div>
            <div className="nav"><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/calendar" onClick={ (e) => {
                e.preventDefault();
                loginStart("calendar");
            }}>Calendar</a></div>

        </div>
    );
}


export default Nav;
