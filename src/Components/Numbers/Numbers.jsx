import React from 'react'
import CountUp from 'react-countup';

function Numbers() {
   
    return (
        <div className="container">
            <div className="heading-title  wow fadeInLeft" style={{marginTop:"30px"}} data-wow-delay="200ms">
                <h2 className=" darkcolor font-bold  text-center text-md-center">Our Numbers</h2>
                <p className="text-center font-bold">We Don’t Hide Our <span style={{color:"#026cb8" }}>Achievement</span> Because
                    We Are Proud Of Them</p>
            </div>
            <div className="row" style={{marginTop: "5%"}}>
                <div className="col-md-4 mb-3">
                    <div className="card wow fadeInLeft" data-wow-delay="200ms">
                        <div className="card-body">
                            <div className="counters card-number">
                           
                               <CountUp delay={2} end={250} />+
                            </div>
                            <h3 className="card-title">Current Trucks</h3>
                            <p className="card-text">With A Constantly Expanding Driver Pool, We Are The Leading Source For
                                Dispatch Services .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card wow fadeInUp" data-wow-delay="200ms">
                        <div className="card-body" style={{textAlign: "center"}}>
                            <div className="counters card-number">
                            <CountUp delay={2} end={50} />+
                                {/* <span className="count_nums" data-to="50" data-speed="3000"></span> */}
                            </div>
                            <h3 className="card-title">Certified Dispatchers</h3>
                            <p className="card-text">We Only Choose The Very Best Applicants, And After Our Training And
                                Examination, They Are Certified.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card wow fadeInRight" data-wow-delay="200ms">
                        <div className="card-body" style={{textAlign: "center"}}>
                            <div className="counters card-number">
                            <CountUp delay={2} end={10} />+
                                {/* <span className="count_nums" data-to="10" data-speed="3000"></span> */}
                            </div>
                            <h3 className="card-title ">Years On The Market</h3>
                            <p className="card-text">Established In 2012 For A Small Business, We Are Now The Market Leader In
                                The US For Dispatch Services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numbers
