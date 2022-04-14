import { useState, useEffect } from 'react';
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
import Nav from '../Common/Nav';
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';

const Write = () => {



    const [post, setPost] = useState([]);


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


    const [selectedFile, setSelectedFile] = useState([]);

    const [fileName, setFileName] = useState('');


    const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
    // const RESION = 'us-east-2';
    // const S3_BUCKET = 's3-bucket-react-file-upload-test-5jo';
    const RESION = 'us-west-1';
    const S3_BUCKET = 'viary';


    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: RESION,
    })



    const handleFileInput = e => {
        const file = e.target.files[0];



        const randomName = Math.random().toString(36).substr(2, 11);
        const imgName = randomName + "_" + file.name
        console.log(imgName);
        const fileExt = file.name.split('.').pop();  //파일익스텐션값 가져오기
        // if(file.type !== 'image/jpeg' || fileExt !=='jpg'){ //파일타입과 익스텐션이 jpg인것만
        //   alert('jpg 파일만 업로드 가능합니다.');
        //   return;
        // }
        const s3Url = "https://viary.s3.us-west-1.amazonaws.com/upload/";
        const videoPath = s3Url + file.name;

        console.log("주소" + videoPath);
        setFileName(videoPath);
        setSelectedFile(e.target.files[0]);
    }




    const uploadFile = file => { //챕터4!의 사진을 업로드 하는 코드
        const params = {
            Bucket: S3_BUCKET,
            Key: "upload/" + file.name,
            Body: file
        };
        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setTimeout(() => {
                    setSelectedFile(null);
                }, 3000)
            })
            .send((err) => {
                if (err) console.log(err)
            })

        console.log("파일 이름 :" + file.name);
    }




    return (
        <>
            <Nav />
            <CssBaseline />
            <Container className="content-container">
                <Box className="write_css" sx={{
                    bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0',
                    borderWidth: "5px", borderColor: 'black', borderStyle: 'solid',
                    borderColor: 'black', padding: "20px"
                }}>
                    <Box sx={{ flexGrow: 1, mt: 6 }}>
                        <div className='form-wrapper' id="write" style={{ "marginBottom": "30px" }}>
                            {/* <Server/> */}
                            <p style={{"display":"flex", "fontSize":"20px","fontWeight":"bold"}}>브이로그 영상 올리기</p>
                            <Input color="primary" type="file" onChange={handleFileInput} />
                           
                           <hr/>
                           <p style={{"display":"flex", "fontSize":"20px","fontWeight":"bold"}}>나의 브이어리 포토북 이미지 올리기</p>
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
                                    const data = editor.getData().substr(3, editor.getData().length - 7)
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


                        {selectedFile ? (
                            <button className="submit-button"
                                onClick={(e) => {
                                    uploadFile(selectedFile);
                                    e.preventDefault();

                                    let today = new Date();
                                    let date = today.toLocaleDateString();      // 현재 날짜

                                    setViewContent(viewContent.concat({ ...writeContent }));

                                    const formData = new FormData();
                                    formData.append("title", writeContent.title);
                                    formData.append("content", writeContent.content);
                                    formData.append("date", date);
                                    formData.append("userEmail", sessionStorage.getItem("email"));
                                    formData.append("videoPath", fileName);

                                    axios({
                                        url: "http://localhost:8080/write",
                                        method: "post",
                                        data: formData
                                    }).then((res) => {
                                        console.log(res.data);

                                        Swal.fire(
                                            '',
                                            '업로드 완료!',
                                            'success'
                                        )
                                        setTimeout(function () {
                                            window.location = '/myfeed';
                                        }, 2000)

                                    }).catch((error) => {
                                        console.log(error);
                                    })


                                }}>업로드</button>
                        ) : null}
                    </Box>
                </Box>
            </Container >





        </>
    );
}


export default Write;