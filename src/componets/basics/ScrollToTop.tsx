import { motion, useScroll, useTransform } from "framer-motion";


const ScrollToTop = () => {

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    return (
        // <motion.div
        //     style={{ opacity }}
        //     className="scroll-to-top"
        //     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        // >
        //     <img height={"200px"} width={"200px"} src="https://w7.pngwing.com/pngs/821/97/png-transparent-black-arrow-up-illustration-arrow-desktop-symbol-up-arrow-angle-triangle-sign.png" alt="up" />
        // </motion.div>
        // <img height={"200px"} width={"200px"} src="https://w7.pngwing.com/pngs/821/97/png-transparent-black-arrow-up-illustration-arrow-desktop-symbol-up-arrow-angle-triangle-sign.png" alt="up" />
        <h1>50000</h1>
    )
}

export default ScrollToTop