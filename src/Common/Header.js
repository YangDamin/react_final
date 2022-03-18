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
                            <Link class="nav-link text-dark" to={sessionStorage.getItem("email") ? "/" : "/users/signup"} >     {/* 마이페이지로 가게끔 수정하기! */}
                                <i class="bi bi-person-circle"></i> {sessionStorage.getItem("email") ? sessionStorage.getItem("name") + "님" : "회원가입"}</Link>
                        </div>
                        <div class="col-5" id="login_css">
                            <Link class="nav-link text-dark" to={sessionStorage.getItem("email") ? "/users/logout" : "/users/signin"} >
                                <i class="bi bi-door-open-fill"></i>{sessionStorage.getItem("email") ? "로그아웃" : "로그인"} </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
