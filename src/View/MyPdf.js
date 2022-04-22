// MyPdf는 pdf로 다운받을 자신의 게시물들을, 다이어리처럼 꾸며 다운받을 수 있게 해놓았습니다.

import React from "react";
import Container from '@mui/material/Container';
import Pdf from 'react-to-pdf';
import style from './MyPdf.module.css';
import pdflogo from "./pdfViary.png";


// pdf
const ref = React.createRef();

const MyPdf = ({ mypostList, setPdfMode }) => {

    return (
        <div>
            <div style={{ "display": "flex" }}>
                <button type="button" className={style.back_btn}
                    onClick={() => { setPdfMode(false) }}>
                    <i class="bi bi-arrow-left"></i>
                </button>

                <Pdf targetRef={ref} filename="MyViary.pdf" scale="0.65">
                    {({ toPdf }) => <button className={style.pdf_btn} onClick={toPdf}>PDF 다운로드</button>}
                </Pdf>
            </div>

            <Container className="content-container" ref={ref}>         {/* pdf 다운로드 클릭 시, 다운받을 게시물 부분*/ }

                {mypostList.slice(0).reverse().map((v) => {     // 게시물 내림차순으로 정렬
                    return (
                        <div>
                            <div className={style.box}>
                                <img src={pdflogo} style={{ "width": "400px", "display": "flex", "marginBottom": "1.5rem" }} />
                                <div style={{ "backgroundColor": "#C9BC9C", "borderRadius": "30px", "padding": "10px 0 10px 0" }}>

                                    <span className={style.contentTitle}>
                                        Date.&nbsp;&nbsp;{v.date}
                                    </span>

                                    <hr />

                                    {(v.content || '').split("<br>").map((line) => {        // 게시물 <br> 대신 띄어쓰기로 변경해주기
                                        return (
                                            <span className={style.content}>
                                                {line}
                                                <br />
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Container>


        </div>
    )
}

export default MyPdf;