import { useState, useEffect } from 'react';
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
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(14),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));



const Write = () => {

    const[writeContent, setWriteContent] = useState({
        title: '',
        content:''
    })

    const[viewContent, setViewContent] = useState([]);

    const getValue = e =>{
        const {name, value} = e.target;
        setWriteContent({
            ...writeContent, [name]: value
        })
        console.log(writeContent);
    }
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <CssBaseline />
            <Container className="content-container">
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div className='form-wrapper'>
                        <form method="post" enctype="multipart/form-data">
 <input type="file" name="file" multiple/><br/>
 <input type="submit" value="업로드"/>
</form>
                        {viewContent.map(element =>
                            <div>
                                <h2>{element.title}</h2>
                                <div>
                                    {element.content}
                                </div>
                            </div>)}
                            <input className="title-input" type='text' placeholder='제목'
                             onChange={getValue} name='title'/>
                            <CKEditor
                                editor={ClassicEditor}
                                styled={{'width':'80%'}}
                                data=""
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                    setWriteContent({
                                        ...writeContent, content: data
                                    })
                                    console.log(writeContent);
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
                        </div>
                        <button className="submit-button"
                        onClick={() => {
                            setViewContent(viewContent.concat({...writeContent}));
                        }}>입력</button>

                    </Box>
                </Box>
            </Container >
            <Footer></Footer>
        </>
    );
}


export default Write;