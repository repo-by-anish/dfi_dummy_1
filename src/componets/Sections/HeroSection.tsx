import "./sections.css";
import Button from "../basics/Button";
import { screenWidth } from "../../api/fetctData";

const HeroSection = () => {
    const onContactClick = () => {
        window.location.href = "//api.whatsapp.com/send?phone=918343986546";
    };

    return (
        <section className="hero">
            <div className="hero__content-1">
                <blockquote className="hero__quote">
                    Welcome to <b>Diamond <span style={{ color: "var(--secondary-color3)" }}>Fruits</span> International</b>, your <b>B2B</b> destination for top-notch fruit import and export services. Explore efficient and <b>cost-effective global trade</b> with us!
                </blockquote>
                <div onClick={onContactClick} className="hero__btn">
                    <Button
                        size={{ width: screenWidth <= 500 ? 200 : 400, height: screenWidth <= 500 ? 35 : 55 }}
                        color="var(--tertiary-color)"
                        name={"Contact for More Details"}
                        fontSize={screenWidth <= 500 ? "14px" : "20px"}
                        backgroundColor="var(--primary-color)"
                    />
                </div>
                <div className="hero__content-2"></div>
            </div>
        </section>
    );
};

export default HeroSection;
