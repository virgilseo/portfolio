import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js'

class App extends Component {

  render() {

    return (
      <div className='App'>
        <Header />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App;
