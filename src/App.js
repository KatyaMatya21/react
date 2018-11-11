import * as React from 'react';
import {Component} from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Footer />
      </div>
    )
  }
}
