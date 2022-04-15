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
                    <div id="videoListBox">
                      <Link to={`/view/${p.id}`} className="link">
                        {/* <img className="videoCard_thubmnail" src={p.video_path} alt="video_thubmnail" /> */}

                        <VideoImageThumbnail
                          videoUrl={p.videoPath}
                          className="videoCard_thubmnail"/>
                       
                        <div className="video_title">
                          {p.title}
                        </div>
                        <div className="video_date">
                          {p.userId}  ·  {p.date}
                        </div>
                        <div className="video_date">
                          조회수  {p.viewCnt}회
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