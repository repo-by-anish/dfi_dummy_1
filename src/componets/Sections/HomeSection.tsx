import { motion } from "framer-motion";
import { useData } from "../../api/fetctData";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import Advertisement from "./Advertisement";
import Partners from "./Partners";
import Testimonials from "./Testmonials";
import BlogSlider from "./BlogSlider";
import useTitle from "../../api/useTitle";
import BrandsProductsLogo from "./BrandsProductsLogo";
// import { useState } from "react";
import ScrollToTop from "../basics/ScrollToTop";

const HomeSection = (): JSX.Element => {
    useTitle("Diamond Fruits International");
    const { isLoading } = useData();


    // const ScrollButton = () => {

    //     const [visible, setVisible] = useState(false)

    //     const toggleVisible = () => {
    //         const scrolled = document.documentElement.scrollTop;
    //         if (scrolled > 300) {
    //             setVisible(true)
    //         }
    //         else if (scrolled <= 300) {
    //             setVisible(false)
    //         }
    //     };

    //     const scrollToTop = () => {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //             /* you can also use 'auto' behaviour 
    //                in place of 'smooth' */
    //         });
    //     };

    //     window.addEventListener('scroll', toggleVisible);

    // }
    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else {
        content = (
            <main className="overflow_x mt-160">
                <motion.div
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <HeroSection />
                </motion.div>

                <motion.div
                    initial={{ x: +350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <ProductsSection />
                </motion.div>
                <motion.div
                    initial={{ x: 350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <Advertisement />
                </motion.div>
                <motion.div
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <BrandsProductsLogo />
                </motion.div>
                <motion.div
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <Partners />
                </motion.div>
                <motion.div
                    initial={{ x: +350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <Testimonials />
                </motion.div>
                <motion.div
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <BlogSlider />
                </motion.div>
                <ScrollToTop />
            </main>
        );
    }

    return content;
};

export default HomeSection;
