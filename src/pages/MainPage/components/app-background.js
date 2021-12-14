import React, { useState, useEffect, useRef } from 'react'
import { Spinner } from 'react-bootstrap'
import MetaviceV2BinalBackground from "../../../assets/videos/MetaVice_V2_Final.mp4";

export default function VideoBackground({ black, videoPlay, ...props }) {
    const [isLoading, setIsLoading] = useState(true);
    const ref = useRef(null)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if (ref.current) {
            ref.current.loop = true;

            if (videoPlay) {
                ref.current.play();
            } else {
                ref.current.pause();
            }

        }
    }, [ref, videoPlay])

    if (black) {
        return (
            <div id="video-background" className="position-absolute w-full h-100vh">
                <div className="object-fit-cover h-100vh bg-black"></div>
            </div>
        )
    }

    return (
        <div id="video-background" className="position-absolute w-full h-100vh">
            <React.Fragment>
                {
                    isLoading
                        ? <Spinner className={`position-absolute spinner mt-auto`} id="video-loading-spinner" animation="border" variant="success" />
                        :
                        <video
                            loop
                            autoPlay
                            playsInline
                            muted
                            preload='auto'
                            className="object-fit-cover h-100vh w-full"
                            ref={ref}
                        >
                            <source src={MetaviceV2BinalBackground} type='video/mp4' />
                            Your browser does not support HTML5 video.
                        </video>
                }
            </React.Fragment>
        </div>
    )
}
