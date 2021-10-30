import React from 'react';
import GolfVideo from './video/GolfVideo.mov';

const BackVideo = () =>{
    return(
        <video autoPlay muted loop style={{
            position : "absolute",
            width:"100%",
            left : "50%",
            top:"50%",
            height:"100%",
            objectFit:"cover",
            transform:"translate(-50%,-50%)",
            zIndex:"-1",
        }}>
            <source src={GolfVideo} type="video/mp4"/>
        </video>
    );
};

export default BackVideo;