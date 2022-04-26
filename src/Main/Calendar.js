import React, { useEffect, useState } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios';
import Swal from 'sweetalert2';
import './Calendar.css'
import Nav from '../Common/Nav';




const Calendar = () => {

  // 추가된 일정 리스트
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    const formData = new FormData();
    // formData.append("id", sessionStorage.getItem("user_id"));
    formData.append("email", sessionStorage.getItem("email"));

    // 사용자의 id를 서버에 post 방식으로 보내서, 사용자가 작성한 일정들을 캘린더에 보여주기
    axios({
      url: "http://54.193.18.159:8080/calendar",
      method: "post",
      data: formData
    }).then((res) => {
      setScheduleList(res.data);
    }).catch((error) => {
      console.log(error)
    })
  }, []);


  // 일정 리스트들을 캘린더에 추가하기 위해, 캘린더 필드로 맞추어 생성해주기
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
      <Nav />
      <CssBaseline />
      <Container className="content-container">
        <Box className="calendar_css" sx={{
          bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0',
          borderWidth: "5px", borderColor: 'black', borderStyle: 'solid',
          borderColor: 'black', padding: "40px"
        }}>
          <div>
            <input type="button" value="일정 추가" class="btn text-white " style={{ "display": "flex", "marginLeft": "auto", "marginBottom": "0.5rem", "backgroundColor": "rgba(255, 118, 118, 1)" }} onClick={(e) => { e.preventDefault(); window.location = '/addCalendar' }} />
          </div>
          <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin, interactionPlugin]} events={data_list} eventClick={function (e) {
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
                // 일정을 삭제한다면, 캘린더의 id를 서버에 delete 방식으로 보내기
                const id = e.event.id;
                axios.delete(`http://54.193.18.159:8080/calendar/${id}`)
                  .then((res) => {
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
                      title: '삭제가 완료되었습니다.'
                    })
                    setTimeout(function () {
                      window.location = '/calendar';
                    }, 1000)
                  }).catch((error) => console.log(error))
              }
            })
          }} />
        </Box>
      </Container>

    </div>
  );
}


export default Calendar;