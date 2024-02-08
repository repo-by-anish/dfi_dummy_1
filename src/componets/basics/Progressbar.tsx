
import { motion, useScroll } from 'framer-motion';
const Progressbar = () => {

    const { scrollYProgress } = useScroll();
    return (
        <motion.div
        style={{ scaleX: scrollYProgress, backgroundColor: 'var(--primary-color)', height: '5px', position: 'sticky', top: 0, left: 0, transformOrigin: '0%', zIndex: 12, borderRadius: '0 0 5px 0' }}
        viewport={{ once: true }}
        className="progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    )
}

export default Progressbar