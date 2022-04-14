import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import VideoImageThumbnail from 'react-video-thumbnail-image';


const Search = () => {
  const { word } = useParams();
  // useParams = word 값이 들어감
  const [videoList, setVideoList] = useState([]);


  useEffect(() => {
    const result = axios({
      url: `http://localhost:8080/search/${word}`,
      method: 'get'
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setVideoList(res.data);
    });
    console.log("##################" + word);
  }, [word]);
  //word 값이 변경 되었을 때 useEffect 실행

  return (
    <>
      <Nav></Nav>
      <CssBaseline />
      <Container className="content-container">
        <Box className="video_items"
          sx={{
            width: '98%',
            display: 'inline-block',
            bgcolor: "rgba(238, 238, 238, 1)",
            borderRadius: "40px 40px 0 0",
            borderWidth: "6px",
            borderStyle: "solid",
            borderColor: "black",
            textAlign: 'center',
          }}
        >
          <Grid container id='grid' >
            {videoList.map((p) => {
              return (
                <tr>
                  <Grid item col-xs={4} col-6 col-md-4>
                    <Grid item col-xs={4}>
                      <div className="container" id="home">
                        <Link to={`/view/${p.id}`} className="link">
                          <VideoImageThumbnail
                            videoUrl={p.videoPath}
                            className="videoCard_thubmnail"/>
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
                </tr>
              );
            })}

          </Grid>
        </Box>
      </Container>

    </>
  );
};

export default Search;