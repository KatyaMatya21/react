import * as React from 'react';
import {Component} from 'react';
import './App.css';

import Header from './Components/Header/Header';
import PageContent from './Components/PageContent/PageContent';
import Footer from './Components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PageContent />
        <Footer />
      </React.Fragment>
    )
  }
}
