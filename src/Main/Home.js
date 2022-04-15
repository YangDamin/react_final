import {useState,useEffect,React} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import VideoList from '../Video/VideoList';
import './Home.css';
import ReactLoading from "react-loading";
import Loader from "../Video/Loader";
import Nav from '../Common/Nav';

const Home = () => {
  const [target, setTarget] = useState(null);
  const [videoList,setVideoList]= useState([0]);
  const [isLoading,setIsLoading]= useState(false);

  useEffect(() => {
    console.log("비디오 리스트"+videoList);
  }, [videoList]);
  // videoList 상태가 변경시에 실행된다.

  const getMoreItem = async () => {
    setIsLoading(true);
    await new Promise((resolve)=> setTimeout(resolve,600));
    let tempVideoList = [0];
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
  },[]);
  
  return (
      <>
        <Nav/>
        <CssBaseline />
        <Container className="content-container">
          <Box className="video_items"
            sx={{  width:'98%', bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0', 
            borderWidth: "5px",borderColor:'black',borderStyle:'solid',
            borderColor:'black'}}>
       
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


