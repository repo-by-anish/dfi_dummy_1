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

const HomeSection = (): JSX.Element => {
    useTitle("Diamond Fruits International");
    const { isLoading } = useData();

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
                    initial={{ y: 350, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
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
            </main>
        );
    }

    return content;
};

export default HomeSection;
