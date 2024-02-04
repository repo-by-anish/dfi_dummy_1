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
                <header>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            style={{ borderRadius: "50%" }}
                            src="https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@5ad27dc969c7782fc30c67b7d3ebc13b99281871/icons/icons/brand_icon/dfi_logo.avif"
                            height={screenWidth <= 500 ? "30px" : "60px"}
                            width={screenWidth <= 500 ? "30px" : "60px"}
                            alt=""
                        />
                        <h1 className="brand">
                            Diamond <span style={{ color: "var(--secondary-color3)" }}>Fruit</span> International
                        </h1>
                    </div>
                    <nav>
                        <ul className="nav__links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <blockquote className="hero__quote">
                    Welcome to <b>Diamond <span style={{ color: "var(--secondary-color3)" }}>Fruits</span> International</b>, your <b>B2B</b> destination for top-notch fruit import and export services. Explore efficient and <b>cost-effective global trade</b> with us!
                </blockquote>
                <div onClick={onContactClick} className="hero__btn">
                    <Button
                        size={{ width: screenWidth <= 500 ? 200 : 400, height: screenWidth <= 500 ? 35 : 55 }}
                        color="var(--tertiary-color)"
                        name={"Contact for More Details"}
                        fontSize={"16px"}
                        backgroundColor="var(--primary-color)"
                    />
                </div>
            </div>
            <div className="hero__content-2"></div>
        </section>
    );
};

export default HeroSection;
