import React from 'react';
import Footer from '../Common/Footer';
import Nav from '../Common/Nav';
import Header from '../Common/Header';
import Body from './Body';


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
