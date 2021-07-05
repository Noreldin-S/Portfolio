import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Footer from './footer/footer'

class Resume extends Component {
  render() {
    return(
      <div className="resumeBack">
        <Grid>
          <Cell col={4}>
            <h2 className='resumeName' style={{paddingTop: '15px'}}>Noreldin Saad</h2>
            <img src="./images/me.jpg" alt="clintRizzo" className='me'></img>
            <h3 className='hTags' style={{color: 'black', fontSize: '26px'}}>Full Stack Web Developer</h3>
            <center>
            <hr style={{borderTop: '3px solid #e22947',  width: '85%'}}/>
            </center>
            <p className='developerStory'>Brand statement:
 	
            </p>
            <br></br>
            <center>
            <hr style={{borderTop: '3px solid #e22947', width: '95%'}}/>
            </center>
            <h5 className='info'>Address:</h5>
            <p className='answer'>Anaheim, California</p>
            <h5 className='info'>Phone:</h5>
            <p className='answer'>(714) 726-0195</p>
            <h5 className='info'>Email:</h5>
            <p className='answer'>s.noreldin@hotmail.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8} style={{borderRadius:"50px"}}>
            <h2 className='hTag'>Languages:</h2>
            <p className='languages'>HTML/CSS | Bootstrap | JavaScript | MySQL | NodeJS | Express | MongoDB | React</p>

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2 className='hTag'>Education:</h2>
            <Education
              startYear={2008}
              endYear={2012}
              schoolName="Magnolia High School"
              schoolDescription="High School Diploma"
            />
                <Education
                 startYear={2013}
                 endYear={2018}
                 schoolName="Fullerton College"
                 schoolDescription="GED"
            />
            <Education
                 startYear={2020}
                 endYear={2021}
                 schoolName="University of California Irvine"
                 schoolDescription="This was a six month boot camp where I learned MERN Full Stack Web Development. Languages learned HTML/CSS, NodeJS, Express, MySQL, MongoDB, React"
            />

              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2 className='hTag'>Experience:</h2>
            <Experience
              startYear={2020}
              endYear={"Present"}
              jobName="Leo Distro"
              // jobDescription="Currently work for Hajoca plumbing in the warehouse as a warehouse associate. My main duties are to help both
              // receiving and shipping departments. The receiving deparment consists of maintaining material that is coming in and making sure the
              // correct material has been received. Shipping duties is to complete orders that have been ordered and complete those orders 
              // accurately. While working at Corona Hajoca I have trained six new employees. Five of those employees have been for the shipping
              // position and one of the employees was moved from shipping to receiving. The training for these policies consisted of having them learn 
              // the safety policies of the warehouse, testing them on heavy machinery, and conducting heavy machinery written exams. The main
              // goal for these employees to succeed was to give them as much knowledge as possible to allow them to succeeed."
            />
            <center>
            <hr style={{borderTop: '2px solid #e22947', width: '85%'}}/>
            </center>
            <Experience
              startYear={2016}
              endYear={2020}
              jobName="Fedex Express"
              // jobDescription="While working for the Orange County Sheriff's Department I was assigned to multiple facilities where I conducted important duties. Some of my duties
              // were to maintain the security of inmates and staff. Other duties included to maintain detailed security logs, documenting security checks, documenting all incidents, and assist with emergency activations.
              // While working for the Orange County Sheriffs Department I was given the oppurtunity to train five academy graduates. My job as a training officer
              // was to observe the new hires and assist them with any questions or concerns they may have had while also observing their work to make sure they would be able
              // to assist the deputies in their duties."
            />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <Experience
              startYear={2014}
              endYear={2016}
              jobName="Avis"
              // jobDescription="While working for the Orange County Sheriff's Department I was assigned to multiple facilities where I conducted important duties. Some of my duties
              // were to maintain the security of inmates and staff. Other duties included to maintain detailed security logs, documenting security checks, documenting all incidents, and assist with emergency activations.
              // While working for the Orange County Sheriffs Department I was given the oppurtunity to train five academy graduates. My job as a training officer
              // was to observe the new hires and assist them with any questions or concerns they may have had while also observing their work to make sure they would be able
              // to assist the deputies in their duties."
            />
          </Cell>
        </Grid>
        <br></br>
        <br></br>
        <Footer />
      </div>
    )
  }
}

export default Resume;