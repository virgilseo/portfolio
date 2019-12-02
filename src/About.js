import React, {Component} from 'react';
import ProfilePic from './images/portfolio-pic.jpg';

class About extends Component {

  render() {

    return (

       <section id='about'>
         <h3 className='section-title'>About me</h3>
         <img src={ProfilePic} alt='Profile' className='profile-pic'/>
         <p className='bio-text'> Detail-orientated front end web developer
            with a proven background in search engine optimization and affiliate marketing.
            Aiming to leverage my skills to build visually appealing, bug free and secure
            web based applications.</p>
      </section>
    )
  }
}

export default About
