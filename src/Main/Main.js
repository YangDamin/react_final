import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from '../Common/Footer';
import Nav from '../Common/Nav';
import Header from '../Common/Header';
import MyFeed from './MyFeed';
import Like from './Like';
import MyPage from './MyPage';
import Calendar from './Calendar';
import Body from './Body';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            {/* <BrowserRouter> */}
                {/* <Routes> */}
                    {/* <Route path="/" element={<Main></Main>}></Route> */}
                    {/* <Route path="/" element={<Main />}></Route> */}
                    {/* <Route path="/myfeed" element={<MyFeed/>}></Route> */}
                    {/* <Route path="/like" element={<Like />}></Route> */}
                    {/* <Route path="/mypage" element={<MyPage />}></Route> */}
                    {/* <Route path="/calendar" element={<Calendar />}></Route> */}
                    {/* <Route path="/logout" element={<LogOut />}></Route> */}
                {/* </Routes> */}
            {/* </BrowserRouter> */}
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default Main;
