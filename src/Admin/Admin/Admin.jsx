import React, { useEffect, useState } from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function Admin() {

    const [CarrierSetup, setCarrierSetup] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/CarrierSetup`)
            .then(res => setCarrierSetup(res.data))
            .catch(err => console.log(err));
    })
    console.log(CarrierSetup);
    return (
        <div style={{ padding: '0px 10px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Show All Carrier Setup Data</h1>
            </div>
            <OverlayScrollbarsComponent>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Company Name</th>
                            <th>Company DBA</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>MC</th>
                            <th>UsDot</th>
                            <th>FEIN</th>
                            <th>Address</th>
                            <th>Work Us</th>
                            <th>NUmber Trucks</th>
                            <th>Number Drivers</th>
                            <th>Equipment</th>
                            <th>Invoice</th>
                            <th>MS Authority</th>
                            <th>W9-Form</th>
                            <th>Insurance Certificate</th>
                            <th>Voide Check/NOA</th>
                            <th>Other Documents</th>
                            <th>Status</th>
                            <th>Hear About Us</th>
                        </tr>
                    </thead>
                    <tbody>

                        {CarrierSetup.length > 0 && CarrierSetup.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.company_name}</td>
                                    <td>{data.company_dba}</td>
                                    <td>{data.city}</td>
                                    <td>{data.state}</td>
                                    <td>{data.zip}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mc}</td>
                                    <td>{data.usdot}</td>
                                    <td>{data.fein}</td>
                                    <td>{data.address}</td>
                                    <td>{data.workus}</td>
                                    <td>{data.number_trucks}</td>
                                    <td>{data.numbers_drivers}</td>
                                    <td>{data.equipment}</td>
                                    <td>{data.invoice}</td>
                                    {/* <td>{data.authorityfile}</td> */}
                                    <td ><a href={`http://localhost:3001/uploads/${data.authorityfile}`} download target="_blank" rel="noreferrer"><button style={{backgroundColor:"#36a3a3", color:'white', padding:'5px 15px', borderRadius:'20px'}}>View</button></a></td>
                                    <td><a href={`http://localhost:3001/uploads/${data.wform9}`} download target="_blank" rel="noreferrer"><button style={{backgroundColor:"#36a3a3", color:'white', padding:'5px 15px', borderRadius:'20px'}}>View</button></a></td>
                                    <td><a href={`http://localhost:3001/uploads/${data.insurancefile}`} download target="_blank" rel="noreferrer"><button style={{backgroundColor:"#36a3a3", color:'white', padding:'5px 15px', borderRadius:'20px'}}>View</button></a></td>
                                    <td><a href={`http://localhost:3001/uploads/${data.noafile}`} download target="_blank" rel="noreferrer"><button style={{backgroundColor:"#36a3a3", color:'white', padding:'5px 15px', borderRadius:'20px'}}>View</button></a></td>
                                    <td><a href={`http://localhost:3001/uploads/${data.otherdocfile}`} download target="_blank" rel="noreferrer"><button style={{backgroundColor:"#36a3a3", color:'white', padding:'5px 15px', borderRadius:'20px'}}>View</button></a></td>
                                    <td>{data.status}</td>
                                    <td>{data.hearabout}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </OverlayScrollbarsComponent>
        </div>
    )
}

export default Admin
