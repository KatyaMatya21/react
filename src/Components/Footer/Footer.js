import * as React from 'react';

import './Footer.css';

import FooterMenu from '../FooterMenu/FooterMenu';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="page-footer__inner container">
          <FooterMenu />
          <p className="page-footer__copyright">© 2001–2018 ООО «Яндекс»</p>
        </div>
      </footer>
    )
  }
}
