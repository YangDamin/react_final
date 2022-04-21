import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Nav from '../Common/Nav';
import Payment from './Payment';
import style from './Buy.module.css';
import book from './book2.png'

const Buy = () => {
  return (
    <>
      <Nav />
      <CssBaseline />
      <Container className="content-container" >
        <Box sx={{
          bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0',
          borderWidth: "5px", borderColor: 'black', borderStyle: 'solid',
          borderColor: 'black', height: '110vh', overflow: 'overlay'
        }}>
          <Box sx={{ flexGrow: 1, mt: 6 }}>
            <div className="write-box" style={{ marginBottom: '25px' }}>
              <div className="buy-title" style={{ "display": "flex", "padding": "2rem 0 0 5rem" }}>
                <h3 style={{ "fontWeight": "bold", "marginTop": "30px" }}>
                  <i class="bi bi-bag-heart" />&nbsp; BUY</h3>
              </div>

              <div className={style.boxstyle}>
                <h5 style={{ "fontWeight": "bold" }}>{sessionStorage.getItem("name")}님의 브이어리</h5>
                <hr style={{ "height": "3px" }} />
                <div className="row">
                  <div className="col-2">
                    <img src={book} style={{ "width": "130px" }} />
                  </div>
                  <div className="col-10">
                    <div className='row'>
                      <a href="/myfeed" className={style.booktitle}>VIARY</a>
                      <a href="/myfeed" className={style.bookname}>나의 브이어리 발간하기</a>
                    </div>
                  </div>
                </div>
              </div>
              <span>결제 안내 시 상호명은&nbsp;{<span style={{ "color": "red" }}>VIARY</span>}로 표기되니 참고 부탁드립니다.</span>

              <div>
                <Payment />
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}


export default Buy;