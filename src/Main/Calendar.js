// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios';
import Swal from 'sweetalert2';
import './Calendar.css'




const Calendar = () => {

  // 추가된 일정

  const [scheduleList, setScheduleList] = useState([]);
  useEffect(() => {
    const formData = new FormData();
    formData.append("email", sessionStorage.getItem("email"));
    axios({
      url: "http://localhost:8080/calendar",
      method: "post",
      data: formData
    }).then((res) => {
      setScheduleList(res.data);
    }).catch((error) => {
      console.log(error)
    })
  }, []);


  const data_list = scheduleList.map((val) => {
    return {
      title: val.title,
      start: val.start,
      end: val.end,
      id: val.id
    };
  });

  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <CssBaseline />
      <Container className="content-container" style={{ "fontFamily": "Pretendard-Medium" }}>
      <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0', 
			   borderWidth: "5px",borderColor:'black',borderStyle:'solid',
			   borderColor:'black', height: '100vh', overflow:'overlay' }}>
          <Container style={{"height":"90%", "width":"90%", "marginTop":"3rem"}}>
            <div class="mypage-body">
              <div class="body-wrapper box">
                <div class="body-info-container">
                  <div class="calendar-wrapper">
                    <div>
                      <input type="button" value="일정 추가" class="btn text-white " style={{ "display": "flex", "marginLeft": "auto", "marginBottom": "0.5rem", "backgroundColor": "rgba(49, 141, 251, 1)" }} onClick={(e) => { e.preventDefault(); window.location = '/addCalendar' }} />
                    </div>
                    <FullCalendar  defaultView="dayGridMonth" plugins={[dayGridPlugin, interactionPlugin]} events={data_list} eventClick={function (e) {
                      Swal.fire({
                        title: '',
                        text: "일정 삭제하시겠습니까?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {

                          const formData = new FormData();
                          formData.append("id", e.event.id);

                          axios({
                            url: "http://localhost:8080/calendar",
                            method: "delete",
                            data: formData
                          }).then((res) => {
                            const Toast = Swal.mixin({
                              toast: true,
                              position: 'middle-',
                              showConfirmButton: false,
                              timer:1000,
                              didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                              })
                            Toast.fire({
                              icon: 'success',
                              title: '삭제가 완료되었습니다.'
                              })
                            setTimeout(function () {
                              window.location = '/calendar';
                            }, 1000)
                          })
                        }
                      })
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Box>
      </Container>
      <Footer></Footer>
    </div>
  );
}


export default Calendar;