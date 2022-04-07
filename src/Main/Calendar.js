// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Swall from 'sweetalert2';
import Swal from 'sweetalert2';





const Calendar = () => {

  // 추가된 일정

  const [scheduleList, setScheduleList] = useState([]);
  useEffect( () => {
    const formData = new FormData();
    formData.append("email", sessionStorage.getItem("email"));
    axios({
      url: "http://localhost:8080/calendar",
      method: "post",
      data: formData
    }).then( (res) => {
      console.log("스프링 데이터:"+res.data);
      setScheduleList(res.data);
    })
  }, []);

  console.log("리스트 밖에서 출력:" + scheduleList);


  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <CssBaseline />
      <Container className="content-container" style={{ "fontFamily": "Pretendard-Medium" }}>
        <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '130vh' }}>
          <Box sx={{ flexGrow: 1, mt: 6, pl: 5, pr: 5 }}>
            <div class="mypage-body">
              <div class="body-wrapper box">
                <div class="body-info-container">
                  <div class="calendar-wrapper">
                    <div>
                      <input type="button" value="일정 추가" class="btn text-white " style={{ "display": "flex", "marginLeft": "auto", "marginBottom": "0.5rem", "backgroundColor": "rgba(49, 141, 251, 1)" }} onClick={(e)=>{e.preventDefault(); window.location = '/addCalendar'}} />
                    </div>
                    <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin, interactionPlugin]} events={[
                      { title: "하이", start: "2022-04-05", end: "2022-04-05" }
                    ]} />

                    
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
      <Footer></Footer>
    </div>
  );
}


export default Calendar;