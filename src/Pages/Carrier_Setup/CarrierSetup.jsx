
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
function CarrierSetup() {
    const [cmpName, setcmpName] = useState('');
    const [DBA, setDBA] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zip, setzip] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [mc, setmc] = useState('');
    const [usdot, setusdot] = useState('');
    const [fein, setfein] = useState('');
    const [address, setaddress] = useState('');
    const [workus, setworkus] = useState('');
    const [ntrucks, setntrucks] = useState('');
    const [ndrivers, setndrivers] = useState('');
    const [equipment, setequipment] = useState('');
    const [invoice, setinvoice] = useState('');
    const [authorityfile, setauthorityfile] = useState('');
    const [w9fromfile, setw9formfile] = useState('');
    const [insurancefile, setinsurancefile] = useState('');
    const [noafile, setnoafile] = useState('');
    const [otherdocfile, setotherdocfile] = useState('');
    const [status, setstatus] = useState('');
    const [hearabout, sethearabout] = useState('');

    const HandleSubmit = async() => {
        if(cmpName === ''){
            toast.error("Please enter your company name")
            return;
        }
        const formData = new FormData();
        formData.append('company_name',cmpName)
        formData.append('company_dba',DBA);
        formData.append('city',city);
        formData.append('state',state);
        formData.append('zip',zip);
        formData.append('phone',phone);
        formData.append('email',email);
        formData.append('mc',mc);
        formData.append('usdot',usdot);
        formData.append('fein',fein);
        formData.append('address',address);
        formData.append('workus',workus);
        formData.append('number_trucks',ntrucks);
        formData.append('numbers_drivers',ndrivers);
        formData.append('equipment',equipment);
        formData.append('invoice',invoice);
        formData.append('authorityfile',authorityfile);
        formData.append('w9fromfile',w9fromfile);
        formData.append('insurancefile',insurancefile);
        formData.append('noafile',noafile);
        formData.append('otherdocfile',otherdocfile);
        formData.append('status',status);
        formData.append('hearabout',hearabout);

        try {
            await axios.post('http://localhost:8000/upload',formData)
            toast.success("Successfully form Submit");
        } catch (error) {
            console.log(error)
        }
        console.log(cmpName, DBA, city, state, zip, phone, email, mc, usdot, fein,
            address, workus, ntrucks, ndrivers, equipment, invoice, authorityfile, w9fromfile, insurancefile, noafile, otherdocfile, status, hearabout)
    }
    return (
        <div>
            <section id="main-banner-page" className="position-relative page-header service-header section-nav-smooth parallax">
                <div className="overlay overlay-dark opacity-7 z-index-1"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="page-titles whitecolor text-center padding_top padding_bottom">
                                <h2 className="font-xlight pt-3">We Help To</h2>
                                <h2 className="font-bold">Elevate Your Business</h2>
                                <h2 className="font-xlight">To Next Level</h2>
                                <h3 className="font-light pb-4 pt-2">The Best Multipurpose Template in Market</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg title-wrap mt-n5">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 whitecolor">
                                <h3 className="float-left">Carrier Setup</h3>
                                <ul className="breadcrumb top10 bottom10 float-right">
                                    <li className="breadcrumb-item hover-light"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item hover-light">Carrier Setup</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-services" className="padding bglight">
                <div className="container">
                    <div className="col-md-12 text-center heading_space wow fadeIn" data-wow-delay="300ms">
                        <h2 className="heading bottom30 darkcolor font-light2">Carrier Setup
                            <span className="divider-center"></span>
                        </h2>
                        <div className="col-md-12" style={{ textAlign: "justify" }}>
                            <p className="mb-n3">Once you complete the carrier setup below, we will email you a Dispatch Service
                                Agreement along with a General Power Of Attorney (Agent) and you’ll all be set. Don’t forget to
                                attach your MC Authority, W9 & Insurance below!</p>
                        </div>
                    </div>

                </div>
            </section>

            <div className="container" style={{ marginTop: "5%" }}>
                <div className="row">
                    <div className="col-md-12 mb-3 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="card-form"
                            style={{ background: "linear-gradient(131deg, #0077B5 40%, rgba(0,212,255,1) 100%)", color: "white" }}>
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Company Name <span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="company_name" className="form-control" id="inputEmail4"
                                                placeholder="Company Name"  value={cmpName} onChange={(e) => setcmpName(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >DBA (If Any) <span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="dpa" className="form-control" id="inputPassword4" placeholder="DBA"  value={DBA} onChange={(e) => setDBA(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>City<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="text" className="form-control" id="inputCity" placeholder="City"  value={city} onChange={(e) => setcity(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label >State<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="text" className="form-control" id="inputState" placeholder="State"  value={state} onChange={(e) => setstate(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label >Zip<span style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="number" className="form-control" id="inputZip" placeholder="Zip Code"  value={zip} onChange={(e) => setzip(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Phone<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="text" className="form-control" id="inputphone" placeholder="Phone "  value={phone} onChange={(e) => setphone(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Email<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="text" className="form-control" id="inputEmail" placeholder="Email"  value={email} onChange={(e) => setemail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>MC#<span style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="text" className="form-control" id="inputMC" placeholder="MC#"  value={mc} onChange={(e) => setmc(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>USDOT#<span style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="text" className="form-control" id="inputUSDOT" placeholder="USDOT#"  value={usdot} onChange={(e) => setusdot(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label>FEIN<span style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="text" className="form-control" id="inputFEIN" placeholder="FEIN#"  value={fein} onChange={(e) => setfein(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Address <span
                                            style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Address Line 1"  value={address} onChange={(e) => setaddress(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>How would you like to work with us? <span
                                            style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                        <input type="text" className="form-control" id="inputPercentage"
                                            placeholder="Type here Percentage (per load ) or Flat Fee (per week/truck) "  value={workus} onChange={(e) => setworkus(e.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Number Of Trucks?<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="number" className="form-control" id="inputTruck"
                                                placeholder="Numbers Of trucks"  value={ntrucks} onChange={(e) => setntrucks(e.target.value)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Number Of Drivers?<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <input type="number" className="form-control" id="inputDriver"
                                                placeholder="Number Of Drivers"  value={ndrivers} onChange={(e) => setndrivers(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label >Type Of Equipment?<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label> <br />
                                            <input type="radio" id="dray_van" name="radio" value="Dray Van" style={{ marginLeft: "3%" }} onChange={(e) => setequipment(e.target.value)} />
                                            <label >Dray Van</label><br />
                                            <input type="radio" id="Reefer" name="radio" value="Reefer" style={{ marginLeft: "3%" }} onChange={(e) => setequipment(e.target.value)} />
                                            <label >Reefer</label><br />
                                            <input type="radio" id="Flatbed/Step-deck" name="radio" value="Flatbed/Step-deck" style={{ marginLeft: "3%" }} onChange={(e) => setequipment(e.target.value)} />
                                            <label >Flatbed/Step-deck</label><br />
                                            <input type="radio" id="Power_Only" name="radio" value="Power Only" style={{ marginLeft: "3%" }} onChange={(e) => setequipment(e.target.value)} />
                                            <label >Power Only</label><br />
                                            <input type="radio" id="Box_Truck/Hot_Shot" name="radio" value="Box Truck/Hot Shot" style={{ marginLeft: "3%" }} onChange={(e) => setequipment(e.target.value)} />
                                            <label >Box Truck/Hot Shot</label><br />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>Do you factor your invoices?<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label> <br />
                                            <input type="radio" id="invoices_yes" name="radio" value="Yes" style={{ marginLeft: "3%" }} onChange={(e) => setinvoice(e.target.value)} />
                                            <label >Yes</label><br />
                                            <input type="radio" id="invoices_no" name="radio" value="No" style={{ marginLeft: "3%" }} onChange={(e) => setinvoice(e.target.value)} />
                                            <label >No</label><br />

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Mc Authority<span style={{ color: "red", fontSize: "20px" }}>*</span></label><br />
                                            <input type="file" id="mc_authority"  onChange={(e) => setauthorityfile(e.target.files[0])} />
                                        </div><br />
                                        <div className="form-group col-md-6">
                                            <label>W9-Form <span style={{ color: "red", fontSize: "20px" }}>*</span></label><br />
                                            <input type="file" id="w9_form"  onChange={(e) => setw9formfile(e.target.files[0])} />
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Certificate of Insurance<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label><br />
                                            <input type="file" id="certificate_insurance"  onChange={(e) => setinsurancefile(e.target.files[0])} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Void Check/ NOA <span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label><br />
                                            <input type="file" id="voide_check"  onChange={(e) => setnoafile(e.target.files[0])} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Other Documents<span
                                                style={{ color: "red", fontSize: "20px" }}>*</span></label><br />
                                            <input type="file" id="other_documents"  onChange={(e) => setotherdocfile(e.target.files[0 ])} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>What States Do You Prefer To Drive?<span style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                        <textarea name="" id="exampleFormControlTextarea1" className="form-control" rows="5" style={{ borderRadius: "10px" }}  onChange={(e) => setstatus(e.target.value)}></textarea>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label>How did you hear about us?<span style={{ color: "red", fontSize: "20px" }}>*</span></label>
                                            <select id="inputState" className="form-control" value={hearabout} onChange={(e) => sethearabout(e.target.value)}>
                                                <option value="defult" >Choose...</option>
                                                <option value="website">Website</option>
                                                <option value="sale_agent">Sales Agent</option>
                                                <option value="advertisement">Advertisement</option>
                                                <option value="emails">Emails</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <button type='button'  className="btn btn-light mx-auto" style={{ padding: "10px 50px 10px 50px", fontWeight: "bold" }} onClick={HandleSubmit}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarrierSetup
