import Button from "./Button";
import { prodDataType } from "../../api/dummydata";
import { screenWidth, useData } from "../../api/fetctData";
import LazyLoad from "react-lazy-load";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ prod_id, prod_name, prod_desc, prod_img, prod_price, prod_size, prod_width }: prodDataType) => {
  const navigate = useNavigate()
  const clickHandler = (id: number) => {
    const url = `/products/${id}`;
    navigate(url);
  }


  const { isLoading } = useData();

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <div className="product__card__container touch">
        <div className="product__card">
          <div className="product__img">
            <LazyLoad>
              <img
                width={prod_width?prod_width:screenWidth>=600?screenWidth>=900?160:120:100}
                src={prod_img[0]}
                alt="Product Poster"
                className="product__poster"
              />
            </LazyLoad>
          </div>
          <div className="product__info">
            <h2>{prod_name}</h2>
            <p className="product__description">{prod_desc}</p>
          </div>
        </div>
        <div className="product__price">
          <div className="prd_prc_l">
            <h3>₹ {prod_price}</h3> <span>{prod_size}</span>
          </div>
          <div onClick={() => clickHandler(prod_id)} className="prd_prc_r">
            <Button
              size={{ width: screenWidth < 500 ? 75 : 110, height: screenWidth < 500 ? 25 : 30 }}
              color="var(--tertiary-color)"
              name={"Read More"}
              fontSize={screenWidth < 500 ? "10px" : "16px"}
              backgroundColor="var(--primary-color)"
            />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default ProductCard;
