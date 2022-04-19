import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
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

            <Container className="content-container" ref={ref}>

                {mypostList.slice(0).reverse().map((v) => {
                    return (
                        <div>
                            <div className={style.box}>
                                <img src={pdflogo} style={{"width":"400px", "display":"flex", "marginBottom":"1.5rem"}}/>
                                <div style={{"backgroundColor":"#C9BC9C", "borderRadius":"30px", "padding":"10px 0 10px 0"}}>
                                
                                <span className={style.contentTitle}>
                                    Date.&nbsp;&nbsp;{v.date}
                                </span>

                                <hr />

                                {(v.content || '').split("<br>").map((line) => {
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