import React from "react";
import VideoCards from "./VideoCard";
import "./VideoList.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container, { containerClasses } from "@mui/material/Container";

const VideoList = () => {
  return (
    <>
      <Container className = "video_content">
      <Box classNAme="item" sx={{ flexGrow: 1 ,mt: 8,px:12 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
          <Grid item xs={4}>
            <VideoCards
              title="❤️ 일상 브이로그 | 코딩공부,후추랑 산책까지"
              views="12.3M Views "
              timestamp=" 2022.02.13"
              image="../assets/img/thumbnail.png"
            />
          </Grid>
        </Grid>
      </Box>
      </Container>
    </>
  );
};

export default VideoList;