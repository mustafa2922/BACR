import React, { useEffect } from 'react'
import './Career.css'
import Navbar from '../Navbar'
import carreimg from './carrer.png'
import Career2 from './Career2'
import Career3 from './Career3'
import Footer from '../AboutSec/Footer'
import CreerForm from './CreerForm'
function Career() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <section className=''>

                {/* < Navbar /> */}

                <div className='container carrer-main my-5 '>
                    <div className='row mt-5'>
                        <div className='col-lg-12 col-sm-12 col-md-12 '>
                            <div className=' d-flex justify-content-center align-items-center flex-column'>
                                <h4 style={{ color: '#005471',textAlign:"center" }}>Career</h4>
                                <h1 className='fw-bolder text-center'>Build Your Future With <br /> Careers at BAC</h1>
                                <p className=' w-50  text-center'>
                                    Join a dynamic team committed to innovation, teamwork, and excellence in the HVAC industry. Explore available positions and be a part of our journey in shaping the future of air conditioning solutions.
                                </p>
                            </div>

                        </div>
                        {/* <div className='col-lg-6 col-sm-12 col-md-12 mt-5 '>
                            <div className='carrer-R'>
                                <img src={carreimg} />
                                <div>

                                </div>
                            </div>

                        </div> */}
                    </div>

                </div >
            </section>
            <Career2 />
            <Career3 />
            <CreerForm />
            <div className='container conact2-main'>
                <div className='row '>
                    <div className='col-12 text-center my-5'>
                        <div>
                            <h1 className='fw-bolder'>Find Us Through Map</h1>
                            <p>Visit our Office to meet the expert team personally and talk to them. </p>
                        </div>
                        {/* <img src={map} /> */}
                    </div>

                </div>
            </div>
            <div className='container map-main-daiv mb-lg-5'>
                <div className='row'>
                    <div className='col-lg-12 '>
                        <div className='map-inner'>
                            <iframe className=' map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14471.960091650359!2d67.154188!3d24.9324098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3394437c0016f%3A0x382f7598d01d25dc!2sBrothers%20Air%20Conditioning!5e0!3m2!1sen!2s!4v1704742670572!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Career
