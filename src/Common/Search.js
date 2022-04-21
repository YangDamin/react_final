import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Nav from '../Common/Nav';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const Search = () => {
  const { word } = useParams();
  // useParams = word 값이 들어감
  const [videoList, setVideoList] = useState([]);


  useEffect(() => {
    const result = axios({
      url: `http://54.193.18.159:8080/search/${word}`,
      method: 'get'
    });
    result.then((res) => {
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
                <Grid item col-xs={4} col-6 col-md-4>
                  <Grid item col-xs={4}>
                    <div id="videoListBox">
                      <Link to={`/post/detail/${p.id}`} className="link">
                        {/* <VideoImageThumbnail
                          videoUrl={p.videoPath}
                          className="videoCard_thubmnail" /> */}
                        <img className="videoCard_thubmnail" src={p.videothumbnail} alt="video_thubmnail" />


                        <div className="video_title">
                          {p.title}
                        </div>
                        <div className="video_date">
                          {p.user.name}  ·  {p.date}
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

export default Search;