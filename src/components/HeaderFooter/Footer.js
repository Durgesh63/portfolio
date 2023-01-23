import React from 'react'

function Footer() {
  const linkedin = "https://www.linkedin.com/in/durgeshmaurya/";
    const github = "https://github.com/Durgesh63";
  return (
    <>
       <footer className="page-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <p>2023 portfolio</p>
            </div>
            <div className="col-sm-6">
              <div className="socials">
              <a className="social-item" target="_blank" rel="noreferrer" style={{color:"#0A66C2",}}  href={linkedin}><i className="fa-brands fa-linkedin" /></a>
                <a className="social-item" target="_blank" rel="noreferrer" style={{color:"#6e5494",}}  href={github}><i className="fa-brands fa-github" /></a>
                <a className="social-item" target="_blank" rel="noreferrer" href="mailto:durgeshmaurya0998@gmail.com"><i className="fa-solid fa-envelope" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
