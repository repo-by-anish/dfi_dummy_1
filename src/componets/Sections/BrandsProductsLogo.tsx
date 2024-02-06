import { Card, CardMedia } from "@mui/material";
import { screenWidth, useData } from "../../api/fetctData";
import MySlider from "../basics/MySlider";
const BrandsProductsLogo = () => {
    const { brandLogos } = useData();
    const brandLogoComponents = (brandLogos.map((logo) => (
        <Card
            key={logo.id}
            sx={{
                maxWidth: 345,
                margin: '0 auto',
                boxShadow: 'none',
                cursor: 'pointer',
                paddingTop: screenWidth < 600 ? '2px' : '4rem',
            }}
        >
            <CardMedia
                component="img"
                width="140"
                image={logo.logo_url}
                alt={`Brand Logo ${logo.name}`}
            />
        </Card>
    )))
    return (
        <div className="brands_products_logo">
            <h1 className="brand_products_logo">
                Our Brand
            </h1>
            <MySlider Component={brandLogoComponents} slidesToShow={6} slidesToScroll= {1} />
        </div>
    )
}

export default BrandsProductsLogo;