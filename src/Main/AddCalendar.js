
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Nav from '../Common/Nav';
import axios from 'axios';
import Swal from 'sweetalert2';





const AddCalendar = () => {
    return (
        <div>

            <Nav />
            <CssBaseline />
            <Container className="content-container">
                <Box className="calendar_css" sx={{ padding: "40px", bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    
                    <h3 style={{ "fontWeight": "bold", "marginBottom": "2rem", "marginTop": "2rem" }}>일정 추가하기</h3>
                    <form>
                        <div style={{ "width": "80%", "margin": "50px auto" }}>
                            <div>
                                <span style={{ "display": "flex" }}>일정 내용</span>
                                <input class="form-control mb-3" type="text" id="title" />
                                <span style={{ "display": "flex" }}>시작 날짜</span>
                                <input class="form-control mb-3" type="date" id="start" />
                                <span style={{ "display": "flex" }}>종료 날짜</span>
                                <input class="form-control mb-3" type="date" id="end" />

                                <div style={{ "display": "flex" }}>
                                    <input type="button" value="추가" class="btn text-white flex-shrink-0 me-2 mb-5 mt-3" style={{ "width": "50%", "backgroundColor": "rgba(255, 118, 118, 1)" }} onClick={(e) => {
                                        e.preventDefault();
                                        
                                        // 입력된 값이 없으면, 일정 추가 안되게 막기
                                        if (document.getElementById("title").value == '') {
                                            Swal.fire({
                                                icon: 'error',
                                                text: '일정을 입력해주세요.'
                                            })
                                        } else if (document.getElementById("start").value == '' || document.getElementById("end").value == '') {
                                            Swal.fire({
                                                icon: 'error',
                                                text: '날짜를 선택해주세요.'
                                            })
                                        } else {
                                            // 입력된 값들을 서버에 전송
                                            const formData = new FormData();
                                            formData.append("id", sessionStorage.getItem("user_id"));
                                            formData.append("email", sessionStorage.getItem("email"));
                                            formData.append("title", document.getElementById("title").value);
                                            formData.append("start", document.getElementById("start").value);
                                            formData.append("end", document.getElementById("end").value);

                                            // post방식으로 데이터 보내기
                                            axios({
                                                url: "http://54.193.18.159:8080/addCalendar",
                                                method: "post",
                                                data: formData
                                            }).then((res) => {

                                                const Toast = Swal.mixin({
                                                    toast: true,
                                                    position: 'middle-',
                                                    showConfirmButton: false,
                                                    timer: 1000,
                                                    didOpen: (toast) => {
                                                        toast.addEventListener('mouseenter', Swal.stopTimer)
                                                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                                                    }
                                                })
                                                Toast.fire({
                                                    icon: 'success',
                                                    title: '일정이 추가되었습니다.'
                                                })
                                                setTimeout(function () {
                                                    window.location = '/calendar';
                                                }, 1000)


                                            }).catch((error) => {
                                                console.log(error);
                                            })
                                        }

                                    }}></input>
                                    <input type="button" value="취소" class="btn text-black bg-light flex-shrink-0 me-2 mb-5 mt-3" style={{ "width": "50%", "border": "0.5px solid" }} onClick={(e) => {
                                        window.location = "/calendar"
                                    }}></input>
                                </div>
                            </div>

                        </div>
                    </form>
                </Box>
            </Container>

        </div>
    );
}


export default AddCalendar;