// import React, { useState } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(14),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Calendar = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <CssBaseline />
      <Container className="content-container" >
        <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '130vh' }}>
          <Box sx={{ flexGrow: 1, mt: 6, pl:5, pr:5 }}>
            <div class="mypage-body">
              <div class="body-wrapper box">
                <div class="body-info-container">
                  <div class="calendar-wrapper">
                    <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
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