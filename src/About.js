import React, {Component} from 'react';
import ProfilePic from './images/portfolio-pic.jpg';

// Store tech skills text in a array

const skills = ['vue.js', 'tailwind.css', 'react.js', 'angular.js', 'ember.js', 'javascript', 'html', 'css', 'responsive design', 'object oriented programing',
                'ajax', 'jquery', 'jasmine.js', 'way-aria', 'test driven development', 'git', 'npm', 'grunt', 'gulp']

class About extends Component {

  render() {

    return (

       <section id='about'>
         <div className='about-container'>
          <div className='bio-container'>
            <img src={ProfilePic} alt='Profile' className='profile-pic'/>
            <p className="bio"><span className='bio-greeting'>Hey!</span> I am a web developer
               with a passion for javascript programing, front-end frameworks (React.js / Vue.js)
               and UX desing.</p>
            <p className="bio">Aiming to leverage my skills to build visually appealing, bug free and secure
            web based applications.</p>
          </div>
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
