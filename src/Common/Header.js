import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div class="row">
                <div class="col-8 text-left" id="logo">
                    <span><a className="nav-link" style={{ 'color': 'black', textAlign: 'left' }} href="/" >VIARY📘</a></span>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="col-7" id="signup_css">
                            <Link class="nav-link text-dark" to="/users/signup"><i class="bi bi-person-circle"></i> 회원가입</Link>
                        </div>
                        <div class="col-5" id="login_css">

                            <Link class="nav-link text-dark" to="/users/signin"><i class="bi bi-door-open-fill"></i> 로그인</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
