
import { useLocation, useNavigate } from "react-router-dom";
const Notch = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="notch_container">
            <div className="notch">
                {
                    location.pathname !== "/" &&
                    (<>
                        <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }} title="Back" className="icon">
                            <img src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@ca5bb668a0c6f801176036abbca028903bdde45b/icons/basic_icon/back.svg" alt="" />
                        </div>
                        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }} title="Go Home" className="icon">
                            <img src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@ca5bb668a0c6f801176036abbca028903bdde45b/icons/basic_icon/home.svg" alt="" />
                        </div>
                    </>
                    )
                }
                <a className="notch_email" href="mailto:dfi@diamondfruitsinternational.com">	dfi@diamondfruitsinternational.com</a>
                <div className="language">
                    <span>Language</span>
                    <select style={{ fontSize: "12px" }} name="" id="">
                        <option style={{ fontSize: "12px" }} value="">English-US</option>
                        <option style={{ fontSize: "12px" }} value="">Hindi-IN</option>
                    </select>
                </div>
                <button className="screen_mode icon">
                    <img style={{ width: "20px", height: "20px" }} src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@5ad27dc969c7782fc30c67b7d3ebc13b99281871/icons/icons/moon.svg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default Notch;
