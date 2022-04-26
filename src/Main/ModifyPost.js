import { useState } from 'react';
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Write.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Nav from '../Common/Nav';
import AWS from 'aws-sdk';
import { Input } from 'reactstrap';
import { useParams } from 'react-router-dom';

const ModifyPost = () => {

    // 게시물 공개/비공개 여부
    const [visible, setVisible] = useState(0);

    
    // 수정할 게시물의 아이디를 url 파라미터 값으로 전달 받아옴
    const { id } = useParams();

    const [writeContent, setWriteContent] = useState({
        title: '',
        content: ''
    })


    const getValue = e => {
        const { name, value } = e.target;
        setWriteContent({
            ...writeContent, [name]: value
        })
    }


    const [selectedFile, setSelectedFile] = useState([]);
    const [selectedThumbnailFile, setSelectedThumbnailFile] = useState([]);

    const [video_Path, setVideoPath] = useState('');
    const [thumbnail_Path, setThumbnailPath] = useState('');

    //동영상 타입 및 이미지 타입에 안맞는 걸 첨부했을 경우, true/false
    const [vtcorrect, setVTCorrect] = useState(false);
    const [itcorrect, setITCorrect] = useState(false);



    const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
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


    // 비디오 경로 설정
    const handleFileInput = e => {
        const file = e.target.files[0];

        const randomName = Math.random().toString(36).substr(2, 11);
        const imgName = randomName + "_" + file.name
        console.log(imgName);
        const fileExt = file.name.split('.').pop();  //파일익스텐션값 가져오기

        if (file.type !== 'video/mp4' || fileExt !== 'mp4') { //파일타입과 익스텐션이 mp4인것만
            Swal.fire(
                '',
                'mp4 타입만 업로드 가능합니다.',
                'warning'
            )
            //mp4 타입이 아닐 경우 false
            setVTCorrect(false);
        } else {
            //mp4 타입이 아닐 경우 true
            setVTCorrect(true);
        }

        const s3Url = "https://viary.s3.us-west-1.amazonaws.com/upload/";
        const videoPath = s3Url + file.name;

        console.log("주소" + videoPath);
        setVideoPath(videoPath);
        setSelectedFile(e.target.files[0]);
    }

    // 썸네일 경로 설정
    const handleThumbnailInput = e => {
        const file = e.target.files[0];

        const randomName = Math.random().toString(36).substr(2, 11);
        const imgName = randomName + "_" + file.name
        console.log(imgName);
        const fileExt = file.name.split('.').pop();  //파일익스텐션값 가져오기

        if ((file.type !== 'image/jpeg' || fileExt !== 'jpg') && (file.type !== 'image/png' || fileExt !== 'png')) { //파일타입과 익스텐션이 jpg인것만
            Swal.fire(
                '',
                'jpg,png 타입만 업로드 가능합니다.',
                'warning'
            )
            //이미지 타입이 아닐 경우 false
            setITCorrect(false);
        } else {
            //이미지 타입이 아닐 경우 true
            setITCorrect(true);
        }

        const s3Url = "https://viary.s3.us-west-1.amazonaws.com/upload/thumbnail/";
        const thumbnailPath = s3Url + file.name;

        console.log("주소" + thumbnailPath);
        setThumbnailPath(thumbnailPath);
        setSelectedThumbnailFile(e.target.files[0]);
    }



    // 비디오 S3에 업로드
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
                }, 50000)
            }).send((err) => {
                if (err) console.log(err)
            })

        console.log("파일 이름 :" + file.name);
    }

    // 썸네일 S3에 업로드
    const uploadThumbnailFile = file => { //챕터4!의 사진을 업로드 하는 코드
        const params = {
            Bucket: S3_BUCKET,
            Key: "upload/thumbnail/" + file.name,
            Body: file
        };
        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setTimeout(() => {
                    setSelectedThumbnailFile(null);
                }, 50000)
            }).send((err) => {
                if (err) console.log(err)
            })

        console.log("썸넬 파일 이름 :" + file.name);
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
                            <div style={{ "marginBottom": "3px", "display": "flex", "fontSize": "18px" }}><i class="bi bi-camera-reels-fill"></i>&nbsp;나의 브이로그</div>
                            <Input color="primary" type="file" onChange={handleFileInput} />

                            <div style={{ "marginTop": "25px", "marginBottom": "3px", "display": "flex", "fontSize": "18px" }}><i class="bi bi-image" />&nbsp;나의 브이로그 썸네일 설정</div>
                            <Input color="primary" type="file" onChange={handleThumbnailInput} />

                            <input className="title-input" type='text' placeholder='제목'
                                onChange={getValue} id='title' />
                            <textarea rows="18" style={{ "width": "100%", "textAlign": "left" }} id="content"></textarea>

                            {/* 게시물(브이어리) 공개/비공개 여부 선택 */}
                            <div style={{ "paddingTop": "25px", "marginBottom": "3px", "display": "flex" }}>
                                    <div style={{ "fontSize": "18px", "marginRight": "20px" }}><i class="bi bi-lock-fill"></i>&nbsp;공개 설정</div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="visible" id="public" value="public" onClick={(e)=> {
                                            setVisible(1);
                                        }} />
                                        <label class="form-check-label" for="inlineRadio1">공개</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="visible" id="private" value="private" onClick={(e) => {
                                            setVisible(0);
                                        }} />
                                        <label class="form-check-label" for="inlineRadio2">비공개</label>
                                    </div>
                                </div>
                        </div>


                        <button className="submit-button"
                            onClick={(e) => {

                                if (selectedFile == '') {     // 브이로그 영상 파일 없을 시, 업로드 막기
                                    Swal.fire({
                                        icon: 'error',
                                        text: '동영상 첨부해주세요!'
                                    })
                                } else if (selectedThumbnailFile == "") {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '사용하실 썸네일을 첨부해주세요!'
                                    })
                                } else if (document.getElementById("title").value == '') {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '제목을 입력해주세요!'
                                    })
                                } else if (document.getElementById("content").value == '') {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '내용을 입력해주세요!'
                                    })
                                } else if (vtcorrect == false) {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '브이로그 첨부 파일 타입을 확인해주세요!'
                                    })
                                } else if (itcorrect == false) {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '썸네일 첨부 파일 타입을 확인해주세요!'
                                    })
                                } else if (document.querySelector('input[name="visible"]:checked') == null) {
                                    Swal.fire({
                                        icon: 'error',
                                        text: '게시물 공개 설정 해주세요!'
                                    })
                                
                                } else {
                                    uploadFile(selectedFile);
                                    uploadThumbnailFile(selectedThumbnailFile);
                                    e.preventDefault();

                                    let today = new Date();
                                    let date = today.toLocaleDateString();      // 현재 날짜

                                    const formData = new FormData();
                                    formData.append("title", document.getElementById("title").value);
                                    var contents = document.getElementById("content").value;
                                    contents = contents.replace(/(\n|\r\n)/g, '<br>');      // 게시물을 작성할 때, 내용에 <br>이 같이 들어가게 된다. 따라서 <br>을 띄어쓰기로 변경해주었다.
                                    formData.append("content", contents);
                                    formData.append("date", date);
                                    formData.append("videoPath", video_Path);
                                    formData.append("videothumbnail", thumbnail_Path);
                                    formData.append("open", visible);

                                    // 게시물 id와 함께 서버에 put 방식으로 데이터를 전달하여 게시물 수정해주기
                                    axios({
                                        url: `http://54.193.18.159:8080/post/update/${id}`,
                                        method: "put",
                                        data: formData
                                    }).then((res) => {

                                        Swal.fire(
                                            '',
                                            '수정 완료!',
                                            'success'
                                        )
                                        setTimeout(function () {
                                            window.location = '/myfeed';
                                        }, 2000)

                                    }).catch((error) => {
                                        console.log(error);
                                    })
                                }

                            }}>수정</button>
                    </Box>
                </Box>
            </Container >





        </>
    );
}


export default ModifyPost;
