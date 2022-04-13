// import React, { useState } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Nav from '../Common/Nav';
import Payment from './Payment';


      
      const Buy = () => {
          return (
              <>
            <Nav/>
          <CssBaseline />
            <Container className="content-container" >
            <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0', 
			   borderWidth: "5px",borderColor:'black',borderStyle:'solid',
			   borderColor:'black', height: '100vh',overflow:'overlay' }}>
            <Box sx={{ flexGrow: 1,mt:6 }}>
              <div></div>
              <div>
                 <Payment />   
              </div>
            </Box>
            </Box>
            </Container>
          </>
          );
}


export default Buy;