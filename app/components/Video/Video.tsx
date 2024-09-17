import React, { useEffect, useRef } from 'react';

export function Video(){
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);

    return (
        <video
            controls
            width="250"
            loop
            muted
            >
               <source src='../../../assets/videos/bombeiros.mp4' />
       </video>
      )
}