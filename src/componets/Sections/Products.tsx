import React from "react";
import ProductCard from "../basics/ProductCard";
import { prodDataType } from "../../api/dummydata";

const Products: React.FC<{ products_to_render: prodDataType[] }> = ({ products_to_render }): JSX.Element => {
    
    return (
        <div className="products">
            <div className="products_container">
                {products_to_render?.map((product, index) => (
                    <div className="product_item" key={index}>
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
