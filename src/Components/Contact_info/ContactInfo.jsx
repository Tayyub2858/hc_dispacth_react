import React from 'react'

function ContactInfo() {
  return (
    <div>
      <section id="bg-counters" className="padding bg-counters parallax">
    <div className="container">
        <div className="row wow fadeInRight" data-wow-delay="100ms" style={{marginTop: "5%"}}>
            <div className="col-md-4 mb-3">
                <div className="card-contact">
                    <div className="card-body">
                        <span className="bottom25" style={{fontSize: "50px" ,color: "#36a3a3"}}><i
                                className="fas fa-envelope"></i></span>
                        <h3 className="bottom10" style={{color: "#36a3a3", fontWeight: "bold"}}><a
                                href="mailto:support@hcdispatch.com">Email Us</a></h3>
                        <p>support@hcdispatch.com</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card-contact">
                    <div className="card-body" style={{textAlign: "center"}}>
                        <span className="bottom25" style={{fontSize: "50px" ,color: "#36a3a3"}}><i aria-hidden="true"
                                className="fa fa-phone"></i></span>
                        <h3 className="bottom10" style={{color: "#36a3a3", fontWeight: "bold"}}><a
                                href="/">Call Us</a></h3>
                        <p>(917) 775-0716</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card-contact">
                    <div className="card-body" style={{textAlign: "center"}}>
                        <span className="bottom25" style={{fontSize: "50px" ,color: "#36a3a3"}}><i
                                className="fas fa-map-marker-alt"></i></span>
                        <h3 className="bottom10" style={{color: "#36a3a3", fontWeight: "bold"}}><a
                                href="/">Visit Us</a></h3>
                        <p>34 Aspen, Knolls Staten, Island NY, 10312</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ContactInfo
