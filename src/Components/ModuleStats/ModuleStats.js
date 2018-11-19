import * as React from 'react';
import {cn} from '@bem-react/classname';

import './ModuleStats.css';

export default class ModuleStats extends React.Component {
  render() {
    const ModuleStats = cn('ModuleStats');

    return (
      <React.Fragment>
        <p className={ModuleStats()}>
          <span className={ModuleStats('Degree')}>
            Температура: <strong>{this.props.temperature} C</strong>
          </span>
          <span className={ModuleStats('Humidity')}>
            Влажность: <strong>{this.props.humidity}%</strong>
          </span>
        </p>
      </React.Fragment>
    )
  }
}
