import * as React from 'react';

import './Header.css';

import logo from './assets/logo.svg';

import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <h1 className="visually-hidden">Яндекс Дом</h1>
        <div className="page-header__inner container">
          <a className="page-header__logo" href="#"><img src={logo} width="113" height="38" alt="Яндекс Дом"/></a>
          <HeaderMenu />
        </div>
      </header>
    )
  }
}
