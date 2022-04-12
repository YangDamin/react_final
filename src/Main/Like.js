// import React, { useState } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';




      
      const MyFeed = () => {
          return (
              <>
                <></>
              <Header></Header>
              <Nav></Nav>
          <CssBaseline />
            <Container className="content-container" >
              <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0',borderStyle:'solid',borderColor:'rgba(153, 153, 153, 1)', height: '100vh' }}>
            <Box sx={{ flexGrow: 1,mt:6 }}>
           
            </Box>
            </Box>
            </Container>
            <Footer></Footer>
          </>
          );
}


export default MyFeed;