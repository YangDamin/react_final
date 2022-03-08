import axios from 'axios';
import React, { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import Footer from '../Common/Footer';
import './Signup.css';

const Signup = () => {



    return (
        <div>
            <div class="container" id="signup_container">
                <h3 class="h3 mt-5 mb-4">회원가입</h3>
                <hr class="border-dark mt-5 mb-4" />

                <div class="row" style={{ textAlign: 'left'}}>
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
                                <div class="col-3">
                                    <button class="btn bg-secondary text-white flex-shrink-0 me-2">중복확인</button>
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

                        {/* 이름 */}
                        <div class="form-group mb-3">
                            <div class="row">
                                <div class="col-3 text-left">
                                    <label>이름</label><span style={{ color: 'red' }}> *</span>
                                </div>
                                <div class="col-6">
                                <input class="form-control" type="text" name="name" id="name" placeholder="이름을 입력해주세요." required/>
                                </div>
                            </div>
                        </div>

                        {/* 핸드폰번호 */}
                        <div class="form-group mb-3">
                            <div class="row">
                                <div class="col-3 text-left">
                                    <label>휴대폰 번호</label><span style={{ color: 'red' }}> *</span>
                                </div>
                                <div class="col-6">
                                <input class="form-control" type="phone" name="phone" id="phoneNum" placeholder="숫자만 입력해주세요." required/>
                                </div>
                            </div>
                        </div>

                        <hr class="border-dark mt-5" />

                        {/* 이용약관동의 */}
                        <div class="form-group mb-3">
                            <div class="row">
                                <div class="col-3 text-left">
                                    <label>이용약관동의</label><span style={{ color: 'red' }}> *</span>
                                </div>
                                <div class="col-6">
                                    <input type="checkbox" required/> 약관에 동의합니다.

                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center'}}>
                            <input type="submit" value="회원가입" class="btn bg-secondary text-white flex-shrink-0 me-2" onClick={(e) => {
                                e.preventDefault();
                                const formData = new FormData();

                                formData.append('email', document.getElementById("email").value);
                                formData.append('pwd', document.getElementById("pwd").value);
                                formData.append('name', document.getElementById("name").value);
                                formData.append('phoneNum', document.getElementById("phoneNum").value);

                                console.log(document.getElementById("phoneNum").value);
                                axios({
                                    url : "http://localhost:8080/users/signup",
                                    method: 'post',
                                    data: formData
                                }).then((res) => console.log(res.data));

                            }}></input>


                            {/* <button class="btn bg-secondary text-white flex-shrink-0 me-2" type="button" onClick={(e) => {
                                e.preventDefault();
                                const formData = new FormData();

                                formData.append('email', document.getElementById("email").value);
                                formData.append('pwd', document.getElementById("pwd").value);
                                formData.append('name', document.getElementById("name").value);
                                formData.append('phoneNum', document.getElementById("phoneNum").value);

                                console.log(document.getElementById("phoneNum").value);
                                axios({
                                    url : "http://localhost:8080/users/signup",
                                    method: 'post',
                                    data: formData
                                }).then((res) => console.log(res.data));

                            }}>회원가입</button> */}
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;
