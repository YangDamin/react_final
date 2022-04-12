import { useState } from 'react';
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Write.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import Swal from 'sweetalert2';
import Server from '../S3/Server';




const Write = () => {


    const [writeContent, setWriteContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);

    const getValue = e => {
        const { name, value } = e.target;
        setWriteContent({
            ...writeContent, [name]: value
        })
    }
    return (
        <>
            
            <CssBaseline />
            <Container className="content-container">
            <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)',borderRadius:'40px 40px 0 0', 
			   borderWidth: "5px",borderColor:'black',borderStyle:'solid',
			   borderColor:'black', height: '100vh',overflow:'overlay' }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div className='form-wrapper' id="write" style={{"marginBottom":"30px"}}>
                            <Server/>
                            <input className="title-input" type='text' placeholder='제목'
                                onChange={getValue} name='title' />
                            <CKEditor
                                editor={ClassicEditor}
                                styled={{ 'width': '80%' }}
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
                            onClick={(e) => {
                                e.preventDefault();

                                let today = new Date();
                                let date = today.toLocaleDateString();      // 현재 날짜

                                setViewContent(viewContent.concat({ ...writeContent }));

                                const formData = new FormData();
                                formData.append("title", writeContent.title);
                                formData.append("content", writeContent.content);
                                formData.append("date", date);
                                formData.append("userEmail", sessionStorage.getItem("email"));
                                formData.append("videoPath", sessionStorage.getItem("videoPath"));
                                // formData.append("filePath", sessionStorage.getItem("filePath"));

                                axios({
                                    url: "http://localhost:8080/post/write",
                                    method: "post",
                                    data: formData
                                }).then( (res) => {
                                    console.log(res.data);

                                    Swal.fire(
                                        '',
                                        '업로드 완료!',
                                        'success'
                                      )
                                    setTimeout(function(){
                                        window.location = '/view';
                                    },2000)

                                }).catch( (error) => {
                                    console.log(error);
                                })


                            }}>업로드</button>
                    </Box>
                </Box>
            </Container >
          



            
        </>
    );
}


export default Write;