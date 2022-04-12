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

<<<<<<< HEAD

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



=======

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



>>>>>>> 1dd66331cf0823819fdd2f599b1cd3c37e2a4071
  return (
    <>
      <Container className="video_content">
        <Box className="video_item"
<<<<<<< HEAD
          sx={{ flexGrow: 6 }} >
            
          <Grid container id='grid' >
          <tbody>
=======
          sx={{ flexGrow: 6 }}>
          <Grid container id='grid' >
>>>>>>> 1dd66331cf0823819fdd2f599b1cd3c37e2a4071
            {postList.map((p) => {
              return (
                <tr>
                <Grid item col-xs={4} col-6 col-md-4>
<<<<<<< HEAD
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
=======
                <Grid item col-xs={4}>
                  <div className="container" id="home">
                    <Link to={`/post/detail/`} className="link">
                      <img className="videoCard_thubmnail" src={thumbnail} alt="video_thubmnail" />
                      <h6 className="video_title" >{p.title}<br/>{p.date}<br/>
                      {/* {p.viewCnt} */}
                      </h6>
                    </Link>
                    {/* <span className="view-count">{p.date}<br>{p.viewCnt}</br></span> */}
                    </div>
                </Grid>
>>>>>>> 1dd66331cf0823819fdd2f599b1cd3c37e2a4071
                </Grid>
                </tr>
              );
            })}

<<<<<<< HEAD
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
=======
          </Grid>
>>>>>>> 1dd66331cf0823819fdd2f599b1cd3c37e2a4071
        </Box>
      </Container>
    </>
  );
};

export default VideoList;