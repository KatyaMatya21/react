import * as React from 'react';
import {Component} from 'react';
import './App.css';

import { Header as HeaderDesktop } from './Components/Header/Header@desktop';
import { Header as HeaderMobile } from './Components/Header/Header@mobile';
import PageContent from './Components/PageContent/PageContent';
import Footer from './Components/Footer/Footer';

import DeviceDetector from 'device-detector-js';

const ua = new DeviceDetector().parse(navigator.userAgent) || {};
const device = ua.device || { type: 'desktop' };

export default class App extends Component {
  render() {

    return (
      <React.Fragment>
        { device.type === 'desktop' ? <HeaderDesktop/> : <HeaderMobile/> }
        <PageContent />
        <Footer />
      </React.Fragment>
    )
  }
}
