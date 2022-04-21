// VideoList는 게시물들을 모두 보여줍니다.


import React from "react";
import "./VideoList.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


const VideoList = () => {

  const [postList, setPostList] = useState([]);   // postList 선언

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_SRPING}/posts`,
      method: 'get'               // get 방식으로 서버에서 게시물들을 받아옴
    }).then((res) => {
      setPostList(res.data);
    });
  }, []); // 빈 리스트 이므로, 한 번만 수행

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
                        {/* <VideoImageThumbnail
                          videoUrl={p.videoPath}
                          className="videoCard_thubmnail"/> */}
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

export default VideoList;