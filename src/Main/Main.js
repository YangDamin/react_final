import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from '../Common/Footer';
import Body from './Body';
import Nav from '../Common/Nav';
import Header from '../Common/Header';
import MyFeed from './MyFeed';
import Like from './Like';
import MyPage from './MyPage';
import Calendar from './Calendar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default Main;
