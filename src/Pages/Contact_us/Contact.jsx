import React from 'react'

function Contact() {
    return (
        <div>
            <section id="main-banner-page" className="position-relative page-header contact-header section-nav-smooth parallax">
                <div className="overlay overlay-dark opacity-6"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="page-titles whitecolor text-center padding">
                                <h2 className="font-bold"> Contact Us</h2>
                                {/* <!-- <h3 className="font-light py-2">We'd Love To Here From You.</h3> --> */}
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg title-wrap mt-n5">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 whitecolor">
                                <h3 className="float-left">Contact Us</h3>
                                <ul className="breadcrumb top10 bottom10 float-right">
                                    <li className="breadcrumb-item hover-light"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item hover-light">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stayconnect1" className="bglight position-relative padding_top padding_bottom_half noshadow">
                <div className="container whitebox">
                    <div className="widget py-5">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeIn mt-n3" data-wow-delay="300ms">
                                <h2 className="heading bottom30 darkcolor font-light2 pt-1"><span className="font-normal">How Can We Help You</span> Us
                                    <span className="divider-center"></span>
                                </h2>
                                <div className="col-md-8 offset-md-2 bottom35">

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 order-sm-2">
                                <div className="contact-meta px-2 text-center text-md-left">
                                    <div className="heading-title heading_small">
                                        <span className="defaultcolor mb-3">HC Dispatch</span>
                                        {/* <!-- <h3 className="darkcolor font-normal mb-4">Our London Agency</h3> --> */}
                                    </div>
                                    <p className="bottom10">Address: 34 Aspen, Knolls Staten, Island NY, 10312</p>
                                    <p className="bottom10">(917) 775-0716</p>

                                    <p className="bottom10"><a href="mailto:support@hcdispatch.com">support@hcdispatch.com</a></p>
                                    <p className="bottom10">Mon-Fri: 9am-7pm</p>

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="heading-title  wow fadeInUp" data-wow-delay="300ms">
                                    <form className="getin_form wow fadeInUp" data-wow-delay="400ms" id="contact-form-data">
                                        <div className="row px-2">
                                            <div className="col-md-12 col-sm-12" id="result"></div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label for="name1" className="d-none"></label>
                                                    <input className="form-control" id="name1" type="text" placeholder="Name:" required name="userName"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label for="email1" className="d-none"></label>
                                                    <input className="form-control" type="email" id="email1" placeholder="Email:" name="userEmail"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label for="message1" className="d-none"></label>
                                                    <textarea className="form-control" id="message1" placeholder="Message:" required name="userMessage"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <button type="button" id="submit_btn1" className="contact_btn button gradient-btn w-100">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="widget text-center top60 w-100 p-0">
                                <div className="contact-box">
                                    <span className="icon-contact bluecolor"><i className="fas fa-mobile-alt"></i></span>
                                    <p className="bottom0"><a href="tel:9177750716">(917) 775-0716</a></p>
                                    <p className="bottom0"><a href="tel:+9177750716">(917) 775-0716</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="widget text-center top60 w-100 p-0">
                                <div className="contact-box">
                                    <span className="icon-contact bluecolor"><i className="fas fa-map-marker-alt"></i></span>
                                    <p className="bottom0">34 Aspen, Knolls Staten,</p>
                                    <p className="d-block"> Island NY, 10312  </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="widget text-center top60 w-100 p-0">
                                <div className="contact-box">
                                    <span className="icon-contact bluecolor"><i className="far fa-envelope"></i></span>
                                    <p className="bottom0"><a href="mailto:admin@website.com">support@hcdispatch.com</a></p>
                                    <p className="bottom0"><a href="mailto:admin@website.com">support@hcdispatch.com</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="widget text-center top60 w-100 p-0">
                                <div className="contact-box">
                                    <span className="icon-contact bluecolor"><i className="far fa-clock"></i></span>
                                    <p className="bottom15">UTC−05:00 <span className="d-block">UTC+01:00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
