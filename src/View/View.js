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
import { Link, useParams } from "react-router-dom";
import { Card, Row, Table } from "reactstrap";

const View = () => {


    const { postid } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        const result = axios({
            url: `http://localhost:8080/post/detail/${postid}`,
            method: 'get'
        });
        result.then((res) => {
            console.log(res);
            console.log(res.data);
            setPost(res.data);
        });
        console.log("##################" + postid);
    }, [postid]);


    return (
        <>
            <Nav></Nav>
            <CssBaseline />
            <Container className="content-container">
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div className='form-wrapper' id="view" style={{ "marginBottom": "30px" }}>
                            <div class="container" id="content-title">
                                <h2>{post.title}</h2></div>
                            <div class="container" id="content-id">
                                <h6>{post.id}</h6></div>

                            <div className="container" id="video">
                                <ReactPlayer
                                    width='500px'
                                    height='300px'
                                    controls url='https://viary.s3.us-west-1.amazonaws.com/upload/KakaoTalk_20220407_134344348.mp4' />
                            </div>
                            <div className="container" id="content">

                                <h2>{post.content}</h2>
                            </div>

                            <Link to="/"> <button type="button" class="btn btn-primary" >목록</button>
                            </Link>

                        </div>
                    </Box>
                </Box>
            </Container >
        </>
    )
}

export default View;