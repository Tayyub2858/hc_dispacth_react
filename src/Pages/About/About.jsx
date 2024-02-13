import React from 'react'
import aboutus from '../../Assets/images/aboutus.jpg'
function About() {
    return (
        <>
            <section id="main-banner-page" className="position-relative page-header about-header parallax section-nav-smooth">
                <div className="overlay overlay-dark opacity-6"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="page-titles whitecolor text-center padding_top padding_bottom">
                                <h2 className="font-xlight">New Ideas</h2>
                                <h2 className="font-bold">Inspires Us To Make</h2>
                                <h2 className="font-xlight">Great Works</h2>
                                <h3 className="font-light pt-2">The Best Multipurpose Template In Market</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg title-wrap">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 whitecolor">
                                <h3 className="float-left">About Our Company</h3>
                                <ul className="breadcrumb top10 bottom10 float-right">
                                    <li className="breadcrumb-item hover-light">Home</li>
                                    <li className="breadcrumb-item hover-light">About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aboutus" className="padding_top padding_bottom">
                <div className="container aboutus">
                    <div className="row align-items-center">

                        <div className="col-lg-6 offset-lg-1 col-md-6 padding_bottom_half text-center text-md-left">
                            <h2 className="darkcolor font-normal bottom30">RESPONSIBILITY</h2>
                            <p className="bottom35">We dispatcher offers dispatching services for owner operators and truckk fleets.</p>
                            <p className="bottom35">We advise drivers and carrier businesses to use a variety of services in addition to load searches, such as billing, paperwork management, broker and shipper interactions, SAFETY DOT compliance, and much more.</p>
                            <p className="bottom35">We Dispatch provides you with dedicated dispatch services so you choose from any truck loads we have to offer at the highest cost per mile we can find.</p>
                            <p className="bottom35">We establish bonds with our fleets and treat them like teams. Our carrier testing procedure works much like an interview, setting the right criteria to make sure that both sides are a good match. Our reputation is far more important than taking on another carrier.</p>

                        </div>
                        <div className="col-lg-5 col-md-5 padding_bottom_half">
                            <div className="image"><img alt="SEO" src={aboutus}/></div>

                        </div>
                    </div>
                    <div className="row  align-items-center">
                        <div className="col-lg-5  col-md-6 padding_top_half text-center text-md-left">
                            <h2 className="darkcolor font-normal bottom30">The Best Skillset Available in <span className="defaultcolor">Our Market</span> </h2>
                            <p className="bottom35">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit ultrices maximus. </p>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-6 padding_top_half">
                            <div className="progress-bars">
                                <div className="progress">
                                    <p>Customer Support</p>
                                    <div className="progress-bar gradient-bg" data-value="94">
                                        <span className="bg-blue whitecolor">94%</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <p>Available In 170 Countries</p>
                                    <div className="progress-bar gradient-bg" data-value="92">
                                        <span className="bg-blue whitecolor">92%</span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <p>Shipping Rate</p>
                                    <div className="progress-bar gradient-bg" data-value="86">
                                        <span className="bg-blue whitecolor">86%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container" style={{marginTop: "10%"}}>
                <div className="row" style={{marginTop: "5%"}}>
                    <div className="col-md-6 mb-3 wow fadeInLeft" data-wow-delay="100ms" >
                        <div className="card-speacilize" style={{background:"linear-gradient(131deg, #0077B5 40%, rgba(0,212,255,1) 100%)", color: "white"}}>
                            <div className="card-body" >
                                <h3 className="card-title" style={{fontSize: "40px;", fontWeight: "bold", marginTop: "10%"}}>OUR VISION</h3>
                                <p className="card-text " style={{padding: "15px 20px 5px 20px;", textAlign: "justify"}}>We are trying to make it easy for the people out there to dispatch their carriers by using the latest techniques. Our skilled emopolyees are trained to improve their communication skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 wow fadeInRight" data-wow-delay="100ms">
                        <div className="card-speacilize " style={{background:" linear-gradient(131deg, #0077B5 40%, rgba(0,212,255,1) 100%)", color: "white"}}>
                            <div className="card-body" style={{textAlign: "center"}}>
                                <h3 className="card-title" style={{fontSize: "40px", fontWeight: "bold", marginTop: "10%"}}>OUR MISSION</h3>
                                <p className="card-text " style={{padding: "15px 20px 5px 20px", textAlign: "justify"}}>Commitment is always our first priority. Our goal is to provide each truck driver a dedicated dispatcher who will search for the greatest freight loads  and keep you loaded on a weekly basis.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About;
