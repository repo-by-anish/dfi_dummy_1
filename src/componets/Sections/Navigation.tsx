import { useState } from "react"
import { screenWidth } from "../../api/fetctData"

const Navigation = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>();
    const handleClick = () => setOpen(!open);
    return (
        <header className={open ? "header_active" : "header_inactive"}>
            <div className="brand__logo">
                <img
                    src="./brand_img.jpg"
                    height={screenWidth <= 500 ? "100px" : "110px"}
                    // width={screenWidth <= 500 ? "30px" : "60px"}
                    alt=""
                />
            </div>
            <nav>
                <ul className="nav__links">
                    <li onClick={handleClick} className="hamburger">
                        <div className="sp-1"></div>
                        <div className="sp-2"></div>
                        <div className="sp-3"></div>
                    </li>
                    <li className={!open ? "nav__link_inactive" : "nav__link_active"}><a href="/">Home</a></li>
                    <li className={!open ? "nav__link_inactive" : "nav__link_active"}><a href="/">About</a></li>
                    <li className={!open ? "nav__link_inactive" : "nav__link_active"}><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation