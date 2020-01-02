import React, {Component} from 'react';
import ProfilePic from './images/portfolio-pic.jpg';

class About extends Component {

  render() {

    return (

       <section id='about'>
         <h3 className='section-title'>About me</h3>
         <img src={ProfilePic} alt='Profile' className='profile-pic'/>
         <div className='about-container'>
           <p > Detail-orientated front end web developer
              with a proven background in search engine optimization and affiliate marketing.
              Aiming to leverage my skills to build visually appealing, bug free and secure
              web based applications.</p>
           <div className='tech-container'>
             <h4 className='tech-title'>Tech stack</h4>
             <p className='tech-text'>#react.js #javascript #angular.js  #ember.js #html #css #responsive design #object oriented programing
                 #ajax #jquery #way-aria #test driven development #git #npm #grunt #gulp
             </p>
           </div>
         </div>
      </section>
    )
  }
}

export default About
