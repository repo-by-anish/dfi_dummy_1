import "./pages.css"
const AboutUs = (): JSX.Element => {

    return (
        <div className="about_us mt-140">
            <h1>About Us</h1>
            <hr />
            <div className="abt_content">
                <h2 className="abt_text">Welcome to Diamond Fruits International-DFI!</h2>
                <p>At DFI, we believe in the power of freshness and sustainability. Established with a passion for bringing the finest organic fruits to India and beyond, we've become a trusted partner in the import and export industry.</p>
                <ul className="abt_items">
                    <li className="abt_item">
                        <h2>Our Mission</h2>
                        <p>Our mission is simple – to provide access to high-quality, organic fruits while promoting a healthier and sustainable lifestyle. We strive to be the go-to source for businesses seeking fresh and wholesome produce.</p>
                    </li>
                    <li className="abt_item">
                        <h2>What Sets Us Apart</h2>
                        <ul className="abt_items">
                            <li>
                                <h3>Quality Assurance</h3>
                                <p>We take pride in our commitment to quality. Our fruits undergo rigorous testing and inspection processes to ensure they meet the highest standards. From farm to table, we prioritize freshness and nutritional value.</p>
                            </li>
                            <li>
                                <h3>Sustainability</h3>
                                <p>DFI is dedicated to sustainable practices. We work closely with farmers and suppliers who share our commitment to environmentally friendly and ethical farming methods. Our aim is to contribute to a greener planet and support communities along the way.</p>
                            </li>
                            <li>
                                <h3>Wide Range of Offerings</h3>
                                <p>Explore a diverse range of organic offerings tailored to meet your business needs. From succulent tropical fruits to crisp, seasonal delights, DFI has a wide selection that caters to various industries.</p>
                            </li>
                        </ul>
                    </li>
                    <li className="abt_item">
                        <h2>Our Story</h2>
                        <p>Founded by a team of industry experts, DFI emerged from the vision of making quality organic fruits accessible globally. With years of experience, we've cultivated strong relationships with farmers and partners, ensuring a seamless supply chain.</p>
                    </li>
                    <li className="abt_item">
                        <h2>Core Values</h2>
                        <ul className="abt_items">
                            <li>
                                <h3>Integrity</h3>
                                <p>Integrity is the backbone of our operations. We conduct business with transparency, honesty, and respect, fostering long-term relationships with our clients, suppliers, and stakeholders.</p>
                            </li>
                            <li>
                                <h3>Innovation</h3>
                                <p>Innovation drives us forward. We continuously explore new technologies and sustainable farming practices to enhance the quality and efficiency of our processes.</p>
                            </li>
                            <li>
                                <h3>Customer-Centric Approach</h3>
                                <p>Our customers are at the heart of everything we do. We prioritize your needs, providing personalized solutions and reliable service that exceeds expectations.</p>
                            </li>
                        </ul>
                    </li>
                    <li className="abt_item">
                        <h2>Get in Touch</h2>
                        <p>Whether you're a distributor, retailer, or just a fruit enthusiast, we invite you to join us on this journey. Experience the freshness, quality, and dedication that define Diamond Fruits International.</p>
                    </li>
                    <p className="thank_lst">
                        Thank you for choosing DFI – Your Trusted Partner in Freshness!
                    </p>
                </ul>
            </div>
        </div>
    )
}

export default AboutUs