import React from "react";
import VideoCards from "./VideoCard";
import "./VideoList.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container, { containerClasses } from "@mui/material/Container";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import thumbnail from '../assets/img/thumbnail.png'


const VideoList = (props) => {



  
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
          sx={{ flexGrow: 6 }} >
            
          <Grid container id='grid' >
          <tbody>
            {postList.map((p) => {
              return (
                <tr>
                <Grid item col-xs={4} col-6 col-md-4>
                  <div className="video_text">
                    
                    <Link to={`/post/detail/${p.id}`}>
                      
                      <img className="videoCard_thubmnail" src={thumbnail} alt="video_thubmnail" />
                      <h1>{p.id}</h1>
                      <h6 className="video_title" >{p.title}</h6>
                    </Link>
                    <span className="video_viewcount_">
                      <h9 className="video_viewcount">{p.date}</h9>
                    </span>
                    <div>
                      {/* <h9 className="video_viewcount">{p.viewCnt}</h9> */}
                    </div>
                  </div>
                </Grid>
                </tr>
              );
            })}

        </tbody>
            {/* <Grid item col-xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item col-xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item col-xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item col-xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item col-xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid> */}

          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default VideoList;