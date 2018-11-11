import * as React from 'react';
import {cn} from '@bem-react/classname';

import './PageContent.css';

import Grid from '../Grid/Grid';

export default class PageContent extends React.Component {
  render() {
    const PageContent = cn('PageContent');
    const Wrap = cn('Wrap');

    return (
      <main className={`${PageContent()} ${Wrap()}`}>
        <h2 className={PageContent('Title')}>Лента событий</h2>
        <Grid />
      </main>
    )
  }
}
