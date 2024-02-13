import React from 'react'
import reefer_truc from '../../Assets/images/reefer_truck_freight.png';
import optimized from '../../Assets/images/5d80552f1f232000260e9723_optimized_330_c330x305-0x0-1-1.webp';
import flat_bed_truck from '../../Assets/images/flat-bed-truck-e1696345126363.webp';
import box_truck from '../../Assets/images/container-1-e1696434640544.webp';
import hot_truck from '../../Assets/images/flatbed-e1696345474982.webp';
import power_truck from '../../Assets/images/semi.webp';
function Speacilize() {
  return (
    <div className="container" style={{marginTop: "10%"}}>
        <div className="heading-title  wow fadeInLeft" style={{marginTop:"30px"}} data-wow-delay="200ms">
            <h2 className=" darkcolor font-bold  text-center text-md-center">Equipment We Speacilize</h2>
            <p className="text-center font-bold">Let’s Get These <span style={{color:"#026cb8"}}>Moving</span></p>
        </div>
        <div className="row wow fadeInRight" data-wow-delay="100ms" style={{marginTop: "5%"}}>
            <div className="col-md-4 mb-3">
                <div className="card-speacilize">
                    <div className="card-body">
                        <img src={reefer_truc} width="100" height="200" alt=""/>
                        <h3 className="card-title">48' or 53' Dry Vans</h3>
                        <p className="card-text">If you require a capable dry van dispatcher to handle your dry van freight,
                            conceivable consolidation, or realistic drop and hook</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card-speacilize">
                    <div className="card-body" style={{textAlign: "center"}}>
                        <img src={optimized} width="100" height="100" alt=""/>
                        <h3 className="card-title">48' or 53' Reefers</h3>
                        <p className="card-text">If you require a reefer dispatcher with expertise in temperature-controlled
                            shipment while juggling time-sensitive delivery and monitoring, contact us today.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card-speacilize">
                    <div className="card-body" style={{textAlign: "center"}}>
                        <img src={flat_bed_truck} width="100" height="100" alt=""/>
                        <h3 className="card-title ">48' or 53' Flatbeds</h3>
                        <p className="card-text">Whether you require a flatbed dispatcher to move an over-dimensional item
                            or manage any kind of flat bed, step deck, or double-drop deck trailer.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row wow fadeInLeft" data-wow-delay="100ms">
            <div className="col-md-4 mb-3">
                <div className="card-speacilize">
                    <div className="card-body">
                        <img src={box_truck} width="100" height="100" alt=""/>
                        <h3 className="card-title">Box Trucks</h3>
                        <p className="card-text">Our dispatchers have extensive knowledge and experience in coordinating box
                            truck shipments. They understand the unique requirements and challenges of enclosed
                            transportation.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card-speacilize">
                    <div className="card-body" style={{textAlign: "center"}}>
                        <img src={power_truck} width="100" height="100" alt=""/>
                        <h3 className="card-title ">Power Only</h3>
                        <p className="card-text">You still don't own a trailer, do you? While you seek for your own trailer,
                            we may assist you in starting your business and earning money.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card-speacilize">
                    <div className="card-body" style={{textAlign: "center"}}>
                        <img src={hot_truck} width="100" height="500px" alt=""/>
                        <h3 className="card-title">Hot Shot</h3>
                        <p className="card-text">You might need a hot shot dispatcher to identify multiple modes of
                            transportation in a chain of supplies for different pieces of equipment.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Speacilize
