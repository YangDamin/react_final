import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Search from './Search';
import myimage from "./black_1.jpg";

const Header = () => {


    return (
        <div className="container">
            <div class="row">
                <div class="col-7 text-left" id="logo">
                    <span><a className="nav-link" href="/" >
                    <img className ="logo" src={myimage} alt="logo" 
                            style={{
                                'width':'185px',
                                'marginLeft':'40px',
                                'margin-top':'30px'
                                    }}/></a></span>
                </div>
                <div class="col-4">
                    <div class="row">
                        <div class="col-6" id="signup_css" style={{"margin-top":"40px"}}>
                            <Link class="nav-link text-dark" to={sessionStorage.getItem("email") ? "/mypage" : "/users/signup"} >     {/* 마이페이지로 가게끔 수정하기! */}
                                <i class="bi bi-person-circle"></i> {sessionStorage.getItem("email") ? sessionStorage.getItem("name") + "님" : "회원가입"}</Link>
                        </div>
                        <div class="col-6" id="login_css"style={{"margin-top":"40px"}}>
                            <Link class="nav-link text-dark" to={sessionStorage.getItem("email") ? "/users/logout" : "/users/signin"} >
                                <i class="bi bi-door-open-fill"></i>{sessionStorage.getItem("email") ? "로그아웃" : "로그인"} </Link>
                        </div>
                    </div>
                </div>
                <Search />
            </div>

        </div>
    );
}

export default Header;
