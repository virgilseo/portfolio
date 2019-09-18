import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Navigation from './Navigation';

class App extends Component {

  render() {

    return (
      <div className='App'>
        <Header />
        <Navigation />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
