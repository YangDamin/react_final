import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import './Signin.css';
import {
  CardHeader,
  Button,
}
  from 'reactstrap';


const Signin = () => {

  const navigate = useNavigate();

  // 중복확인 하기 위해
  const [userList, setUserList] = useState([]);


  // function hendleClick(e) {
  //     e.preventDefault();
  //     window.location.href = "/users/signup"

  //   }

  function GithubClick(e) {
    e.preventDefault();
    window.location.href = "https://github.com/login/oauth/authorize?client_id=51a830e8c4702bbaaaf7&redire" +
      "ct_uri=http://localhost:3000/"

  }

  function KakaoClick(e) {
    e.preventDefault();
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=bb1062f029aa6ff58bbe4fc11289" +
      "458c&redirect_uri=http://localhost:3000/&response_type=code"

  }


  function SendData(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target['0'].value);
    console.log(e.target['1'].value);

    const formData = new FormData();
    const email = e
      .target['0']
      .value;
    const pwd = e
      .target['1']
      .value;

    formData.append("email", email);
    formData.append("pwd", pwd);

    axios({ url: 'http://localhost:8080/api/log', method: 'post', data: formData }).then(
      function (res) {
        console.log(res.data);

        if (res.data.code === 200) {
          if (res.data.Code.id === 1) {
            sessionStorage.setItem('Managername', res.data.name);
            // Swal.fire({ icon: 'success', title: 'Good!', text: 'Login complete!' })

            setTimeout(function () {
              window.location = '/Manager/index';
            }, 1000);

          } else {
            sessionStorage.setItem('name', res.data.name);
            // Swal.fire({ icon: 'success', title: 'Good!', text: 'Login complete!' })
            setTimeout(function () {
              window.location = '/';
            }, 1000);

          }
        } else if (res.data.code === 201) {
          //   Swal.fire(
          //     { icon: 'error', title: 'Oops...', text: 'Please check your email and password..' }

          //   )

        }
      }
    )
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
                  <input class="form-control" type="password" name="password" id="pwd" placeholder="비밀번호를 입력해주세요." required />
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <input type="submit" value="로그인" class="btn bg-secondary text-white flex-shrink-0 me-2"
                onClick={(e) => {

                  const formData = new FormData();
                  //OOO님 안녕하세요!,로그인 성공이면 main페이지
                  //잘못된 정보를 입력하셨습니다. 로그인 실패하면 signin페이지
                  const email = document.getElementById("email").value;
                  const password = document.getElementById("password").value;
                  formData.append("email", email);
                  formData.append("password", password);
                  const result = axios({
                    url: 'http://localhost:8080/users/signin',
                    method: 'post',
                    data: formData
                  });
                  result.then((res) => {
                    const result = res.data;
                    if (result.code == 200) {
                      //로그인 성공하였을 때, SessionStorage에 값 넣고 
                      sessionStorage.setItem("userId", result.user.id);
                      sessionStorage.setItem("email", result.user.email);
                      sessionStorage.setItem("password", result.user.password);
                      console.log(sessionStorage.getItem("userId"), sessionStorage.getItem("email"), sessionStorage.getItem("pwd"));
                      alert(result.msg);
                      navigate("/");
                    } else if (result.code == 400) {
                      alert(result.msg);
                      document.getElementById("email").value = "";
                      document.getElementById("password").value = "";
                    }
                  });
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
