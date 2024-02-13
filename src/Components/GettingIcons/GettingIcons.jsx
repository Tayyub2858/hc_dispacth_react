import React from 'react'

import assignment from '../../Assets/images/assignment.webp';
import certificate from '../../Assets/images/certificate-3.webp';
import insurnce from '../../Assets/images/insurance-1.webp';
import letter from '../../Assets/images/letter-1.webp';

function GettingIcons() {
  return (
    <section id="our-process" className="padding work_process">
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
                <div className="heading-title whitecolor wow fadeInUp" data-wow-delay="300ms">
                    <span style={{color: "#36a3a3"}}>Quisque tellus risus, adipisci </span>
                    <h2 className="font-normal" style={{color: "#36a3a3"}}>Getting Started Is Easy </h2>
                </div>
            </div>
        </div>
        <div className="row">
            <ul className="process-wrapp">
                <li className="whitecolor wow fadeIn" data-wow-delay="300ms">
                    <img src={assignment} style={{width: "100px;", height: "90px"}} alt=""/>
                    <h3 className="fontbold bottom20" style={{color: "#36a3a3"}}>Notice Of Assignment</h3>
                </li>
                <li className="whitecolor wow fadeIn" data-wow-delay="400ms">
                    <img src={certificate} style={{width: "100px;", height: "90px"}} alt=""/>
                    <h3 className="fontbold bottom20" style={{color: "#36a3a3"}}>W9
                        Certificate</h3>
                </li>
                <li className="whitecolor wow fadeIn active" data-wow-delay="500ms">
                    <img src={insurnce} style={{width: "100px;", height: "90px"}} alt=""/>
                    <h3 className="fontbold bottom20" style={{color: "#36a3a3"}}>Insurance Certificate</h3>
                </li>
                <li className="whitecolor wow fadeIn" data-wow-delay="600ms">
                    <img src={letter} style={{width: "100px;", height: "90px"}} alt=""/>
                    <h3 className="fontbold bottom20" style={{color: "#36a3a3"}}>MC Authority Letter</h3>
                </li>
                <li className="whitecolor wow fadeIn" data-wow-delay="700ms">
                    <img src={assignment} style={{width: "100px;", height: "90px"}} alt=""/>
                    <h3 className="fontbold bottom20" style={{color: "#36a3a3"}}>Ware Houses</h3>
                </li>
            </ul>
        </div>
    </div>
</section>
  )
}

export default GettingIcons
