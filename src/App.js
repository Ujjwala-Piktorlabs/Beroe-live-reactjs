import React, { Component } from 'react';
import './App.css';
import './css/media.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

export class App extends Component {
  onbodyCloseBarClass = () => {
    let shownElements = document.querySelectorAll('.shown');
    shownElements.forEach((el) => {
      if (el.classList.contains("shown"))
        el.classList.remove("shown")
    })
  }
  render() {
    return (
      <div className="App" onClick={this.onbodyCloseBarClass} >
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;