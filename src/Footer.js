import React, {Component} from 'react';

class Footer extends Component {

  render() {

    return(
      <footer className='footer-container'>
        <p><span className="copy-icon">©</span> 2019 Virgil Avram</p>
        <p>Icons provided by <a href='https://material.io/' className='attr-link' target="_blank" rel='noopener noreferrer'>Material</a> and <a href='https://www.iconfinder.com/' className='attr-link' target="_blank" rel='noopener noreferrer'>IconFinder</a></p>
      </footer>
    )
  }
}

export default Footer
