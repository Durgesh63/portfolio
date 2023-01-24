import React from 'react'
import Footer from '../HeaderFooter/Footer'
import Navbar from '../HeaderFooter/Navbar'

import {Link} from 'react-router-dom'


function Portfolio() {
    const healthcarechatbot = "https://res.cloudinary.com/anmoldev/image/upload/v1674423327/main_window_viifah.png";
    const portfolio = "https://res.cloudinary.com/anmoldev/image/upload/v1674423851/Screenshot_from_2023-01-23_03-13-09_hw3igv.png"
    const Blogging_website = "https://res.cloudinary.com/anmoldev/image/upload/v1674417699/portfolio/blog-1_coix1h.jpg"
    const fileloader = "https://res.cloudinary.com/anmoldev/image/upload/v1674424334/Screenshot_from_2023-01-23_03-21-41_ozp4v1.png"
    const todolist = "https://res.cloudinary.com/anmoldev/image/upload/v1674590395/portfolio/Screenshot_from_2023-01-25_01-29-42_sobwgi.png"
    const shopingsite = "https://res.cloudinary.com/anmoldev/image/upload/v1674590110/portfolio/Screenshot_from_2023-01-25_01-24-22_tvpdtx.png"
  return (
    <>
        <Navbar />
        <section id="portfolio" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Portfolio</h6>
          <h6 className="section-title mb-4">Check My Wonderful Works</h6>
          <p className="mb-5 pb-4">Here is a showcase of some of my previous work. Please look at</p>
          <div className="row">
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src={portfolio} alt={"portfolio"} />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Portfolio</h5>
                    <a href="/" target="_blank" rel="noreferrer"><i className="fa-solid fa-magnifying-glass-location" /></a>
                    <a href="/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
                  </div>  
                </div>
              </div>
              <div className="img-wrapper">
              <img src={healthcarechatbot} alt={"HealthCareChatBot"} />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>HealthCareChatBot</h5>
                    <a href="https://github.com/Durgesh63/HealthCare_ChatBot.git" target="_blank" rel="noreferrer" ><i className="fa-solid fa-link" /></a>
                  </div>                              
                </div>
              </div>                  
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
              <img src={Blogging_website} alt={"Blogging_website"} />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>BloggingWebsite</h5>
                    <a href="/" target="_blank" rel="noreferrer"><i className="fa-solid fa-magnifying-glass-location" /></a>
                    <a href="https://github.com/Durgesh63/codewithdurgesh.git" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
                  </div>  
                </div>
              </div>
              <div className="img-wrapper">
              <img src={fileloader} alt={"fileloader"} />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>FileLoader</h5>
                    <a href="https://durgesh63.github.io/durgeshmaurya-pwtest/" target="_blank" rel="noreferrer"><i className="fa-solid fa-magnifying-glass-location" /></a>
                    <a href="https://github.com/Durgesh63/durgeshmaurya-pwtest.git" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
                  </div>                              
                </div>
              </div>                  
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
              <img src={todolist} alt={"todolist"} />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>ToDoList</h5>
                    <a href="https://durgesh63.github.io/portfolio/"><i className="fa-solid fa-magnifying-glass-location" /></a>
                    <a href="https://github.com/Durgesh63/portfolio"><i className="fa-solid fa-link" /></a>
                  </div>  
                </div>
              </div>
              <div className="img-wrapper">
              <img src={shopingsite} alt={"shopingsite"} />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Shoping.com</h5>
                    <a href="https://durgesh63.github.io/shoping/"><i className="fa-solid fa-magnifying-glass-location" /></a>
                    <a href="https://github.com/Durgesh63/shoping"><i className="fa-solid fa-link" /></a>
                  </div>                              
                </div>
              </div>                  
            </div>
          </div>
        </div>
        
      </section>

      <section className="section">
        <div className="container text-center">
          <h6 className="subtitle">Skills</h6>
          <h6 className="section-title mb-4">Why Choose me</h6>
          <p className="mb-5 pb-4">Since I have experience working on the project and have built it from beginning to end,<br /> I think I'm the right fit for you.</p>
          <div className="row text-left">
            <div className="col-sm-6">
              <h6 className="mb-3">JavaScript</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>70%</span></div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Web Design (HTML & CSS)</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>70%</span></div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Python</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>70%</span></div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">ReactJS</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>60%</span></div>
              </div>
            </div>
          </div>  
        </div>
      </section>
      <div className='text-center'>
      <div className="buttons pt-3">
              {/* <a href='/' className="btn btn-primary rounded">Contact US</a> */}
              <Link className="btn btn-primary rounded"  to='/portfolio/contact-us/'>contact Us</Link>

            </div> 
      </div>


      
        <Footer/>
    </>
  )
}

export default Portfolio
