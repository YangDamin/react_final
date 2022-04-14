import React from "react";
import "./VideoList.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container, { containerClasses } from "@mui/material/Container";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import thumbnail from '../assets/img/thumbnail.png'
import VideoImageThumbnail from 'react-video-thumbnail-image';
import styled from "styled-components";


const VideoList = () => {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/posts',
      method: 'get'
    }).then((res) => {
      console.log(res.data);
      setPostList(res.data);
    });
  }, []); // deps

  // const VideoImageThumbnail = styled.div`
  //   width: 300px;
  //   height: 300px;
  // `;



  return (
    <>
      <Container className="video_content">
        <Box className="video_item"
          sx={{ flexGrow: 6 }}>
          <Grid container id='grid' >
            {postList.map((p) => {
              return (

                <Grid item col-xs={4} col-6 col-md-4>
                  <Grid item col-xs={4}>
                    <div className="container" id="home">
                      <Link to={`/view/${p.id}`} className="link">
                        {/* <img className="videoCard_thubmnail" src={p.video_path} alt="video_thubmnail" /> */}
                        <VideoImageThumbnail
                        videoUrl="https://viary.s3.us-west-1.amazonaws.com/upload/KakaoTalk_20220412_175535181.mp4"
                        thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                        height={"270"}
                        width={"270"}
                        alt="video-thumbnail"
                       >
                       </VideoImageThumbnail>
                        <div className="video_title">
                          {p.title}
                        </div>
                        <div className="video_date">
                          {p.date}
                        </div>
                      </Link>
                    </div>
                  </Grid>
                </Grid>

              );
            })}

          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default VideoList;