import { useState } from 'react';
// import VideoPlayer from '../basics/VideoPlayer';

const Advertisement = (): JSX.Element => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayButtonClick = () => {
        setIsPlaying(prev => !prev);
    };

    return (
        <section className='advertisement'>
            <div className="adv_video">
                <img onClick={handlePlayButtonClick} width={700} src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@5ad27dc969c7782fc30c67b7d3ebc13b99281871/video/poster.jpg" alt="" />
            </div>
            <div className="adv_quote">
                <h1>Empower Your Growth</h1>
                <p>
                    Navigate Global Trade Seamlessly. Our export-import solutions break down barriers, offering open flexibility
                    and limitless potential for your business.
                </p>
            </div>
        </section>
    );
};

export default Advertisement;
