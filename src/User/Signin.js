import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Signin.css';
import { CardHeader, Button, } from 'reactstrap';
import Swal from 'sweetalert2';
import { Modal } from 'react-bootstrap';



const Signin = () => {


  function KakaoClick(e) {
    e.preventDefault();
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=04c9a760d057d6ccbc3cdb399201c2a3" +
      "&redirect_uri=http://localhost:8080/oauth/kakao&response_type=code"
  }

  const REST_API_KEY = "04c9a760d057d6ccbc3cdb399201c2a3";
  const REDIRECT_URI = "http://localhost:8080/oauth/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return (
    <div>
      <div class="container" id="signup_container">
        <h3 class="h3 mt-5 mb-4">로그인</h3>
        <hr class="border-dark mt-5 mb-4" />

        <div class="row" style={{ textAlign: 'left' }}>
          <form>

            <div class="row">
              {/* 이메일, 비번 label */}
              <div class="col-3">
                <div class="row" style={{ "marginBottom": "2rem" }}>
                  <label>이메일<span style={{ color: 'red' }}> *</span></label>
                </div>
                <div class="row">
                  <label>비밀번호<span style={{ color: 'red' }}> *</span></label>
                </div>
              </div>

              {/* 이메일, 비번 input */}
              <div class="col-6">
                <div class="row mb-3">
                  <input class="form-control" type="email" name="email" id="email" placeholder="@까지 정확하게 입력해주세요." required />
                </div>
                <div class="row">
                  <input class="form-control" type="password" name="password" id="password" placeholder="비밀번호를 입력해주세요." required />
                </div>
              </div>

              {/* 로그인 button */}
              <div class="col-3">
                <div class="row">
                  <input type="submit" value="로그인" class="btn bg-secondary text-white flex-shrink-0 me-2" style={{ "height": "5.7rem", "width": "8rem", "marginLeft": "2rem" }}
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
                          sessionStorage.setItem("phone", result.user.phone);



                          Swal.fire(
                            '',
                            '로그인 성공',
                            'success'
                          )
                          setTimeout(function () {
                            window.location = '/';
                          }, 2000)

                        } else if (result.code == 400) {
                          Swal.fire({
                            icon: 'error',
                            text: '로그인 실패! 다시 입력해주세요.'
                          })
                          document.getElementById("email").value = "";
                          document.getElementById("password").value = "";
                        }
                      }).catch((error) => {
                        console.log(error);
                      })


                    }}></input>

                  <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                    <div className='mt-3'>
                      <a id="findcss" style={{ "cursor": "pointer" }} onClick={(e)=> {e.preventDefault();  window.location="/users/findEmail" }}>이메일 찾기</a>
                    </div>

                    <span class="mt-3">|</span>
                    <div className='mt-3'>
                      <a id="findcss" style={{ "cursor": "pointer" }}>비밀번호 찾기</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>




            <div className="bg-transparent">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">


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
            </div>
          </form>

          <hr class="border-dark mt-5 mb-4" />

          <div style={{ "display": "flex" }}>
            <span>아직 회원이 아니신가요?</span> <a href="/users/signup" style={{ "textDecoration": "none", "color": "rgba(49, 141, 251, 1)", "marginLeft": "1rem" }}>회원 가입하기</a>
          </div>
        </div>

      </div>

    </div>


  );
}

export default Signin;