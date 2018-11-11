import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Header.css';

import logo from './assets/logo.svg';

import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default class Header extends React.Component {
  render() {
    const Header = cn('Header');
    const VH = cn('VisuallyHidden');
    const Container = cn('Container');

    return (
      <header className={Header()}>
        <h1 className={VH()}>Яндекс Дом</h1>
        <div className={`${Header('Inner')} ${Container()}`}>
          <a className={Header('Logo')} href="/"><img src={logo} width="113" height="38" alt="Яндекс Дом"/></a>
          <HeaderMenu />
        </div>
      </header>
    )
  }
}
