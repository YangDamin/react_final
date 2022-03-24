// import React, { useState } from 'react';
import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(14),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const divStyle = {
    display: "flex",
    width: "90%",
    margin: "1.1rem auto"
}

const MyPage = () => {

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
        fontFamily: "SuncheonB",
        textAlign: "center"
    }


    // 비번 변경 버튼 클릭시 이벤트
    const newPwonClick = (e) => {
        e.preventDefault();
        if (CheckPass(document.getElementById("newpw").value)) {

            // 현재 비밀번호와 변경 비밀번호가 같으면 변경 안되게
            if (sessionStorage.getItem("password") === document.getElementById("newpw").value) {
                Swal.fire({
                    icon: 'error',
                    text: '동일한 비밀번호 입니다. 새로운 비밀번호를 입력해주세요.'
                })
            } else {


                const formData = new FormData();

                formData.append('email', sessionStorage.getItem('email'));
                formData.append('pwd', document.getElementById("newpw").value);


                axios({
                    url: "http://localhost:8080/mypage",
                    method: 'post',
                    data: formData
                }).then((res) => {
                    console.log(res.data)
                    

                    sessionStorage.setItem("password", res.data);
                    console.log("세션 비번:"+sessionStorage.getItem("password"))

                    Swal.fire(
                        '',
                        '비밀번호 변경되었습니다.',
                        'success'
                    )
                    setTimeout(function () {
                        window.location = '/mypage';
                    }, 2000)
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                text: '영문+숫자 조합 8자~16자로 입력해주세요.'
            })
        }
    }

    return (

        <>
            <Header></Header>
            <Nav></Nav>
            <CssBaseline />
            <Container className="content-container" >
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div
                            style={{
                                'width': '100%', 'height': '30%', 'margin': 'auto',
                                'margin': 'center', 'marginTop': '30px', 'fontFamily': 'LeferiPoint-WhiteA'
                            }}>
                            <h3 style={{ 'fontFamily': 'LeferiPoint-BlackA' }}>회원정보 조회</h3>

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
                                    {sessionStorage.getItem('phoneNum')}
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
                                                {/* <Modal.Title><img src="./img/인조이.PNG" width="100px"></img></Modal.Title> */}
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h3 style={{ "fontWeight": "bold", "marginBottom": "2rem", "marginTop": "2rem" }}>비밀번호 변경하기</h3>
                                                <form>
                                                    <div style={{ "width": "350px", "margin": "50px auto" }}>
                                                        <div>
                                                            <span style={{ "display": "flex" }}>새 비밀번호</span>
                                                            <input class="form-control mb-3" type="password" id="newpw" placeholder="영문+숫자 조합 8자~16자로 입력해주세요." maxLength='16' />
                                                            <div style={{ "display": "flex" }}>
                                                                <input type="button" value="변경" class="btn text-white bg-black flex-shrink-0 me-2 mb-5" style={{ "width": "50%" }} onClick={newPwonClick}></input>
                                                                <input type="button" value="취소" class="btn text-black bg-light flex-shrink-0 me-2 mb-5" style={{ "width": "50%", "border": "0.5px solid" }} onClick={(e) => {
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



                        </div>
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
}


export default MyPage;