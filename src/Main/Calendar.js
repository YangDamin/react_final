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
import Swal from 'sweetalert2';





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
        <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '130vh' }}>
          <Box sx={{ flexGrow: 1, mt: 6, pl: 5, pr: 5 }}>
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
                            Swal.fire(
                              '',
                              '삭제 완료되었습니다!',
                              'success'
                            )
                            setTimeout(function () {
                              window.location = '/calendar';
                            }, 2000)
                          })
                        }
                      })
                    }} />
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