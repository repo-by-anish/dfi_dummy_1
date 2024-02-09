import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="footer">
            
            <div className="footer_container">
                <div className="footer_content">
                    <div className="fc_left">
                        <div className="fc_content">
                            <h2 className="fc_title">Address-</h2>
                            <div className="fc__content">
                                <div className="fc_content_details">
                                    <p>DFI</p>
                                    <p>A-12 APMC Marcket Yard</p>
                                    <p>Singena Agrahara</p>
                                    <p>Bangalore, Karnataka</p>
                                    <p>560100</p>
                                    <p>India</p>
                                </div>
                                <div className="contact-number">
                                    <p>+91-83439 86546</p>
                                </div>
                            </div>
                        </div>
                        <div className="fc_content">
                            <h2 className="fc_title">Quick Links-</h2>
                            <div className="fc__content">
                                <div className="fc_content_details">
                                    <p>About Us</p>
                                    <p>Blogs</p>
                                    <p>FAQ</p>
                                    <p>Our Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fc_right">
                        <div className="fc_content">
                            <h2 className="fc_title">Quick Links-</h2>
                            <div className="fc__content">
                                <div className="fc_content_details">
                                    <p>About Us</p>
                                    <p>Blogs</p>
                                    <p>FAQ</p>
                                    <p>Our Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact" className="footer_content">
                    <div className="fc_content">
                        <h2 className="fc_title">Contact Us-</h2>
                        <form className="footer_form" action="">
                            <input type="text" placeholder="Enter your name" required />
                            <input type="email" placeholder="Enter your email" required />
                            <input type="number" placeholder="Enter your number" required />
                            <textarea name="" id="" cols={30} rows={10}></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="footer_copyright">© 2024 Diamond Fruit International. All rights reserved.</p>
        </motion.footer>
    );
};

export default Footer;
