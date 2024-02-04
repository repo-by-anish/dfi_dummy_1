import { useLocation } from "react-router-dom";
import { useData } from "../../api/fetctData";
import Products from "../Sections/Products";
import useTitle from "../../api/useTitle";

const AllProductVisual = (): JSX.Element => {
    useTitle("All Products");
    const { products, isLoading } = useData();
    const location = useLocation();
    
    return (
        <section className="mt_40">
            <div className="products__header">
                <p className="path">{location.pathname}</p>
                <h1>All Products</h1>
            </div>
            <div className="all_product_visual">
                {isLoading ? (
                    // You can optionally show a loading spinner or message here if needed
                    <p>Loading...</p>
                ) : (
                    <Products products_to_render={products} />
                )}
            </div>
        </section>
    );
}

export default AllProductVisual;
