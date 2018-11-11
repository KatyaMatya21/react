import * as React from 'react';

import './HeaderMenu.css';

export default class HeaderMenu extends React.Component {
  render() {
    return (
      <nav className="header-menu">
        <button className="header-menu__button" type="button">
          <span className="visually-hidden">Меню</span>
        </button>
        <ul className="header-menu__list">
          <li className="header-menu__item header-menu__item--current">
            <a className="header-menu__link" href="#">События</a>
          </li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Сводка</a>
          </li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Устройства</a>
          </li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Сценарии</a>
          </li>
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Видеонаблюдение</a>
          </li>
        </ul>
      </nav>
    )
  }
}
