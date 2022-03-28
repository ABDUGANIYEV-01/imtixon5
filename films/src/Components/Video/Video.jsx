import React, { useRef, useState, useEffect } from 'react';
import "./video.scss";
import video from '../../img and vidyo/video/vidio.mp4';
import playIcon from '../../img and vidyo/svg/play.svg';
import pauseIcon from "../../img and vidyo/svg/pause.svg";


const Video = () => {
    const videoRef = useRef()
    const playRef = useRef()
    const [play, setPlay] = useState(false)

    const vidioPlay = () =>{
        setPlay(prev => !prev)
    }

    useEffect(() => {
        play ? videoRef.current.play() : videoRef.current.pause()
    }, [play]);
    return (
        <div  className='videoPlayer'>
            <video  onClick={vidioPlay} ref={videoRef} className='video'>
                <source src={video} type="video/mp4" />
            </video>
            <img ref={playRef} className='play open' src={play ? pauseIcon : playIcon} alt="play" onClick={() => setPlay(prev => !prev)} />
           
        </div>
    );
}

export default Video;
