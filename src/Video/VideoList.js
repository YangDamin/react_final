import React from "react";
import VideoCards from "./VideoCard";
import "./VideoList.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container, { containerClasses } from "@mui/material/Container";

const VideoList = () => {
  return (
    <>
      {/* <Container className = "video_content"> */}
      <Box className="video_item" sx={{ flexGrow: 6,py:8,px:6}} justifyContent-center alignItems-center display-flex>
        <Grid container spacing={4} alignItems-center>
          <Grid item col-xs={4} col-6 col-md-4>
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
          </Grid>
          <Grid item col-xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default VideoList;