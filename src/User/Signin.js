import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from "../Common/Header";
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import './Signin.css';
import {
  CardHeader,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
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
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=04c9a760d057d6ccbc3cdb399201" +
      "c2a3&redirect_uri=http://localhost:3000/&response_type=code"

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

    axios({ url: 'http://localhost:8080/log', method: 'post', data: formData }).then(
      function (res) {
        console.log(res.data);

        if (res.data.code === 200) {
          if (res.data.Code.id === 1) {
            sessionStorage.setItem('Managername', res.data.name);
            // Swal.fire({ icon: 'success', title: 'Good!', text: 'Login complete!' })

            //사용자 계정
            setTimeout(function () {
              window.location = '/';
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
    <>
    <Header/>
    <div>
      <div class="container" id="signup_container">
        <h3 class="h3 mt-5 mb-4">로그인</h3>
        <hr class="border-dark mt-5 mb-4" />

        <div class="row" style={{ textAlign: 'left' }}>
        <Form role="form" onSubmit={SendData}>
          {/* <form> */}


            <div class="form-group mb-3">
              <div class="row">
                <div class="col-3 text-left">
                  <label>이메일</label><span style={{ color: 'red' }}> *</span>
                </div>
                <div class="col-6">
             {/* 이메일 */}
            <FormGroup>
            <InputGroup>
              {/* <InputGroupAddon addonType="prepend"> */}
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
              {/* </InputGroupAddon> */}
              <Input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                autoComplete="new-email" />
            </InputGroup>
          </FormGroup>
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
                <FormGroup>
            <InputGroup>
              {/* <InputGroupAddon addonType="prepend"> */}
                <InputGroupText>
                  <i className="ni ni-lock-circle-open" />
                </InputGroupText>
              {/* </InputGroupAddon> */}
              <Input
                placeholder="Password"
                type="password"
                id="pwd"
                name="pwd"
                autoComplete="new-password" />
            </InputGroup>
          </FormGroup>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
            <Button className="my-4" color="primary" type="submit">
             로그인
            </Button>

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
          {/* </form> */}

          
          </Form>
        </div>

        
      </div>

    </div>

    </>
  );
}

export default Signin;
