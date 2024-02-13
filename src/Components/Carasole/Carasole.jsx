import React from 'react'
import { Carousel } from 'react-bootstrap';
import slider1 from '../../Assets/images/Trucks_road-scaled-1.webp';
import slider2 from '../../Assets/images/TuSimple_Self_Drving_Truck_4_copy.webp'
import slider3 from '../../Assets/images/truck3-1.webp'

function Carasole() {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    height={10}
                    
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        // <Carousel data-bs-theme="dark">
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={slider1}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h5>First slide label</h5>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={slider2}
        //             alt="Second slide"
        //         />
        //         <Carousel.Caption>
        //             <h5>Second slide label</h5>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={slider3}
        //             alt="Third slide"
        //         />
        //         <Carousel.Caption>
        //             <h5>Third slide label</h5>
        //             <p>
        //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>




    )
}

export default Carasole
