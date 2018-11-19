import * as React from 'react';
import {cn} from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import './Header.css';

import logo from './assets/logo.svg';

export class Header extends React.Component {
  render() {
    const Header = cn('Header');
    const VH = cn('VisuallyHidden');
    const Container = cn('Container');
    const cnHeaderMenu = cn('HeaderMenu');

    return (
      <header className={Header()}>
        <h1 className={VH()}>Яндекс Дом</h1>
        <div className={`${Header('Inner')} ${Container()}`}>
          <a className={Header('Logo')} href="/"><img src={logo} width="113" height="38" alt="Яндекс Дом"/></a>

          <RegistryConsumer>
            {registries => {

              const registry = registries[Header()];

              const HeaderMenu = registry.get(cnHeaderMenu());

              return <HeaderMenu />;
            }}
          </RegistryConsumer>

        </div>
      </header>
    )
  }
}
