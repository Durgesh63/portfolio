import React from 'react'
// import '';

function HomePage() {
    const home_image = "https://res.cloudinary.com/anmoldev/image/upload/v1674417700/portfolio/man_tw5ozp.svg";
    const avatar_image = "https://res.cloudinary.com/anmoldev/image/upload/v1674418530/IMG_20220623_105921_-_Copy_msmquz.jpg"

    const linkedin = "https://www.linkedin.com/in/durgeshmaurya/";
    const github = "https://github.com/Durgesh63";
   const resume = 'https://docs.google.com/document/d/e/2PACX-1vS0tA-EBDisEIufaQarS9f8zz5Qa-7rih649diEZWuVp81osjxPwRacfnoCsK3ECv2fIySx-PauCL51/pub'

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="infos">
            <h6 className="subtitle">hello,I'm</h6>
            <h6 className="title">Durgesh Maurya</h6>
            <p>ReactJs & Python Devloper</p>
            <div className="buttons pt-3">
              <a href={resume} target="_blank" rel="noreferrer" className="btn btn-primary rounded">DOWNLOAD CV</a>
            </div>      
            <div className="socials mt-4">
                <a className="social-item" target="_blank" rel="noreferrer" style={{color:"#0A66C2",}}  href={linkedin}><i className="fa-brands fa-linkedin" /></a>
                <a className="social-item" target="_blank" rel="noreferrer" style={{color:"#6e5494",}}  href={github}><i className="fa-brands fa-github" /></a>
                <a className="social-item" target="_blank" rel="noreferrer" href="mailto:durgeshmaurya0998@gmail.com"><i className="fa-solid fa-envelope" /></a>
            </div>
          </div>              
          <div className="img-holder">
            <img src={home_image} alt={"HomeImage"} />
          </div>      
        </div>  
        <div className="widget">
        <div className="widget-item">
            <h2>3</h2>
            <p>Mini Projects</p>
          </div>
          <div className="widget-item">
            <h2>3</h2>
            <p>Major Completed</p>
          </div>
          <div className="widget-item">
            <h2>3</h2>
            <p>Project on ReactJs</p>
          </div>
        </div>
      </header>


      <section className="section mt-3">
        <div className="container mt-5">
          <div className="row text-center text-md-left">
            <div className="col-md-3">
              <img src={avatar_image} alt={"AvatarImage"} className="img-thumbnail mb-4" />
            </div>
            <div className="pl-md-4 col-md-9">
              <h6 className="title">Durgesh Maurya</h6>
              <p className="subtitle">ReactJs & Python Devloper</p>
              <p>I studied computer science and engineering for my B.Tech. at VBS Purvanchal University. Python and JavaScript are my strong suits, and I'm also comfortable with ReactJs.</p>
              <p>I have experience working directly on the development of the React and Python projects.</p>
              <a href={resume} target="_blank" rel="noreferrer" className="btn btn-primary rounded mt-3">DOWNLOAD CV</a>                   
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
    </>
  )
}

export default HomePage
