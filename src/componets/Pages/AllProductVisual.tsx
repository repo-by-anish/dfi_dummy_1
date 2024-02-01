import { useLocation } from "react-router-dom";
import { useData } from "../../api/fetctData";
import Products from "../Sections/Products";
import Skeleton from '@mui/material/Skeleton';
import LazyLoad from "react-lazy-load";
import useTitle from "../../api/useTitle";
const AllProductVisual = (): JSX.Element => {
    useTitle("All Products");
    const { products, isLoading } = useData();
    const location = useLocation();
    
    let content;

    if (isLoading) {
        content = (
            <section>
                <div className="products__header">
                    <p className="path">{location.pathname}</p>
                    <h1>All Products</h1>
                </div>
                <div className="all_product_visual">
                    <Skeleton variant="rectangular" height={200} animation="wave" />
                </div>
            </section>
        );
    } else {
        content = (
            <LazyLoad>
                <section>
                    <div className="products__header">
                        <p className="path">{location.pathname}</p>
                        <h1>All Products</h1>
                    </div>
                    <div className="all_product_visual">
                        <Products products_to_render={products} />
                    </div>
                </section>
            </LazyLoad>
        );
    }

    return content;
}

export default AllProductVisual;
