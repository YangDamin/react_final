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
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';


const View = () => {


  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const result = axios({
      url: `http://localhost:8080/post/detail/${id}`,
      method: 'get'
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setPost(res.data.post);
      setName(res.data.name);
    });
    console.log("##################" + id);
  }, [id]);



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
                <h6>{name} , view : {post.viewCnt}</h6></div>


              <div className="container" id="video">
                <ReactPlayer
                  width='500px'
                  height='300px'
                  controls url={post.videoPath}
                  playing={true}
                />
              </div>
              <div className="container" id="content">
                <tr>
                  <div class="container" >
                    <h4 class="my-3 border-bottom pb-2">
                      {post.content}
                      <br />
                    </h4>
                  </div>
                </tr>
                

              </div>
            </div>
            
          </Box>
        </Box>
        <button type="button" class="btn btn-primary" onClick={() => {
                  window.location = `/post/update/${post.id}`
                }} >수정</button>
                <button type="button" class="btn btn-primary" onClick={() => {
                  window.location = `/post/delete/${post.id}`
                }} >삭제</button>

                <br/>

                <Link to="/"> <button type="button" class="btn btn-primary" >목록</button>
                </Link>
      </Container >
    </>
  )
}

export default View;