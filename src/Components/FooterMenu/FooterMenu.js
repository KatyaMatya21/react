import * as React from 'react';

import './FooterMenu.css';
import {cn} from '@bem-react/classname';

export default class FooterMenu extends React.Component {
  render() {
    const FooterMenu = cn('FooterMenu');

    return (
      <nav className={FooterMenu()}>
        <ul className={FooterMenu('List')}>
          <li className={FooterMenu('Item')}>
            <a className={FooterMenu('Link')} href="/">Помощь</a>
          </li>
          <li className={FooterMenu('Item')}>
            <a className={FooterMenu('Link')} href="/">Обратная связь</a>
          </li>
          <li className={FooterMenu('Item')}>
            <a className={FooterMenu('Link')} href="/">Разработчикам</a>
          </li>
          <li className={FooterMenu('Item')}>
            <a className={FooterMenu('Link')} href="/">Условия использования</a>
          </li>
        </ul>
      </nav>
    )
  }
}
