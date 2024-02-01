import { useParams } from "react-router-dom";
import { screenWidth, useData } from "../../api/fetctData";
import LazyLoad from "react-lazy-load";
import "./pages.css"
import Button from "../basics/Button";
import { prodDataType } from "../../api/dummydata";
import ProductCard from "../basics/ProductCard";

const ProductRedirectPage = (): JSX.Element => {
    const { id } = useParams();
    const { products } = useData();
    const product = products.find((product) => product.prod_id === Number(id));
    

    const shuffleArray = (products: prodDataType[]) => {
        let currentIndex = products.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [products[currentIndex], products[randomIndex]] = [products[randomIndex], products[currentIndex]];
        }
        return products;
    };

    const shuffledProducts = shuffleArray(products);

    const SimilarProducts = shuffledProducts.filter((product) => product.prod_id !== Number(id)).slice(0, 4);

    return (
        <div className="product_redirect_page">
            <div className="pr_main">
                <div className="prm_left">
                    <div className="prm_img">
                        <LazyLoad>
                            <img
                                src={product?.prod_img[product?.prod_img.length - 2]}
                                width={screenWidth>600?550:300}
                                alt={product?.prod_name}
                            />
                        </LazyLoad>
                    </div>
                    <div className="prm_action">
                        <div className="price">
                            <h1>{product?.prod_price}</h1>
                            <span>{product?.prod_size}</span>
                        </div>
                        <div className="action_button">
                            <Button name="Make an Order" size={{ width: screenWidth>600?300:200, height: screenWidth>600?50:35 }} color="#fff" backgroundColor="var(--primary-color)" fontSize="22px" />
                        </div>
                    </div>
                </div>
                <div className="prm_right">
                    <div className="prm_headings">
                        <h1>{product?.prod_name}</h1>
                        <p>{product?.prod_desc}</p>
                    </div>
                    <div className="prm_spc_table">
                        <table>
                            <tbody className="table_body">
                                {product?.prod_specification &&
                                    Object.entries<any>(product.prod_specification).map(([key, value]) => (
                                        <tr key={key}>
                                            <td>{
                                                key.split("_").join(" ")
                                                }</td>
                                            <td>{value}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="prm_prd_about">
                        <p> {product?.prod_about} <a href="#">Read More</a></p>
                    </div>
                </div>
            </div>
            <div className="pr_similarproducts">
                <h2 className="pr_similarproducts_title">Similar Products</h2>
                <div className="sim_products">
                    {SimilarProducts?.map((product, index) => (
                        <div key={index}>
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductRedirectPage