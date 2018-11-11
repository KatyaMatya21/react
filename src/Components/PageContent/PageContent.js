import * as React from 'react';
import './PageContent.css';

import Grid from '../Grid/Grid';

export default class PageContent extends React.Component {
  render() {
    return (
      <main className="page-content wrap">
        <h2 className="page-content__title">Лента событий</h2>
        <Grid />
      </main>
    )
  }
}
