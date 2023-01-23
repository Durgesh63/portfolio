import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const brand_image = "https://res.cloudinary.com/anmoldev/image/upload/v1674417698/portfolio/logo_cvdus8.svg"
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top={0}>
        <div className="container">
        <Link className="navbar-brand" to='/'>
          <img src={brand_image} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/portfolio'>Portfolio</Link>
              </li>                   
              
              <li className="nav-item">
                <Link className="nav-link"  to='/contact-us'>contact</Link>
              </li>
            </ul>
          </div>
        </div>          
      </nav>
    </>
  )
}

export default Navbar
