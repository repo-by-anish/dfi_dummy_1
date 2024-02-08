import Counter from "../basics/Counter";

const Partners = () => {
    return (
        <section id="about" className="partners-section">
            <h1 className="partners-section__title">Our Reach and Impact</h1>
            <div className="psc_main">
                <div className="partners-section__content psc_1">
                    <h1><Counter from={0} to={99} />+</h1>
                    <h1 className="ps__title">Global Network</h1>
                    <p className="psc__quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, libero. Beatae sequi optio perspiciatis ea nesciunt, magnam voluptatem aperiam voluptatum illo officiis, quas corporis blanditiis impedit, similique consectetur autem. Excepturi.</p>
                </div>
                <div className="partners-section__content psc_2">
                    <h1><Counter from={0} to={299} />+</h1>
                    <h1 className="ps__title">Business Clients</h1>
                    <p className="psc__quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, libero. Beatae sequi optio perspiciatis ea nesciunt, magnam voluptatem aperiam voluptatum illo officiis, quas corporis blanditiis impedit, similique consectetur autem. Excepturi.</p>
                </div>
                <div className="partners-section__content psc_3">
                    <h1><Counter from={0} to={699} />+</h1>
                    <h1 className="ps__title">Variety of Fruits Imported</h1>
                    <p className="psc__quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, libero. Beatae sequi optio perspiciatis ea nesciunt, magnam voluptatem aperiam voluptatum illo officiis, quas corporis blanditiis impedit, similique consectetur autem. Excepturi.</p>
                </div>
            </div>
        </section>
    );
};

export default Partners;
