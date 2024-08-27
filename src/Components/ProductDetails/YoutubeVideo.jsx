import image from '../../assets/images/Image.png'
import playButton from '../../assets/images/Button - Play → SVG.svg'
import { useState } from 'react';
import closeIcon from "../../assets/images/icon-close-black.png";


const YoutubeVideo = () => {

    const [showIframe, setShowIframe] = useState(false);

    const handleShowVideo = () => {
        setShowIframe(true);
    };

    const handleCloseVideo = () => {
        setShowIframe(false);
    };
    
    
    return (
        <div>
            <div className="mt-10">
                <section className="flex justify-between py-24 relative">
                    <div className="w-[820px] absolute h-full top-0 left-0">
                        <img
                            className="object-cover w-full h-full rounded-xl"
                            src={image}
                            alt="video"
                        />
                        <button onClick={handleShowVideo} className="absolute inset-0 flex items-center justify-center
                     top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/45 w-full h-full pt-6 pl-6 pr-8 pb-8 lg:pb-0 lg:px-10 lg:pt-11 rounded-2xl">
                            <img
                                className=" w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                src={playButton}
                                alt="Play Video"
                            />
                        </button>
                    </div>
                </section>

                <img src={image} alt="" />

                {showIframe && (
                    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
                        <div className="relative bg-black px-2 rounded shadow-lg">
                            <button onClick={handleCloseVideo} className="absolute -top-8 right-[5px] text-3xl font-bold"><img src={closeIcon} alt="Close" /></button>
                            <iframe
                                className="w-[850px] h-[480px]"
                                src="https://www.youtube.com/embed/4-I2f2h-fDk?si=m06vS7-AYrlLW7FJ"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title="YouTube video player"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
            <div>
                sidebar
            </div>
        </div>
    );
};

export default YoutubeVideo;