import React from 'react'
import Footer from '../HeaderFooter/Footer'
import Navbar from '../HeaderFooter/Navbar'


function Contectus() {
  const resume = 'https://docs.google.com/document/d/e/2PACX-1vS0tA-EBDisEIufaQarS9f8zz5Qa-7rih649diEZWuVp81osjxPwRacfnoCsK3ECv2fIySx-PauCL51/pub'
  return (
    <div>
        <Navbar />
        
        
        <section id="contact" className="position-relative section">
        <div className="container text-center">
          <h6 className="subtitle">Contact</h6>
          <h6 className="section-title mb-4">Get In Touch With Me</h6>
          <p className="mb-5 pb-4">If you appreciate my work or have any questions, kindly download my resume, email me, or give me a call.</p>
          <div className="contact text-left">
            <div className="form">
              <h6 className="subtitle">Available 24/7</h6>
              <h6 className="section-title mb-4">Get In Touch</h6>
                <a href={resume} target="_blank" rel="noreferrer" type="submit" className="btn btn-primary btn-block rounded w-lg">Resume Download</a>
              
            </div>
            <div className="contact-infos py-5">
              <div className="item">
              <i className="fa-solid fa-location-dot"></i>
                <div className>
                  <h5>Location</h5>
                  <p> Noida Sector 73</p>
                </div>                          
              </div>
              <div className="item">
              <i className="fa-solid fa-mobile-retro"></i>
                <div>
                  <h5>Phone Number</h5>
                  <p>6388876932</p>
                </div>                          
              </div>
              <div className="item">
              <i className="fa-regular fa-envelope"></i>
                <div className="mb-0">
                  <h5>Email Address</h5>
                  <p>durgeshmaurya0998@gmail.com</p>
                </div>
              </div>
            </div>                  
          </div>
        </div>  
        {/* <div id="map">
          <iframe src="https://snazzymaps.com/embed/61257" />
        </div>       */}
      </section>


        <Footer />
    </div>
  )
}

export default Contectus
