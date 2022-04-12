import React from "react";
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import Container from "@mui/material/Container";
import './View.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const View = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(14),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return(
        <>
         <Header></Header>
            <Nav></Nav>
            <CssBaseline />
            <Container className="content-container">
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div className='form-wrapper'id="view" style={{"marginBottom":"30px"}}>
                            <div className="container" id="video">
                            <ReactPlayer 
                            width='500px'
                            height='300px'
                            controls url='https://viary.s3.us-west-1.amazonaws.com/upload/KakaoTalk_20220407_134344348.mp4' />
                            </div>
                            <div className="container" id ="content">
                              
                 
                            </div>

    
                        </div>
                    </Box>
                </Box>
            </Container >
            <Footer></Footer>

        </>
    )
}

export default View;