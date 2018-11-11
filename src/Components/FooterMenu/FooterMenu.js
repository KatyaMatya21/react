import * as React from 'react';
import './FooterMenu.css';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <nav className="footer-menu">
        <ul className="footer-menu__list">
          <li className="footer-menu__item">
            <a className="footer-menu__link" href="#">Помощь</a>
          </li>
          <li className="footer-menu__item">
            <a className="footer-menu__link" href="#">Обратная связь</a>
          </li>
          <li className="footer-menu__item">
            <a className="footer-menu__link" href="#">Разработчикам</a>
          </li>
          <li className="footer-menu__item">
            <a className="footer-menu__link" href="#">Условия использования</a>
          </li>
        </ul>
      </nav>
    )
  }
}
