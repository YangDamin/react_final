import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './Signin.css';
import {
  CardHeader,
  Button,
}
  from 'reactstrap';
import Swal from 'sweetalert2';


const Signin = () => {



  function GithubClick(e) {
    e.preventDefault();
    window.location.href = "https://github.com/login/oauth/authorize?client_id=51a830e8c4702bbaaaf7&redire" +
      "ct_uri=http://localhost:3000/"

  }

  function KakaoClick(e) {
    e.preventDefault();
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=04c9a760d057d6ccbc3cdb399201" +
      "c2a3&redirect_uri=http://localhost:3000/&response_type=code"

  }


  return (
    <div>
      <div class="container" id="signup_container">
        <h3 class="h3 mt-5 mb-4">로그인</h3>
        <hr class="border-dark mt-5 mb-4" />

        <div class="row" style={{ textAlign: 'left' }}>
          <form>
            {/* 이메일 */}
            <div class="form-group mb-3">
              <div class="row">
                <div class="col-3 text-left">
                  <label>이메일</label><span style={{ color: 'red' }}> *</span>
                </div>
                <div class="col-6">
                  <input class="form-control" type="email" name="email" id="email" placeholder="@까지 정확하게 입력해주세요." required />
                </div>

              </div>
            </div>

            {/* 비밀번호 */}
            <div class="form-group mb-3">
              <div class="row">
                <div class="col-3 text-left">
                  <label>비밀번호</label><span style={{ color: 'red' }}> *</span>
                </div>
                <div class="col-6">
                  <input class="form-control" type="password" name="password" id="password" placeholder="비밀번호를 입력해주세요." required />
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <input type="submit" value="로그인" class="btn bg-secondary text-white flex-shrink-0 me-2"
                onClick={(e) => {
                  e.preventDefault();

                  const formData = new FormData();
                  //OOO님 안녕하세요!,로그인 성공이면 main페이지
                  //잘못된 정보를 입력하셨습니다. 로그인 실패하면 signin페이지
                  const email = document.getElementById("email").value;
                  const password = document.getElementById("password").value;
                  
                  
                  formData.append("email", email);
                  formData.append("pwd", password);
                 

                  axios({
                    url: 'http://localhost:8080/users/signin',
                    method: 'post',
                    data: formData
                  }).then((res) => {
                    const result = res.data;
                    if (result.code == 200) {
                      //로그인 성공하였을 때, SessionStorage에 값 넣고 
                      sessionStorage.setItem("email", result.user.email);
                      sessionStorage.setItem("password", result.user.pwd);
                      sessionStorage.setItem("name", result.user.name);
                    

                      
                      Swal.fire(
                        '',
                        '로그인 성공',
                        'success'
                      )
                    setTimeout(function(){
                        window.location = '/';
                    },2000)

                    } else if (result.code == 400) {
                      Swal.fire({
                        icon: 'error',
                        text: '로그인 실패! 다시 입력해주세요.'
                      })
                      document.getElementById("email").value = "";
                      document.getElementById("password").value = "";
                    }
                  }).catch( (error) => {
                    console.log(error);
                  })

                  
                }}></input>


              <a class="btn bg-secondary text-white flex-shrink-0 me-2" href="/users/signup">
                <small>회원가입</small>
              </a>





            </div>
            <CardHeader className="bg-transparent">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">

                {/* Github Login  */}
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={GithubClick}>
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("../assets/img/github.svg").default
                      } />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>

                {/* Kakao Login */}
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={KakaoClick}>
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("../assets/img/KakaoTalk_logo.svg").default
                      } />
                  </span>
                  <span className="btn-inner--text">
                    Kakao
                  </span>
                </Button>
              </div>
            </CardHeader>
          </form>



        </div>


      </div>

    </div>


  );
}

export default Signin;