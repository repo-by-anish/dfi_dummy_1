import { useState } from "react"
import { screenWidth } from "../../api/fetctData"
import { Link } from "react-router-dom";

const Navigation = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>();
    const handleClick = () => setOpen(!open);
    return (
        <header className={open ? "header_active" : "header_inactive"}>
            <div className="brand__logo">
                <img
                    src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@b94e5c0ac0f7240ed2616a50e66718993e713d7c/icons/brand_img.jpg"
                    height={screenWidth <= 500 ? "100px" : "110px"}
                    alt="Bradnd Logo"
                />
            </div>
            <nav>
                <ul className="nav__links">
                    <div onClick={handleClick} className="hamburger">
                        <div className={open ? "sp-1 rot45l" : "sp-1"}></div>
                        <div style={{ display: open ? "none" : "block" }} className="sp-2"></div>
                        <div className={open ? "sp-3 rot45r" : "sp-3"}></div>
                    </div>
                    <li onClick={handleClick} className={!open ? "nav__link_inactive" : "nav__link_active"}><Link to="/#">Home</Link></li>
                    <li onClick={handleClick} className={!open ? "nav__link_inactive" : "nav__link_active"}><Link to="/about">About</Link></li>
                    <li onClick={handleClick} className={!open ? "nav__link_inactive" : "nav__link_active"}><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation