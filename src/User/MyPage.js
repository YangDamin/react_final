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




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(14),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));


const MyPage = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <CssBaseline />
            <Container className="content-container" >
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div className="container" 
                            style={{
                                'width': '100%', 'height': '30%', 'margin': 'auto',
                                'margin': 'center', 'marginTop': '30px',  'fontFamily':'LeferiPoint-WhiteA'
                            }}>
                            <div className="mb-1 input-group flex-nowrap "
                                style={{
                                    'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center', 
                                    }}>
                                <span className="input-group-text ">이름:</span>
                                <li className="form-control">{sessionStorage.getItem('name')} </li> </div>
                            <div className="mb-1 input-group flex-nowrap "
                                style={{
                                    'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                                   }}>
                                <span className="input-group-text ">이메일:</span>
                                <li className="form-control">{sessionStorage.getItem('email')} </li>
                            </div>
                            <div className="mb-1 input-group flex-nowrap "
                                style={{
                                    'width': '100%', 'height': '30%', 'margin': 'auto', 'margin': 'center',
                                    }}>
                                <span className="input-group-text ">핸드폰 번호: </span>
                                <li className="form-control">{sessionStorage.getItem('phoneNum')}</li> </div>
                        </div>
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
}


export default MyPage;