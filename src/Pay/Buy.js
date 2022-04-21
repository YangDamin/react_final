import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Nav from '../Common/Nav';
import Payment from './Payment';
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import buy from './buy.jpg'

const Buy = () => {
  return (
    <>
      <Nav />
      <CssBaseline />
      <Container className="content-container" >
        <Box sx={{
          bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0',
          borderWidth: "5px", borderColor: 'black', borderStyle: 'solid',
          borderColor: 'black', height: '100vh', overflow: 'overlay'
        }}>
          <Box sx={{ flexGrow: 1, mt: 6 }}>
            <div className="buy-title">
              <h3 style={{ "fontWeight": "bold", "marginTop": "30px" }}>
                <FaBook />&nbsp; 나의 브이로그 책으로 발간하기&nbsp;<FaBook /></h3></div>
            <div className="image">
              <img src={buy} style={{
                "width": "350px", "margin-top": "20px",
                "margin-bottom": "20px", "box-shadow": "6px 6px 6px #969696"
              }} /></div>
            <div className="buy-content" style={{
              "marginTop": "10px",
              "backgroundColor": "white",
              "borderRadius": "5px 5px 5px 5px",
              "height": "50px",
              "textAlign": "center",
              "overFlow": "auto",
              "width": "400px",
              "display": "inline-block"
            }}>
              나만의 브이로그 다이어리를 책으로 발간하여 간직하세염!!
            </div>
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