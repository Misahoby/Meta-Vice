import React from 'react'
// import React, { useRef, useEffect, useState } from 'react'
// import { Spinner } from 'react-bootstrap';
import PageBody from './page-body';
import { Container } from 'react-bootstrap'

export default function BackgroundTab({ index, tab, currentTabIndex, ...props }) {
    // const ref = useRef(null)
    // const [isLoading, setIsLoading] = useState(true)

    const duration = () => {
        return `${currentTabIndex === index ? "opacity-100 z-index-1" : "opacity-0"} ${(currentTabIndex === null && index === 0) ? "opacity-100" : ""}`
    }

    // useEffect(() => {
    //     if (ref.current) {
    //         ref.current.loop = true;
    //         ref.current.play();
    //     }
    // }, [ref])

    // useEffect(() => {
    //     setIsLoading(false)
    // }, [])

    // const renderBackgroundVideo = (backgroundVideo, className) => {
    //     if (backgroundVideo?.youtubeId) {
    //         return <iframe className={className} src={`${backgroundVideo.embed}?controls=0&autoplay=1&mute=1&output=embed`} title="background" />
    //     }

    //     return <React.Fragment>
    //         {
    //             isLoading
    //                 ? <Spinner className={`position-absolute spinner mt-auto ${duration()}`} id="video-loading-spinner" animation="border" variant="success" />
    //                 :
    //                 <video className={className}
    //                     loop
    //                     autoPlay
    //                     playsInline
    //                     muted
    //                     preload='auto'
    //                     ref={ref}
    //                     id={`video-${index}`}
    //                 >
    //                     <source src={backgroundVideo.url} type='video/mp4' />
    //                     Your browser does not support HTML5 video.
    //                 </video>
    //         }
    //     </React.Fragment>
    // }

    const Tabpage = tab?.Tabpage

    return (
        <React.Fragment>
            {
                Tabpage &&
                <PageBody className={"overflow-auto position-absolute transition-all duration-500 w-full " + duration()}>
                    <Container>
                        <Tabpage />
                    </Container>
                </PageBody>
            }
            <div {...props} className={`overflow-auto position-absolute w-full`}>
                {
                    !Tabpage &&
                    <React.Fragment>
                        {/* main image */}
                        <div className="position-absolute w-full h-full"
                            style={{ display: 'flex' }}
                        >
                            {
                                tab.img?.src &&
                                <img
                                    src={tab.img.src}
                                    className={`h-full object-fit-cover z-index-1 w-full transition-all duration-500 ${duration()} ${tab.img?.additionalClasses ? tab.img?.additionalClasses : ""}`}
                                    alt="test"
                                />
                            }
                        </div>
                        {/* background image */}
                        {/* <div className={`w-full h-100vh`}>
                            {
                                tab?.backgroundVideo ?
                                    renderBackgroundVideo(tab.backgroundVideo, `object-fit-cover w-full h-100vh  ${duration()}`)
                                    :
                                    (tab?.background && <img src={tab.background} className={`object-fit-cover ${duration()}`} alt="ZERO" />)
                            }
                        </div> */}
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}
