import './App.css';
import Footer from './componets/Sections/Footer';
import LayOut from './componets/layouts/LayOut';
import { Routes, Route } from "react-router-dom"
import AllProductVisual from './componets/Pages/AllProductVisual';
import HomeSection from './componets/Sections/HomeSection';
import ProductsLayOut from './componets/layouts/ProductsLayOut';
import ProductRedirectPage from './componets/Pages/ProductRedirectPage';
import Notch from './componets/Sections/Notch';


function App() {
  return (
    <>
    <Notch />
      <Routes>
        <Route path="/*" element={<LayOut />}>
          <Route index element={<HomeSection />} />
          <Route path="products" element={<ProductsLayOut />}>
            <Route index element={<AllProductVisual/>} />
            <Route path=":id" element={<ProductRedirectPage />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}


export default App;
