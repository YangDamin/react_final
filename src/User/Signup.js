import axios from 'axios';
import React, { useState } from 'react';
import './Signup.css';
import Swal from 'sweetalert2'


const Signup = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userPwCheck, setUserPwCheck] = useState("");


    const onChangeEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const onChangePw = (e) => {
        setUserPw(e.target.value);
    }

    const onChnagePhone = (e) => {
        setUserPhone(e.target.value);
    }

    const onChangePwCheck = (e) => {
        setUserPwCheck(e.target.value);
    }

    // 비밀번호 조합
    function CheckPass(str) {
        var reg1 = /^[a-z0-9]{8,16}$/;    // a-z 0-9 중에 8자리 부터 16자리만 허용 한다는 뜻
        var reg2 = /[a-z]/g;
        var reg3 = /[0-9]/g;
        return (reg1.test(str) && reg2.test(str) && reg3.test(str));
    };


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

                                    {/* 이메일 제한 */}

                                    {userEmail.length == 0 ? (<span style={{ color: 'red', fontSize: 'small' }}><i class="bi bi-info-circle"></i> 이메일을 입력해 주십시오.</span>) : null}
                                    {userEmail.length >= 1 ? (userEmail.includes("@") && userEmail.includes(".") ? (<span style={{ color: 'blue', fontSize: 'small' }}></span>) : (<span style={{ color: 'red', fontSize: 'small' }}><i class="bi bi-info-circle"></i> 이메일 형식으로 입력해 주십시오.</span>)) : null}

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
                                    <input class="form-control" type="password" name="password" id="pwd" value={userPw} placeholder="비밀번호를 입력해주세요." required
                                        onChange={onChangePw} maxLength="16" />
                                    {/* 비밀번호 제한 */}
                                    {CheckPass(userPw) ? (<span style={{ color: 'red', fontSize: 'small' }}><i class="bi bi-info-circle"></i> 사용 가능합니다.</span>) : (<span style={{ color: 'red', fontSize: 'small' }}><i class="bi bi-info-circle"></i> 영문+숫자 조합 8자~16자로 입력해주세요.</span>)}
                                </div>
                            </div>
                        </div>

                        {/* 비밀번호 재확인 */}
                        <div class="form-group mb-3">
                            <div class="row">
                                <div class="col-3 text-left">
                                    <label>비밀번호 재확인</label><span style={{ color: 'red' }}> *</span>
                                </div>
                                <div class="col-6">
                                    <input class="form-control" type="password" name="password" id="pwdCheck" value={userPwCheck} placeholder="비밀번호를 입력해주세요." required
                                        onChange={onChangePwCheck} maxLength="16" />
                                    {userPw.length == 0 && userPwCheck.length == 0 ? null :
                                        (userPw == userPwCheck ?
                                            <span style={{ "color": "red", fontSize: 'small' }}><i class="bi bi-info-circle"></i>  비밀번호가 같습니다.</span> :
                                            <span style={{ "color": "red", fontSize: 'small' }}><i class="bi bi-info-circle"></i>  비밀번호가 같지 않습니다.</span>)}
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

                        {/* 휴대폰번호 */}
                        <div class="form-group mb-3">
                            <div class="row">
                                <div class="col-3 text-left">
                                    <label>휴대폰 번호</label><span style={{ color: 'red' }}> *</span>
                                </div>
                                <div class="col-6">
                                    <input class="form-control" type="phone" name="phone" id="phoneNum" value={userPhone} placeholder="숫자만 입력해주세요." required
                                        onChange={onChnagePhone} />
                                </div>
                            </div>
                        </div>

                        <hr class="border-dark mt-5" />

                        {/* 이용약관동의 */}
                        <div class="form-group mb-5">
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



                                // 입력 안될 시 회원가입 막기
                                if (document.getElementById("email").value == '') {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '이메일을 입력해주세요.'
                                    })
                                    document.getElementById("email").focus();
                                } else if (document.getElementById("pwd").value == '') {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '비밀번호를 입력해주세요.'
                                    })
                                    document.getElementById("pwd").focus();
                                } else if (document.getElementById("name").value == '') {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '이름을 입력해주세요.'
                                    })
                                    document.getElementById("name").focus();
                                } else if (document.getElementById("phoneNum").value == '') {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '휴대폰 번호를 입력해주세요.'
                                    })
                                    document.getElementById("phoneNum").focus();

                                } else if (userPw != userPwCheck) {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '비밀번호 재확인 해주세요.'
                                    })
                                    document.getElementById("pwdCheck").focus();
                                }
                                // 다 입력되어있을 시!
                                else if (document.getElementById("email").value != '' && document.getElementById("pwd").value != '' &&
                                    document.getElementById("name").value != '' && document.getElementById("phoneNum").value != '') {

                                    if (CheckPass(userPw) == false) {
                                        Swal.fire({
                                            icon: 'error',
                                            text: '회원가입을 할 수 없습니다. 다시 확인해주세요.'
                                        })
                                    } else {

                                        const formData = new FormData();

                                        formData.append('email', document.getElementById("email").value);
                                        formData.append('pwd', document.getElementById("pwd").value);
                                        formData.append('name', document.getElementById("name").value);
                                        formData.append('phone', document.getElementById("phoneNum").value);

                                        // const {REACT_APP_SRPING} = process.env;
                                        // console.log("spring"+REACT_APP_SRPING)

                                        axios({
                                            url: `${process.env.REACT_APP_SRPING}/users/signup`,
                                            method: 'post',
                                            data: formData
                                        }).then((res) => {
                                            console.log(res.data)
                                            if (res.data.code == 201) {
                                                Swal.fire({
                                                    icon: 'error',
                                                    text: '중복된 이메일입니다. 다시 입력해주세요.'
                                                })
                                                document.getElementById("email").focus();
                                            } else if (res.data.code == 401) {
                                                Swal.fire({
                                                    icon: 'error',
                                                    text: '이미 가입된 회원정보 입니다.'
                                                })
                                            } else if (res.data.code == 200) {
                                                Swal.fire(
                                                    '',
                                                    '회원가입 완료되었습니다.',
                                                    'success'
                                                )
                                                setTimeout(function () {
                                                    window.location = '/';
                                                }, 2000)

                                            }
                                        });
                                    }
                                }

                            }}></input>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Signup;