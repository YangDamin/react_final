import {useState,useEffect,React} from 'react';
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

const Home = () => {
  const [target, setTarget] = useState(null);
  const [videoList,setVideoList]= useState([1]);
  const [isLoading,setIsLoading]= useState(false);

  useEffect(() => {
    console.log(videoList);
  }, [videoList]);
  // videoList 상태가 변경시에 실행된다.

  const getMoreItem = async () => {
    setIsLoading(true);
    await new Promise((resolve)=> setTimeout(resolve,600));
    let tempVideoList = [1];
    setVideoList((videoList)=> videoList.concat(tempVideoList));
    setIsLoading(false); 
  }

  const onIntersect = async ([entry],observer) => {
    if (entry.isIntersecting && !isLoading){
      observer.unobserve(entry.target); // 타겟 관찰을 종료
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect,{
        threshold:1,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  },[target]);
  
  return (
      <>

        <CssBaseline />
        <Container className="content-container">
          <Box className="video_items"
            sx={{
              display: 'inline-block',
              bgcolor: "rgba(238, 238, 238, 1)",
              borderRadius: "40px 40px 0 0",
              borderWidth: "6px",
              borderStyle: "solid",
              borderColor: "black",
              textAlign:'center',
            }}
            
            // col-6
            // col-sm-6
            // col-md-4
            // col-lg-4
            // col-xl-4
            // col-xxl-4
          >
            {videoList.map((item,index) =>(
              <VideoList></VideoList>
            ))}
            {isLoading ? (<Loader/>) : ("")}
            <div ref={setTarget}></div>
          </Box>
        </Container>
      </>
    );
}

export default Home;

