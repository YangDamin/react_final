// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Nav from '../Common/Nav';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import './MyPage.css';




const divStyle = {
    display: "flex",
    width: "90%",
    margin: "1.1rem auto"
}

const MyPage = () => {

    // 새 비밀번호 + 비밀번호 확인
    const [newpw, setNewpw] = useState("");
    const [newpwCheck, setNewpwCheck] = useState("");

    const onChangeNewpw = (e) => {
        setNewpw(e.target.value);
    }
    const onChangeNewpwCheck = (e) => {
        setNewpwCheck(e.target.value);
    }

    // 비밀번호 조합
    function CheckPass(str) {
        var reg1 = /^[a-z0-9]{8,16}$/;    // a-z 0-9 중에 8자리 부터 16자리만 허용 한다는 뜻
        var reg2 = /[a-z]/g;
        var reg3 = /[0-9]/g;
        return (reg1.test(str) && reg2.test(str) && reg3.test(str));
    };

    // 비번변경 모달 창
    const [newPWshow, setnewPWshow] = useState(false);
    const handleClose = () => setnewPWshow(false);
    const handleShow = () => setnewPWshow(true);


    const modalStyle = {
        fontFamily: "Pretendard-Medium",
        textAlign: "center"
    }


    // 비번 변경 버튼 클릭시 이벤트
    const newPwonClick = (e) => {
        e.preventDefault();

        if (CheckPass(document.getElementById("newpw").value)) {
            if(newpw != newpwCheck){
                Swal.fire({
                    icon: 'error',
                    text: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.'
                })
            }else{
                const formData = new FormData();
        
                formData.append('email', sessionStorage.getItem('email'));
                formData.append('pwd', document.getElementById("newpw").value);
        
        
                axios({
                    url: "http://localhost:8080/mypage",
                    method: 'post',
                    data: formData
                }).then((res) => {
                    console.log(res.data);
                    const result = res.data;
                    if(result.compare == true){
                        Swal.fire({
                            icon: 'error',
                            text: '기존과 동일한 비밀번호 입니다. 새로운 비밀번호를 입력해주세요.'
                        })
                    }else{
                        sessionStorage.setItem("password", result.pwd);
                        console.log("세션 비번:"+sessionStorage.getItem("password"))

                        Swal.fire(
                            '',
                            '비밀번호 변경되었습니다.',
                            'success'
                        )
                        setTimeout(function () {
                            window.location = '/mypage';
                        }, 2000)
                    }
        
                })
            }
        }else {
            Swal.fire({
                icon: 'error',
                text: '영문+숫자 조합 8자~16자로 입력해주세요.'
            })
        }
    }

    return (

        <>
            <Nav/>
            <CssBaseline />
            <Container className="content-container" >
            <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0', 
			   borderWidth: "5px",borderColor:'black',borderStyle:'solid',
			   borderColor:'black', height: '100vh',overflow:'overlay' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div
                            style={{
                                'width': '100%', 'height': '30%', 'margin': '0 auto',
                                 'marginTop': '30px', 'fontFamily': 'Pretendard-Medium'
                            }}>
                            <h3 style={{ 'fontFamily': 'Pretendard-Medium' , "fontWeight":"bold", "paddingTop":"1rem"}}>마이페이지</h3>

                            <hr class="border-dark mt-2" width="90%" style={{ "margin": "0 auto", "height": "2px" }} />
                            <div style={divStyle}>
                                <div style={{ "marginRight": "10rem" }}>
                                    <label>이름</label>
                                </div>
                                <div>
                                    {sessionStorage.getItem('name')}
                                </div>
                            </div>

                            <hr class="border-dark mt-2" width="90%" style={{ "margin": "0 auto", "height": "0.5px" }} />
                            <div style={divStyle}>
                                <div style={{ "marginRight": "9rem" }}>
                                    <label>이메일</label>
                                </div>
                                <div>
                                    {sessionStorage.getItem('email')}
                                </div>
                            </div>


                            <hr class="border-dark mt-2" width="90%" style={{ "margin": "0 auto", "height": "0.5px" }} />
                            <div style={divStyle}>
                                <div style={{ "marginRight": "7rem" }}>
                                    <label>휴대폰번호</label>
                                </div>
                                <div>
                                    {sessionStorage.getItem('phone')}
                                </div>
                            </div>


                            <hr class="border-dark mt-2" width="90%" style={{ "margin": "0 auto", "height": "0.5px" }} />
                            <div style={divStyle}>
                                <div style={{ "marginRight": "8rem" }}>
                                    <label>비밀번호</label>
                                </div>


                                <div>
                                    <div id="pw">
                                        <span>********</span>
                                        <input type="button" value="비밀번호 변경" class="btn bg-black text-white flex-shrink-0 " style={{ "marginLeft": "3rem" }} onClick={handleShow} />

                                        {/* 모달창 */}
                                        <Modal show={newPWshow} onHide={handleClose} style={modalStyle} size="md">
                                            <Modal.Header closeButton>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h3 style={{ "fontWeight": "bold", "marginBottom": "2rem", "marginTop": "2rem" }}>비밀번호 변경하기</h3>
                                                <form>
                                                    <div style={{ "width": "350px", "margin": "50px auto" }}>
                                                        <div>
                                                            <span style={{ "display": "flex" }}>새 비밀번호</span>
                                                            <input class="form-control mb-3" type="password" id="newpw" value={newpw} placeholder="영문+숫자 조합 8자~16자로 입력해주세요." maxLength='16' onChange={onChangeNewpw}/>
                                                            <span style={{ "display": "flex" }}>비밀번호 재확인</span>
                                                            <input class="form-control mb-2" type="password" id="newpw" value={newpwCheck} placeholder="영문+숫자 조합 8자~16자로 입력해주세요." maxLength='16' onChange={onChangeNewpwCheck} />
                                                            {newpw.length == 0 && newpwCheck.length == 0 ? null : (newpw == newpwCheck ? <span style={{ "display": "flex", "color":"red" }}>* 비밀번호가 같습니다.</span> : <span style={{ "display": "flex", "color":"red" }}>* 비밀번호가 같지 않습니다.</span>)}
                                                            
                                                            <div style={{ "display": "flex" }}>
                                                                <input type="button" value="변경" class="btn text-white bg-black flex-shrink-0 me-2 mb-5 mt-3" style={{ "width": "50%" }} onClick={newPwonClick}></input>
                                                                <input type="button" value="취소" class="btn text-black bg-light flex-shrink-0 me-2 mb-5 mt-3" style={{ "width": "50%", "border": "0.5px solid" }} onClick={(e) => {
                                                                    window.location = "/mypage"
                                                                }}></input>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </form>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </div>
                            </div>

                            <hr class="border-dark mt-2" width="90%" style={{ "margin": "0 auto", "height": "2px" }} />

                            {/* <input type="button" value="탈퇴하기" class="btn text-white flex-shrink-0 mt-3 " style={{"display":"flex", "margin":"0 3.5rem 0 auto" ,"backgroundColor":"rgba(255, 118, 118, 1)"}} onClick={(e)=> {
                                e.preventDefault();
                                const formData = new FormData();
                                formData.append("id", sessionStorage.getItem("user_id"));
                                console.log(sessionStorage.getItem("user_id"))

                                axios({
                                    url: "http://localhost:8080/mypage",
                                    method: "delete",
                                    data: formData
                                }).then((res) => {
                                    sessionStorage.removeItem("email");
                                    sessionStorage.removeItem("password");
                                    sessionStorage.removeItem("name");
                                    sessionStorage.removeItem("phone");
                                    sessionStorage.removeItem("user_id");

                                    Swal.fire(
                                        '',
                                        '탈퇴 완료되었습니다!',
                                        'success'
                                      )
                                      setTimeout(function () {
                                        window.location = '/';
                                      }, 2000)
                                }).catch((error)=>{
                                    console.log(error);
                                })
                            }}/> */}



                        </div>
                    </Box>
                </Box>
            </Container>
            
        </>
    );
}


export default MyPage;