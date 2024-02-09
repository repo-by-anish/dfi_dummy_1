import Counter from "../basics/Counter";

const Partners = () => {
    return (
        <section id="about" className="partners-section">
            <h1 className="partners-section__title">Our Reach and Impact</h1>
            <div className="psc_main">
                <div className="partners-section__content psc_1">
                    <h1><Counter from={0} to={100} />+</h1>
                    <h1 className="ps__title">Global Network</h1>
                    <p className="psc__quote">We have established direct partnerships with organic fruit producers worldwide. By eliminating intermediaries, we ensure that you receive fruits at their peak freshness, untouched by unnecessary delays.</p>
                </div>
                <div className="partners-section__content psc_2">
                    <h1><Counter from={0} to={299} />+</h1>
                    <h1 className="ps__title">Business Clients</h1>
                    <p className="psc__quote">Our commitment to quality is unwavering. We supply businesses with organic fruits that meet the highest industry standards, ensuring that every piece is a testament to freshness and flavor.</p>
                </div>
                <div className="partners-section__content psc_3">
                    <h1><Counter from={0} to={98} />+</h1>
                    <h1 className="ps__title">Variety of Fruits Imported</h1>
                    <p className="psc__quote">Savor the global essence of Diamond Fruits International – a curated assortment of imported fruits bringing a burst of international flavors to your table.</p>
                </div>
            </div>
        </section>
    );
};

export default Partners;
