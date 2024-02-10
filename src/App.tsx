// import './App.css';
import Footer from './componets/Sections/Footer';
import LayOut from './componets/layouts/LayOut';
import { Routes, Route } from "react-router-dom"
import AllProductVisual from './componets/Pages/AllProductVisual';
import HomeSection from './componets/Sections/HomeSection';
import ProductsLayOut from './componets/layouts/ProductsLayOut';
import ProductRedirectPage from './componets/Pages/ProductRedirectPage';
import Notch from './componets/Sections/Notch';
import Navigation from './componets/Sections/Navigation';
import Scroller from './componets/basics/Scroller';
import Progressbar from './componets/basics/Progressbar';
import PageNotFound from './componets/Pages/PageNotFound';
import AboutUs from './componets/Pages/AboutUs';
function App() {
  return (
    <>
      <Progressbar />
      <Navigation />
      <Notch />
      <Routes>
        <Route path="/*" element={<LayOut />}>
          <Route index element={<HomeSection />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="products" element={<ProductsLayOut />}>
            <Route index element={<AllProductVisual />} />
            <Route path=":id" element={<ProductRedirectPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer />
      <Scroller />
    </>
  );
}


export default App;
