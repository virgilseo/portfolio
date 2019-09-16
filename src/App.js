import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import Contact from './Contact.js';

class App extends Component {

  render() {

    return (
      <div className='App'>
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
