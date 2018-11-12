import * as React from 'react';
import {cn} from '@bem-react/classname';

import './HeaderMenu.css';

export class HeaderMenu extends React.Component {

  attrs = () => {};

  handleClick() {
    console.log('Click!');
  }

  handleTouch() {
    console.log('Touch!');
  }

  render() {
    const HeaderMenu = cn('HeaderMenu');
    const VH = cn('VisuallyHidden');

    return (
      <nav className={HeaderMenu()} {...this.attrs()}>
        <button className={HeaderMenu('Button')} type="button">
          <span className={VH()}>Меню</span>
        </button>
        <ul className={HeaderMenu('List')}>
          <li className={HeaderMenu('Item')}>
            <a className={HeaderMenu('Link')} href="/">События</a>
          </li>
          <li className={HeaderMenu('Item')}>
            <a className={HeaderMenu('Link')} href="/">Сводка</a>
          </li>
          <li className={HeaderMenu('Item')}>
            <a className={HeaderMenu('Link')} href="/">Устройства</a>
          </li>
          <li className={HeaderMenu('Item')}>
            <a className={HeaderMenu('Link')} href="/">Сценарии</a>
          </li>
          <li className={HeaderMenu('Item')}>
            <a className={HeaderMenu('Link')} href="/">Видеонаблюдение</a>
          </li>
        </ul>
      </nav>
    )
  }
}
