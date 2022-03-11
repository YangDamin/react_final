import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");

    // 중복확인 하기 위해
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const result = axios({
            url: "http://localhost:8080/users/signup",
            method: 'get'
        });

        result.then((res) => {
            console.log(res.data);
            setUserList(res.data);
        })
    }, []);


    const onChangeEmail = (e) => {
        setUserEmail(e.target.value);
    }


    return (
        <div>
            <div class="container" id="signup_container">
                <h3 class="h3 mt-5 mb-4">회원가입</h3>
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
                                    <input class="form-control" type="email" name="email" id="email" value={userEmail} placeholder="@까지 정확하게 입력해주세요." required
                                        onChange={onChangeEmail} />
                                </div>
                                <div class="col-3">
                                    <button class="btn bg-secondary text-white flex-shrink-0 me-2" onClick={(e) => {
                                        e.preventDefault();

                                        // * 중복 확인 코드 넣기!

                                        // console.log("button 함수 클릭시 리스트: " + userList);

                                        // {
                                        //     userList.map((user) => {
                                        //         console.log(user);
                                        //         if (user.email == document.getElementById("email").value) {
                                        //             alert('이미 사용 중인 이메일 입니다.');
                                        //         }

                                        //     })
                                        // }


                                    }}>중복확인</button>
                                </div>
                            </div>
                        </div>

                        {/* 이메일 */}
                        <div class="form-group mb-3">
                            <div class="row">
                                <div class="col-3 text-left">
                                </div>
                                <div class="col-6">
                                    {userEmail.length == 0 ? (<span style={{ color: 'red', fontSize: 'small' }}>이메일을 입력해 주십시오.</span>) : null}
                                    {userEmail.length >= 1 ? (userEmail.includes("@") && userEmail.includes(".") ? (<span style={{ color: 'blue', fontSize: 'small' }}>사용 가능한 이메일입니다. 중복 확인해주세요.</span>) : (<span style={{ color: 'red', fontSize: 'small' }}>이메일 형식으로 입력해 주십시오.</span>)) : null}

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
                                    <input class="form-control" type="text" name="name" id="name" placeholder="이름을 입력해주세요." required />
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
                                    <input class="form-control" type="phone" name="phone" id="phoneNum" placeholder="숫자만 입력해주세요." required />
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
                                    <input type="checkbox" id="check" checked required /> 약관에 동의합니다.

                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <input type="submit" value="회원가입" class="btn bg-secondary text-white flex-shrink-0 me-2" onClick={(e) => {
                                e.preventDefault();

                                console.log(document.getElementById("phoneNum").value);

                            

                                // 입력 안될 시 회원가입 막기
                                if (document.getElementById("email").value == '') {
                                    alert('이메일을 입력해주세요.');
                                    document.getElementById("email").focus();
                                } else if (document.getElementById("pwd").value == '') {
                                    alert('비밀번호를 입력해주세요.');
                                    document.getElementById("pwd").focus();
                                } else if (document.getElementById("name").value == '') {
                                    alert('이름을 입력해주세요.');
                                    document.getElementById("name").focus();
                                } else if (document.getElementById("phoneNum").value == '') {
                                    alert('휴대폰 번호를 입력해주세요.');
                                    document.getElementById("phoneNum").focus();
                                
                                } 
                                // 다 입력되어있을 시!
                                else if (document.getElementById("email").value != '' && document.getElementById("pwd").value != '' &&
                                    document.getElementById("name").value != '' && document.getElementById("phoneNum").value != '') {

                                    const formData = new FormData();

                                    formData.append('email', document.getElementById("email").value);
                                    formData.append('pwd', document.getElementById("pwd").value);
                                    formData.append('name', document.getElementById("name").value);
                                    formData.append('phoneNum', document.getElementById("phoneNum").value);

                                    axios({
                                        url: "http://localhost:8080/users/signup",
                                        method: 'post',
                                        data: formData
                                    }).then((res) => {
                                        console.log(res.data)
                                        if (res.data.code != 200) {
                                            alert('회원가입 실패되었습니다.');
                                            document.querySelector('[name=email]').value = '';
                                            document.querySelector('[name=password]').value = '';
                                            document.querySelector('[name=name]').value = '';
                                            document.querySelector('[name=phone]').value = '';
                                        } else {
                                            alert('회원가입 완료되었습니다.');
                                            navigate("/");
                                        }
                                    });
                                }

                            }}></input>

                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;