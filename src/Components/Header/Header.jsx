import React from 'react'
import  logo from '../../Assets/images/hc-dispatch-logo-black.webp';

function Header() {
    return (
        <>

            <header className="site-header">
                <nav className="navbar navbar-expand-lg static-nav">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo"/>
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {/* <Link to={'/'}>home</Link> */}
                                    <a className="nav-link" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/carriersetup">CARRIER SETUP</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">CPM CALCULATER</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact">CONTACT US</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* <!--side menu open button--> */}
                    <a className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
                        <span className="bg-dark"></span> <span className="bg-dark"></span> <span className="bg-dark"></span>
                    </a>
                </nav>
                {/* <!-- side menu --> */}
                <div className="side-menu opacity-0 gradient-bg">
                    <div className="overlay"></div>
                    <div className="inner-wrapper">
                        <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                        <nav className="side-nav w-100">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/carriersetup">CARRIER SETUP</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cpm_calculater">CPM CALCULATER</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">CONTACT US</a>
                                </li>

                            </ul>
                        </nav>
                        <div className="side-footer w-100">

                            {/* <p className="whitecolor">&copy; 2023 MegaOne. Made With Love by ThemesIndustry</p> */}
                        </div>
                    </div>
                </div>
                <div id="close_side_menu" className="tooltip"></div>
                {/* <!-- End side menu --> */}
            </header>
        </>
    )
}

export default Header
