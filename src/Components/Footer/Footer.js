import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Footer.css';

import FooterMenu from '../FooterMenu/FooterMenu';

export default class Footer extends React.Component {
  render() {
    const Footer = cn('Footer');
    const Container = cn('Container');

    return (
      <footer className={Footer()}>
        <div className={`${Footer('Inner')} ${Container()}`}>
          <FooterMenu />
          <p className={Footer('Copyright')}>© 2001–2018 ООО «Яндекс»</p>
        </div>
      </footer>
    )
  }
}
