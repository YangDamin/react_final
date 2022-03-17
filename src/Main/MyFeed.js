// import React, { useState } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import { GlobalStyles } from '@mui/styled-engine';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import TodoTemplate from '../Todo/TodoTemplates';
import TodoHead from '../Todo/TodoHead';
import TodoList from '../Todo/TodoList';
import TodoCreate from '../Todo/TodoCreate';
import { TodoProvider } from '../Todo/TodoContext';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(14),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));


const MyFeed = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>

            <CssBaseline />
            <Container className="content-container" >
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
              
                       <TodoProvider>
                            {/* <GlobalStyles /> */}
                            {/* <Todo>
                            <div>TO-DO List</div>
                        </Todo> */}
                            <TodoTemplate>
                                <TodoHead />
                                <TodoList />
                                <TodoCreate />
                            </TodoTemplate>
                        </TodoProvider>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
}


export default MyFeed;