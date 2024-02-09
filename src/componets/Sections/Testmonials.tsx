import Carousel from 'react-material-ui-carousel'
import TestmonialItem from "./TestmonialItem";

const testmonials = [
    {
        TestmonialImg:"https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@690d89620eebdd900c23db83c445d37d33f5f34e/dp_img.png",
        TestmonialOwner:"Anish Kumar",
        testmonialText:"DFI has revolutionized the way I source fresh, organic fruits. The quality is unmatched, and their commitment to excellence is evident in every shipment. Trust DFI for the finest fruits in the market!"
    },
    {
        TestmonialImg:"https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@690d89620eebdd900c23db83c445d37d33f5f34e/dp_img.png",
        TestmonialOwner:"Anish Kumar",
        testmonialText:"Running a fruit-centric business demands top-notch suppliers. DFI has been our go-to for years. The diverse range of organic offerings and their impeccable service make them an invaluable partner. Highly recommended!"
    },
    {
        TestmonialImg:"https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@690d89620eebdd900c23db83c445d37d33f5f34e/dp_img.png",
        TestmonialOwner:"Anish Kumar",
        testmonialText:"As someone passionate about health, finding high-quality organic fruits is crucial. DFI's commitment to organic excellence is truly commendable. Their fruits are not just delicious but also nourishing for a healthier lifestyle."
    },
    {
        TestmonialImg:"https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI@690d89620eebdd900c23db83c445d37d33f5f34e/dp_img.png",
        TestmonialOwner:"Anish Kumar",
        testmonialText:"DFI consistently delivers excellence. From their easy-to-navigate website to the prompt delivery of premium fruits, every experience is delightful. DFI has earned my loyalty, and I'm a proud repeat customer!"
    }
]
const Testmonials = () => {
    return (
        <section className="testmonials">
            <h1 className="testmonials__title">Personalize your trading experience with curated benefits</h1>
            <Carousel animation="slide"duration={1500}>
                {
                    testmonials.map((item, i) => <TestmonialItem key={i} {...item} />)
                }
            </Carousel>
        </section>
    )
}

export default Testmonials;