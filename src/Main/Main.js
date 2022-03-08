import React from 'react';
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Body from '../Common/Body';
import Footer from '../Common/Footer';
import Content from '../Common/Content';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <Content></Content>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default Main;
