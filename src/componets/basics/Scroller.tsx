import { useState } from "react";


const Scroller: React.FC = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        visible && <button className="scrollToTop" onClick={scrollToTop}><img height={30} src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@b94e5c0ac0f7240ed2616a50e66718993e713d7c/icons/basic_icon/up.svg" alt="" /></button>
    );
}

export default Scroller