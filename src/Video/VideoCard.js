import React from 'react';
import './VideoCard.css';
import myimage from "../assets/img/thumbnail.png";

const VideoCards = (props) => {
const { image,views,title,timestamp} = props;

  return (
   
    <div className="videoCard">
      <img className ="videoCard_thubmnail" src={myimage} alt="video_thubmnail"/>
      <p></p>
      <div className = "video_text">
          <h6 className="video_title" >{title}</h6>
          <span className="video_viewcount_timestamp">
            <h9 className="video_viewcount">{views}•{timestamp}</h9>
            </span>
        </div>
    </div>
  );
};

export default VideoCards;
