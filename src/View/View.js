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
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';




const View = () => {

  // const { no } = match.params;
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [name, setName] = useState('');
  const [userId, setUserId] = useState();



  useEffect(() => {
    const result = axios({
      url: `http://localhost:8080/post/detail/${id}`,
      method: 'get'
    });
    result.then((res) => {
      setPost(res.data.post);
      setName(res.data.name);
      setUserId(res.data.post.user.id);
    });
    console.log("##################" + id);
  }, [id]);

  let content = post.content;
  // console.log("post보기:" + post.user.id);
  console.log("userId보기:" + sessionStorage.getItem("user_id"));

  const deletePost = () => {
    axios({
      url: `http://localhost:8080/post/delete/${id}`,
      method: 'delete',
    }).then(function (res) {
      
      setTimeout(function () {
        window.location = '/';
      }, 1000)

    })
  }


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
              <span style={{ "fontWeight": "bold" }}><i class="bi bi-person-hearts"></i> {name}</span>
              <span style={{ "color": "gray" }}>{post.date}</span>
            </div>


            <div id="video">
              <ReactPlayer
                width='804px'
                height='452px'
                controls url={post.videoPath}
                playing={true}
              />
            </div>
            <span style={{ "display": "flex", "color": "gray", "marginTop": "1rem" }}><i class="bi bi-eye-fill"></i>&nbsp;{post.viewCnt}</span>
            <hr />

            <div className="container" id="content">
              {(content || '').split("<br>").map((line) => {
                return (
                  <span class="my-3 pb-2" style={{ "fontSize": "18px" }}>
                    {line}
                    <br />
                  </span>
                )
              })}
            </div>

            {sessionStorage.getItem("user_id") == userId ?
              <div style={{"marginTop":"2rem"}}>
                <button type="button" class="btn text-white flex-shrink-0 mt-3" style={{"margin":"0 1rem 0 0" ,"backgroundColor":"rgba(49, 120, 221, 1)"}} onClick={() => {
                  window.location = `/post/update/${post.id}`
                }} >수정</button>
                <button type="button" class="btn text-white flex-shrink-0 mt-3" style={{"margin":"0 3.5rem 0 0" ,"backgroundColor":"rgba(49, 120, 221, 1)"}} onClick={() => {
                  Swal.fire({
                    title: '',
                    text: "게시물 삭제하시겠습니까?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if(result.isConfirmed){
                    axios.delete(`http://localhost:8080/post/delete/${id}`)
                      .then((res) => {
                          Swal.fire(
                            '',
                            '삭제 완료되었습니다.',
                            'success'
                          )
                        setTimeout(function(){
                            window.location = '/';
                        },2000)
                      })
                  }
                })

                }} >삭제</button>
              </div>
              : null
            }


          </div>

        </Box>

      </Container >
    </>
  )
}

export default View;