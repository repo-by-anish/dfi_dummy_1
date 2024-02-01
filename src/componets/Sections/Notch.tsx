import { useLocation, useNavigate } from "react-router-dom";
const Notch = (): JSX.Element => {
    const location = useLocation();

    const navigate= useNavigate();

    return (
        <div className="notch">
            {
                location.pathname !== "/" &&
                (<>
                    <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }} title="Back" className="icon">
                        <img src="/basic_icon/back.svg" alt="" />
                    </div>
                    <div onClick={() => navigate("/")} style={{ cursor: "pointer" }} title="Go Home" className="icon">
                        <img src="/basic_icon/home.svg" alt="" />
                    </div>
                </>
                )
            }
            <a className="notch_email" href="mailto:2l0nX@example.com">2l0nX@example.com</a>
            <div className="language">
                <span>Language</span>
                <select style={{ fontSize: "12px" }} name="" id="">
                    <option style={{ fontSize: "12px" }} value="">English-US</option>
                    <option style={{ fontSize: "12px" }} value="">Hindi-IN</option>
                </select>
            </div>
            <button className="screen_mode icon">
                <img style={{ width: "20px", height: "20px" }} src="/icons/moon.svg" alt="" />
            </button>
        </div>
    );
};

export default Notch;
