import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const FindEmail = () => {
    return (
        <div style={{ "fontFamily": 'Pretendard-Medium' }}>
            {/* <Header /> */}
            <h3 style={{ "fontWeight": "bold", "marginBottom": "2rem", "marginTop": "2rem" }}>이메일 찾기</h3>
            <hr style={{ "height": "2px", "width": "50%", "color": "#000000", "margin": "0 auto" }} />
            <h6 style={{ "marginTop": "2rem" }}>회원가입 시 등록하신 정보로</h6>
            <h6>이메일을 확인할 수 있습니다.</h6>

            <form style={{"paddingBottom":"2rem"}}>
                <div style={{ "width": "500px", "margin": "50px auto", "border": "0.2px solid", "borderColor": "lightgray" }}>
                    <div style={{ "margin": "20px auto" }}>

                        <div class="col">
                            <input type="text" id="find_name" style={{ "marginTop": "2rem", "backgroundColor": "#F2F2F2", "border": "0.5px", "width": "400px", "padding": "10px" }} placeholder="이름을 입력하세요"></input>
                            <input type="text" id="find_phone" style={{ "marginTop": "1rem", "backgroundColor": "#F2F2F2", "border": "0.5px", "width": "400px", "padding": "10px" }} placeholder="휴대폰번호를 입력하세요"></input>

                            <input type="button" value="확인" class="btn text-white bg-black flex-shrink-0 me-2 mt-4 mb-4" style={{ "width": "400px" }} onClick={(e) => {
                                e.preventDefault();
                                const formData = new FormData();

                                formData.append('name', document.getElementById("find_name").value);
                                formData.append('phone', document.getElementById("find_phone").value);

                                axios({
                                    url: "http://localhost:8080/users/findEmail",
                                    method: "post",
                                    data: formData
                                }).then((res) => {
                                    console.log(res.data);
                                    if(res.data.code == 200){
                                        Swal.fire(
                                            '<h5>이메일 찾았습니다!</h5>',
                                            res.data.findemail,
                                            'success'
                                          )
                                    }else{
                                        Swal.fire({
                                            icon: 'error',
                                            text: '이메일을 찾지 못했습니다.'
                                          })
                                    }
                                })
                            }}></input>
                        </div>

                    </div>

                </div>
            </form>
            <hr style={{ "height": "2px", "width": "50%", "color": "#000000", "margin": "0 auto" }} />
            {/* <Footer /> */}

        </div>
    )
}

export default FindEmail;