import React from "react";
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Nav from '../Common/Nav';
import Container from "@mui/material/Container";
import './View.css';
import axios from 'axios';
import { useParams } from "react-router-dom";



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
      setPost(res.data.post);
      setName(res.data.name);
    });
    console.log("##################" + id);
  }, [id]);

  let content = post.content;

  return (
    <>
      <Nav></Nav>
      <CssBaseline />
      <Container className="content-container">
        <Box className="viewBox" sx={{
          width: '98%', bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0',
          borderWidth: "5px", borderColor: 'black', borderStyle: 'solid',
          borderColor: 'black', padding: "40px"
        }}>

          <div className='form-wrapper' id="view" style={{ "margin": "2rem 10rem" }}>
            <a href="/" id="back"><i class="bi bi-arrow-left"></i></a>
            <div id="content-title">
              <span>{post.title}</span>
            </div>
            <div id="content-id">
              <span style={{"fontWeight":"bold"}}><i class="bi bi-person-hearts"></i> {name}</span>
              <span style={{"color":"gray"}}>{post.date}</span>
            </div>


            <div id="video">
              <ReactPlayer
                width='804px'
                height='452px'
                controls url={post.videoPath}
                playing={true}
              />
            </div>
            <span style={{"display":"flex", "color":"gray","marginTop":"1rem"}}><i class="bi bi-eye-fill"></i>&nbsp;{post.viewCnt}</span>
            <hr/>

            <div className="container" id="content">
                  {(content || '').split("<br>").map((line) => {
                    return (
                        <span class="my-3 pb-2" style={{"fontSize":"18px"}}>
                          {line}
                          <br />
                        </span>
                    )
                  })}
            </div>
            <button type="button" class="btn btn-primary" onClick={() => {
              window.location = `/post/update/${post.id}`
            }} >수정</button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-primary" onClick={() => {
              window.location = `/post/delete/${post.id}`
            }} >삭제</button>

          </div>

        </Box>
      </Container >
    </>
  )
}

export default View;
