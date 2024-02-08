
// import VideoPlayer from '../basics/VideoPlayer';

import { useState } from "react";
import { screenWidth } from "../../api/fetctData";

const Advertisement = (): JSX.Element => {
    const [videoPlaying, setVideoPlaying] = useState(false);
    const generateVideoElement = (): HTMLVideoElement => {
        const video = document.createElement("video");
        video.src = "https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@5ad27dc969c7782fc30c67b7d3ebc13b99281871/video/video.mp4";
        video.autoplay = true;
        video.width = screenWidth<=600?350:screenWidth<=900?600:1200;
        video.className = "ad_video";
        video.style.boxShadow = "100px 100px 100px 500px rgba(0,0,0,0.5)";
        video.style.objectFit = "cover";
        video.style.position = "fixed";
        video.style.top = "50%";
        video.style.left = "50%";
        video.style.zIndex = "10";
        video.style.transform = "translate(-50%, -50%)";
        video.addEventListener("ended", () => {
            setVideoPlaying(false);
            video.remove();
        })
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        })
        return video;
    }
    const handlePlayButtonClick = () => {
        const advertisement = document.querySelector(".advertisement");
        if (advertisement) {
            setVideoPlaying(true);
            const video = generateVideoElement();
            advertisement.appendChild(video);
        }
    };

    const handlePauseButtonClick = () => {
        const video = document.querySelector(".ad_video");
        if (video) {
            video.remove();
            setVideoPlaying(false);
        }
    }

    return (
        <section className="advertisement">
            {videoPlaying &&
                <div className="close_button">
                    <img height={screenWidth<=600?40:screenWidth<=900?50:70} onClick={handlePauseButtonClick} src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@b94e5c0ac0f7240ed2616a50e66718993e713d7c/icons/basic_icon/close.svg" alt="Close Icon" />
                </div>}
            <div className="adv_container">
                <div className="adv_video">
                    <img onClick={handlePlayButtonClick} className="play_icon" height={70} src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@daaa9e07840a0923fd6af35122c1f63287544542/icons/basic_icon/playicon.svg" alt="Play Icon" />
                    <img className="adv_video_poster" width={screenWidth<=600?350:screenWidth<=900?500:700} src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@5ad27dc969c7782fc30c67b7d3ebc13b99281871/video/poster.jpg" alt="" />
                </div>
                <div className="adv_quote">
                    <h1>Empower Your Growth</h1>
                    <p>
                        Navigate Global Trade Seamlessly. Our export-import solutions break down barriers, offering open flexibility
                        and limitless potential for your business.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Advertisement;
