import React,{useState,useEffect,useCallback} from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import VideoList from '../Video/VideoList';
import './Home.css';
import ReactLoading from "react-loading";
import Loader from "../Video/Loader";
import Nav from '../Common/Nav';
import axios from 'axios';
import { NoStyleItemContext } from 'antd/lib/form/context';
import VideoImageThumbnail from 'react-video-thumbnail-image';
import { Link } from 'react-router-dom';
import "../Video/VideoList.css";

const Home = () => {
  const [videoList,setVideoList]= useState([]);
  const [result,setResult] = useState([]);
  const [isLoading,setIsLoading]= useState(true);
  const [notFirstTime,setNotFirstTime]= useState(false);

const getFetchData = async()=>{
  await axios({
    url: 'http://localhost:8080/posts',
    method: 'get'
  }).then((res) => {
    let response = res.data;
    setResult(response.slice(0,6));
    response = response.slice(6);
    setVideoList(response);
    setIsLoading(false);
    setNotFirstTime(true);
  })
  
};
const _infiniteScroll = useCallback(
  () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

  let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

  let clientHeihgt = document.documentElement.clientHeight;
  scrollHeight-=100;
  if(scrollTop + clientHeihgt >= scrollHeight && isLoading === false && videoList.length>0){
    fetchMoreData();
  }
  },
  [isLoading],
);


  useEffect(()=> {
    getFetchData();
  },[]);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);
  // videoList 상태가 변경시에 실행된다.

  const fetchMoreData = async() => {
    setIsLoading(true);
    await new Promise((resolve)=> setTimeout(resolve,600));
    setResult(result.concat(videoList.slice(0,6)));
    setVideoList(videoList.slice(6));
    setIsLoading(false);
  }

  

  
  
  return (
      <>
        <Nav/>
        <Container className="video_content">
        <Box className="video_item"
          sx={{ 
            // flexGrow: 6 ,
            width:'98%',
            bgcolor: 'rgba(238, 238, 238, 1)',
            borderRadius:'40px 40px 0 0', 
            borderWidth: "5px",
            borderColor:'black',
            borderStyle:'solid',
            borderColor:'black'}}>
          <Grid container id='grid' >

            {result.map((p,index) =>{
              return (
                <Grid item col-xs={4} col-6 col-md-4>
                  <Grid item col-xs={4}>
                    <div id="videoListBox">
                      <Link to={`/view/${p.id}`} className="link">
                        {/* <img className="videoCard_thubmnail" src={p.video_path} alt="video_thubmnail" /> */}
                       
                        {/* 영상에서 썸네일 추출 */}
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
          <span>
            {(isLoading && notFirstTime) ? (<Loader/>) : ("")}
            </span>
        </Container>
       
      </>
    );
}

export default Home;


