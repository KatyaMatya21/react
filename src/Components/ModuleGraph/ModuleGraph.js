import * as React from 'react';
import {cn} from '@bem-react/classname';

import './ModuleGraph.css';

import graph from './assets/data.svg';

export default class ModuleGraph extends React.Component {
  render() {
    const ModuleGraph = cn('ModuleGraph');

    return (
      <React.Fragment>
        <img className={ModuleGraph()} src={graph} alt="Еженедельный отчет по расходам ресурсов" />
      </React.Fragment>
    )
  }
}
