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
import VideoImageThumbnail from 'react-video-thumbnail-image';
import "./MyFeed.css";



const MyFeed = () => {
	const [mypostList, setMyPostList] = useState([]);
	const [myPopular, setMyPopular] = useState([]);

	useEffect(() => {
		const formData = new FormData();
		formData.append("id", sessionStorage.getItem("user_id"));
		formData.append("email", sessionStorage.getItem("email"));
		axios({
			url: "http://localhost:8080/myfeed",
			method: "post",
			data: formData
		}).then((res) => {
			setMyPostList(res.data.myfeed);
			setMyPopular(res.data.mypopular);
		})

	}, []);

	return (
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
										{mypostList.slice(0).reverse().map((p) => {
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
								<div style={{ "textAlign": "left", "padding": "10rem 5rem 0 0", "display": "flex", "justifyContent": "space-between" }}>
									<h6 style={{ "fontWeight": "bold", "color": "rgba(49, 141, 251, 1)" }}><i class="bi bi-heart-fill"></i> 나의 인기 브이어리</h6>
								</div>


								<div >
									{myPopular.slice(0, 3).map((p) => {
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
	);
}
export default MyFeed;