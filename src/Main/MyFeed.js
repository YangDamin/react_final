import { useState, useEffect, React } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Home.css';
import Nav from '../Common/Nav';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import thumbnail from '../assets/img/thumbnail.png'

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
						<Box className="video_item"
							sx={{ flexGrow: 6 }}>
							<Grid container id='grid' >
								{mypostList.map((p) => {
									return (

										<Grid item col-xs={4} col-6 col-md-4>
											<Grid item col-xs={4}>
												<div className="container" id="home">
													<Link to={`/view/${p.id}`} className="link">
														<img className="videoCard_thubmnail" src={thumbnail} alt="video_thubmnail" />
														<h6 className="video_title" >{p.title}<br />{p.date}<br />
														</h6>
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


