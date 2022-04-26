import React, { useState, useEffect } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Home.css';
import Nav from '../Common/Nav';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import thumbnail from '../assets/img/thumbnail.png'
import {FaBook} from "@react-icons/all-files/fa/FaBook";
import VideoImageThumbnail from 'react-video-thumbnail-image';



const MyFeed = () => {
	const [mypostList, setMyPostList] = useState([]);

	useEffect(() => {
		const formData = new FormData();
		formData.append("id", sessionStorage.getItem("user_id"));
		axios({
			url: "http://localhost:8080/myfeed",
			method: "post",
			data: formData
		}).then((res) => {
			console.log(res.data);
			setMyPostList(res.data);
		})

	}, []);

	console.log(mypostList);

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

					<Container className="video_content">
						<div style={{"padding":"5rem 0 0 5rem", "display":"flex", "justifyContent":"be"}}>
							<h3 style={{"fontWeight":"bold"}}><FaBook/> 나의 기록</h3>
						</div>
						<Box className="video_item"
							sx={{ flexGrow: 6 }}>
							<Grid container id='grid' >
								{mypostList.slice(0).reverse().map((p) => {
									return (
										<Grid item col-xs={4} col-6 col-md-4>
											<Grid item col-xs={4}>
												<div className="container" id="home">
													<Link to={`/view/${p.id}`} className="link">
													<VideoImageThumbnail
                          								videoUrl={p.videoPath} className="videoCard_thubmnail"/>
														<div className="video_title">
															{p.title}
														</div>
														<div className="video_date">
															{p.date}
														</div>
													</Link>
												</div>
											</Grid>
										</Grid>

									);
								})}

							</Grid>
						</Box>
					</Container>
				</Box>
			</Container>
		</>
	);
}
export default MyFeed;


