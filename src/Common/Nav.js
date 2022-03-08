import React from 'react';
import './Nav.css';


const Nav = () => {
    return (
        <div class="container">
             
              <div className="n1"><span ><a className ="nav-link" style={{'color': 'white'}} href="/" >Home</a></span></div>
              <div className="n2"><span ><a className ="nav-link" style={{'color': 'white'}} href="/" >My feed</a></span></div>
              <div className="n3"><span ><a className ="nav-link" style={{'color': 'white'}} href="/" >Like</a></span></div>
              <div className="n4"><span ><a className="nav-link" style={{'color': 'white'}} href="/">My Page</a></span></div>
              <div className="n5"><span ><a className="nav-link" style={{'color': 'white'}} href="/">Calendar</a></span></div>
              <div className="n6"><span ><a className="nav-link" style={{'color': 'white'}} href="/" >Log Out</a></span></div>

        </div>
    );
}

export default Nav;