import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Search from './Search';
import myimage from "./logo_4.png";

const Header = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = ()=>{
        if(text.length>0){
          navigate("/search/"+text);
        }
      }


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
                <ul class="flex-row ms-auto navbar-nav order-lg-1 ps-2 pe-2 col-3">
                    <li class="search-container"> 
                    <div class="search-bar p-2 pb-3 ps-2 pe-2 pt-3 text-dark" title="Search"  
                  >
                    <div class="input-group mb-3" >
                        <input 
                        id="search_txt"
                        class="col-4"
                        className="searchbar_input"
                        onChange={(e)=>onChange(e)}
                        type="text"
                        placeholder="Search"
                        width="14px"
                        style={{
                          marginLeft: "auto",
                          textAlign: "center",
                          borderRadius: "25px 0px 0px 25px",
                          height: 35,
                          width: 150,
                          borderWidth: '2.5px',
                          borderStyle: "solid",
                          borderColor: "rgba(219, 219, 219, 1)",
                        }}
                       >
                       </input>
                       <button 
                       class="btn-search col-2" 
                       id="search_btn"
                       onClick={()=>handleClick()}
                       style={{
                        color:"rgba(169, 169, 169, 1)",
                        textAlign:"center",
                        backgroundColor:"white",
                        borderRadius: "0px 25px 25px 0px",
                        borderRight:'2.5px solid rgba(219, 219, 219, 1)',
                        borderTop:'2.5px solid rgba(219, 219, 219, 1)' ,
                        borderBottom:'2.5px solid rgba(219, 219, 219, 1)',
                        borderStyle: "solid",
                        borderColor: "rgba(219, 219, 219, 1)"
                    }}
                       ><i class="bi bi-search"></i></button>
                      
                       </div>
                    
                    </div>
            </li>
            </ul>
                    
                {/* <Search /> */}
            </div>
            
            </div>

    );
}

export default Header;
