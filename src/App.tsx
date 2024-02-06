import './App.css';
import Footer from './componets/Sections/Footer';
import LayOut from './componets/layouts/LayOut';
import { Routes, Route } from "react-router-dom"
import AllProductVisual from './componets/Pages/AllProductVisual';
import HomeSection from './componets/Sections/HomeSection';
import ProductsLayOut from './componets/layouts/ProductsLayOut';
import ProductRedirectPage from './componets/Pages/ProductRedirectPage';
import Notch from './componets/Sections/Notch';
import Navigation from './componets/Sections/Navigation';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress, backgroundColor: 'var(--primary-color)', height: '10px', position: 'sticky', top: 0, left: 0, transformOrigin: '0%', zIndex: 12, borderRadius: '0 0 5px 0' }}
        viewport={{ once: true }}
        className="progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <Navigation />
      <Notch />
      <Routes>
        <Route path="/*" element={<LayOut />}>
          <Route index element={<HomeSection />} />
          <Route path="products" element={<ProductsLayOut />}>
            <Route index element={<AllProductVisual />} />
            <Route path=":id" element={<ProductRedirectPage />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}


export default App;
