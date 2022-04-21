import React, { useState, useEffect } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Home.css';
import Nav from '../Common/Nav';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import "./MyFeed.css";
import MyPdf from '../View/MyPdf';

const ref = React.createRef();


const MyFeed = () => {
	// 자신의 게시물 리스트
	const [mypostList, setMyPostList] = useState([]);

	// 자신의 인기 게시물 리스트
	const [myPopular, setMyPopular] = useState([]);

	//pdf 다운로드 선택 여부
	const [pdfMode, setPdfMode] = useState(false);

	useEffect(() => {
		const formData = new FormData();
		formData.append("id", sessionStorage.getItem("user_id"));
		axios({
			url: "http://54.193.18.159:8080/myfeed",
			method: "post",
			data: formData
		}).then((res) => {
			setMyPostList(res.data.myfeed);
			setMyPopular(res.data.mypopular);
		})

	}, []);		// 빈 리스트이므로, 한 번만 실행


	return (
		<>
			{pdfMode == false	
				?
				(		// '나만의 브이어리 받기' 버튼을 클릭하지 않을 시
					<>
						<Nav />
						<CssBaseline />
						<Container className="content-container">
							<Box className="video_items"
								sx={{
									width: '98%', bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0',
									borderWidth: "5px", borderColor: 'black', borderStyle: 'solid',
									borderColor: 'black'
								}}>

								<Container>
									<div className='row'>
										<div className='col-9' >
											<div style={{ "padding": "5rem 0 0 5rem", "display": "flex", "justifyContent": "space-between" }}>
												<h3 style={{ "fontWeight": "bold" }}><FaBook /> 나의 기록</h3>
											</div>
											<Box className="video_item"
												sx={{ flexGrow: 6 }}>
												<Grid container id='grid' >
													{mypostList.slice(0).reverse().map((p) => {		// 자신의 게시물을 내림차순으로 정렬 (최신 게시물이 상위로 뜨게)
														return (
															<Grid item col-xs={4} col-6 col-md-4>
																<Grid item col-xs={4}>
																	<div id="videoListBox">
																		<Link to={`/view/${p.id}`} className="link">
																			<img className="videoCard_thubmnail" src={p.videothumbnail} alt="video_thubmnail" />

																			<div className="video_title">
																				{p.title}
																			</div>
																			<div className="video_date">
																				{p.date}
																			</div>
																			<div className="video_date">
																				조회수  {p.viewCnt}회
																			</div>
																		</Link>
																	</div>
																</Grid>
															</Grid>

														);
													})}

												</Grid>
											</Box>
										</div>
										<div className='col-3'>
											{/* pdf연결 */}
											<div style={{ "marginTop": "5.2rem" }}>
												<input type="button" value="나만의 브이어리 받기" class="btn text-white flex-shrink-0 mt-3 " style={{ "display": "flex", "margin": "0 3.5rem 0 auto", "backgroundColor": "rgba(49, 120, 221, 1)" }}
													onClick={() => { setPdfMode(true) }} />
											</div>
											<div style={{ "textAlign": "left", "padding": "4rem 5rem 0 0", "display": "flex", "justifyContent": "space-between" }}>
												<h6 style={{ "fontWeight": "bold", "color": "rgba(49, 141, 251, 1)" }}><i class="bi bi-heart-fill"></i> 나의 인기 브이어리</h6>
											</div>


											<div>
												{myPopular.slice(0, 3).map((p) => {		// 자신의 인기 게시물 3개만 뽑기
													return (
														<div>
															<div id="popularListBox">
																<Link to={`/view/${p.id}`} className="link">
																	<div className="popular_title">
																		{p.title}
																	</div>
																	<div className="popular_date">
																		{p.date}
																	</div>
																	<div className="popular_date">
																		조회수  {p.viewCnt}회
																	</div>
																</Link>
															</div>
														</div>
													);
												})}

											</div>
										</div>
									</div>
								</Container>
							</Box>
						</Container>
					</>
				) : (<MyPdf mypostList={mypostList} setPdfMode={setPdfMode} />)}		{/* '나만의 브이어리 받기' 버튼을 클릭 시 */}
		</>
	);
}
export default MyFeed;