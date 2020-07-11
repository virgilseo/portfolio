import React, {Component} from 'react';
import ProfilePic from './images/portfolio-pic.jpg';

// Store tech skills text in a array

const skills = ['vue.js', 'tailwind.css', 'react.js', 'angular.js', 'ember.js', 'javascript', 'html', 'css', 'responsive design', 'object oriented programing',
                'ajax', 'jquery', 'way-aria', 'test driven development', 'git', 'npm', 'grunt', 'gulp']

class About extends Component {

  render() {

    return (

       <section id='about'>
         <h3 className='section-title'>About me</h3>
         <img src={ProfilePic} alt='Profile' className='profile-pic'/>
         <div className='about-container'>
           <p className="bio"> Detail-orientated front end web developer
              with a proven background in search engine optimization and affiliate marketing.
              Aiming to leverage my skills to build visually appealing, bug free and secure
              web based applications.</p>
           <div className='tech-container'>
             <h4 className='tech-title'>Tech stack</h4>
             <div className='skills-container'>
               {skills.map((skill, index) =>
                <span  key={index} className='skill-text'>{skill}</span>
               )}
             </div>
           </div>
         </div>
      </section>
    )
  }
}

export default About
