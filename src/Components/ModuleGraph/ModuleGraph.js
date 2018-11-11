import * as React from 'react';
import './ModuleGraph.css';

import graph from './assets/data.svg';

export default class ModuleGraph extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img className="module__graph" src={graph} alt="Еженедельный отчет по расходам ресурсов" />
      </React.Fragment>
    )
  }
}
