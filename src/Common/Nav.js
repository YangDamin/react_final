import React, { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import './Nav.css';
// import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Nav = () => {
    let temp = window.location.pathname;
    console.log(temp);
    
    const [currentClick, setCurrentClick] = useState(null);
  
    const getClick = (e) => {
        setCurrentClick(e.target.id);
    }
  
    React.useEffect(
        (e) => {
            if(temp === '/'){
                let current = document.getElementById("btn_home");
                current.style.color = "black";
                current.style.backgroundColor = "rgba(255, 118, 118, 1)";

            }
            else if(temp === '/myfeed'){
                let current = document.getElementById("btn_myfeed");
                current.style.backgroundColor = "rgba(49, 141, 251, 1)";
                current.style.color = "black";
            }
            else if(temp === '/write'){
                let current = document.getElementById("btn_write");
                current.style.backgroundColor =  "rgba(255, 118, 118, 1)";
            }
            else if(temp === '/like'){
                let current = document.getElementById("btn_like");
                current.style.backgroundColor =  "rgba(49, 141, 251, 1)";
            }
            else if(temp === '/mypage'){
                let current = document.getElementById("btn_mypage");
                current.style.backgroundColor =  "rgba(255, 118, 118, 1)";
            }
            else if(temp === '/calendar'){
                let current = document.getElementById("btn_calendar");
                current.style.backgroundColor =  "rgba(49, 141, 251, 1)";
            }
        }
    );
        
  

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

            <div className="nav " id="btn_home" onClick={getClick}><a className="nav-link menu" id="btn_home"  style={{ 'color': 'black'}} href="/" >Home</a></div>
            <div className="nav"  id="btn_myfeed" onClick={getClick}><a className="nav-link menu" id="btn_myfeed"  style={{ 'color': 'black'}} href="/myfeed" onClick={ (e) => {
                e.preventDefault();
                loginStart("myfeed")
                getClick();
            }}>My feed</a></div>
            <div className="nav" id="btn_write" onClick={getClick}><a className="nav-link menu" id="btn_write"  style={{ 'color': 'black' }} href="/write" onClick={ (e) => {
                e.preventDefault();
                loginStart("write");
            }}>Write</a></div>
             <div className="nav" id="btn_like" onClick={getClick}><a className="nav-link menu" id="btn_like"  style={{ 'color': 'black'}} href="/like" onClick={ (e) => {
                e.preventDefault();
                loginStart("like");
            }}>Like</a></div>
            <div className="nav"id="btn_mypage" onClick={getClick}><a className="nav-link menu" id="btn_mypege"  style={{ 'color': 'black'}} href="/mypage" onClick={ (e) => {
                e.preventDefault();
                loginStart("mypage");
            }}>My Page</a></div>
            <div className="nav" id="btn_calendar" onClick={getClick}><a className="nav-link menu" id="btn_calendar"  style={{ 'color': 'black'}} href="/calendar" onClick={ (e) => {
                e.preventDefault();
                loginStart("calendar");
            }}>Calendar</a></div>
{/* 
            <div className="nav" id="btn_home" onClick={getClick} ><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/" >Home</a></div>
            <div className="nav" id="btn_myfeed" onClick={getClick}><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/myfeed" onClick={ (e) => {
                e.preventDefault();
                loginStart("myfeed");
            }}>My feed</a></div>
            <div className="nav" id="btn_write" onClick={getClick}><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/write" onClick={ (e) => {
                e.preventDefault();
                loginStart("write");
            }}>Write</a></div>
            <div className="nav" id="btn_like" onClick={getClick}><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/like" onClick={ (e) => {
                e.preventDefault();
                loginStart("like");
            }}>Like</a></div>
            <div className="nav" id="btn_mypege" onClick={getClick}><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/mypage" onClick={ (e) => {
                e.preventDefault();
                loginStart("mypage");
            }}>My Page</a></div>
            <div className="nav" id="btn_calendar" onClick={getClick}><a className="nav-link" id="menu"  style={{ 'color': 'white' }} href="/calendar" onClick={ (e) => {
                e.preventDefault();
                loginStart("calendar");
            }}>Calendar</a></div> */}

        </div>
    );
}


export default Nav;
