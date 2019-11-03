import React, {Component} from 'react';
import LinkedinLogo from './Logo/LI-Logo.png';
import GithubLogo from './Logo/GitHub_Logo_White.png'

class Contact extends Component {

  render() {
    console.log(LinkedinLogo)
    return(

      <section id='contact'>
        <h3 className='section-title'>Contact</h3>
        <a href='https://www.linkedin.com/in/virgil-avram/' className='profile-links' target="_blank" rel='noopener noreferrer'><img src={LinkedinLogo} alt='Linkedin-profile' className='social-logo'/></a>
        <a href='https://github.com/virgilseo' className='profile-links' target="_blank" rel='noopener noreferrer'><img src={GithubLogo} alt='Github-profile' className='social-logo'/></a>
        <div className='email-container'>
          <i className='material-icons'>email</i>
          <span className='email-text'>virgil.avram@gmail.com</span>
        </div>
      </section>
    )
  }
}

export default Contact
