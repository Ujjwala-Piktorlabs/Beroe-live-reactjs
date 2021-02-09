import React from 'react';
import './App.css';
import './css/media.css';
import { Provider } from 'react-redux';
import store from './stores'

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  const onbodyCloseBarClass = () => {
    let shownElements = document.querySelectorAll('.shown');
    shownElements.forEach((el) => {
      if (el.classList.contains("shown"))
        el.classList.remove("shown")
    })
  }

  return (
    <Provider store={store}>
      <div className="App" onClick={onbodyCloseBarClass}>
        <Header />
        <Home />
        <Footer />
      </div>
    </Provider>
  );

}

export default App;