import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Footer from './footer/footer'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <div className="banner-text">
              <h1>Noreldin Saad</h1>
              <hr style={{width:'60%', color:'red'}}></hr>
              <h3 className='title'>Full Stack Web Developer</h3>
              <h5 className='title'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</h5>
              <hr/>
              <br></br>
                <div className="social-links">
                  {/* Github */}
                  <a href="https://github.com/Noreldin-S" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <div className='hiddenText0'>Github</div>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/noreldin-saad-835930108/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <div className='hiddenText2'>Linkedin</div>
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true" />
                    <div className='hiddenText3'>Facebook</div>
                  </a>
                  {/*resume*/}
                  <a href="https://docs.google.com/document/d/1qoSVfiUBKsaPGNi_9KM9QEsKNl-7HqC2UACmeYMM2XQ/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-folder-open" aria-hidden="true" />
                    <div className='hiddenText4'>Resume</div>
                  </a>
                </div>
                <br></br>
            </div>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default Landing;
