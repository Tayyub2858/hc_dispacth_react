import React from 'react'
import footerlogo from '../../Assets/images/hc-dispatch-logo-white.webp'
function Footer() {
    return (
        <footer id="site-footer" className=" bgprimary padding_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer_panel padding_bottom_half bottom20">
                            <a href="/" className="footer_logo bottom25"><img
                                src={footerlogo} alt="HC Dispatch"/></a>
                            <p className="whitecolor bottom25">Keep away from people who try to belittle your ambitions Small
                                people always do that but the really great Friendly.</p>
                            <div className="d-table w-100 address-item whitecolor bottom25">
                                <span className="d-table-cell align-middle"><i className="fas fa-mobile-alt"></i></span>
                                <p className="d-table-cell align-middle bottom0">
                                    (917) 775-0716<a className="d-block" href="mailto:support@hcdispatch.com">support@hcdispatch.com</a>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                            <h3 className="whitecolor bottom25">USEFUL LINKS</h3>
                            <ul className="links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="news-1.html">Latest News</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/">Faq's</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                            <h3 className="whitecolor bottom25">OUR SERVICES</h3>
                            <ul className="links">
                                <li><a href="/services">ASSIGNING LOADS</a></li>
                                <li><a href="/services">BILLING PAPERWORK</a></li>
                                <li><a href="/services">FACTORING</a></li>
                                <li><a href="/services">DRIVER RESPONSE UNIT</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer_panel padding_bottom_half bottom20">
                            <h3 className="whitecolor bottom25">INFORMATION</h3>
                            <p className="whitecolor bottom25">34 Aspen, Knolls Staten, Island NY, 10312
                            </p>
                            <p className="whitecolor bottom25">support@hcdispatch.com
                            </p>
                            <p className="whitecolor bottom25">
                                (917) 775-0716
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
