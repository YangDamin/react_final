// import React, { useState } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import './Write.css';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(14),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));


const Write = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <CssBaseline />
            <Container className="content-container" >
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>

                        <div className='container'>
                            <div>
                            </div>
                            <div>
                                <div class="form-group">
                                    <label for="content">다이어리 작성</label>
                                    <textarea class="form-control" rows="5" id="content"
                                        name="content" placeholder="내용 작성"></textarea>
                                </div>

                                <button type="submit" className="button">등록</button>
                            </div>


                        </div>
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
}


export default Write;