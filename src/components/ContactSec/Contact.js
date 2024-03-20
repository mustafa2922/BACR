import React, { useEffect } from 'react'
import './Contact.css'
import Navbar from '../Navbar'
import conactimg from './conactimg.png'
import Expert5 from '../ExpertiseSec/Expert5'
import Conact2 from './Conact2'
import Footer from '../AboutSec/Footer'
import Text from './Text'
import Career from '../Creeer/Career'
function Contact() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <div className='row mb-5'>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5 '>
                        <div className='mb-5'>
                            <h4 data-aos="fade-down">Contact Us</h4>
                            <h1 data-aos="fade-right" className='fw-bolder text-start'>Get in touch with us for personalized assistance and support</h1>
                            <p className=' w-100' data-aos="fade-left">
                                We're here to help! Reach out to us at <b>info@bacr.com.pk</b> or call us at <b>+92-21-34322501</b> Our team looks forward to assisting you with any information you need.
                            </p>
                        </div>


                    </div>

                    <div className='col-lg-6 col-sm-12 col-md-12  cont-R-main d-flex justify-content-center align-items-center'>

                        <div className='cont-R  d-flex justify-content-center align-items-center'>
                            <div className=' position-relative'>
                                <img src={conactimg} />
                                <div className='bg-div position-absolute '>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            {/* <Expert5 /> */}
          
            <div>
<Career/>
            </div>
            <Footer />
        </>
    )
}

export default Contact
