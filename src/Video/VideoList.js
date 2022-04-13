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
                  <div className="container" id="home">
                    <Link to={`/view/${p.id}`} className="link">
                      <img className="videoCard_thubmnail" src={p.videoPath} alt="video_thubmnail" />
                      <h6 className="video_title" >{p.title}<br/>{p.date}<br/>
                      </h6>
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