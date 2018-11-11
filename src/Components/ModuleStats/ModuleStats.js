import * as React from 'react';
import './ModuleStats.css';

export default class ModuleStats extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="module__stats">
          <span className="module__degree">
            Температура: <strong>{this.props.temperature} C</strong>
          </span>
                <span className="module__humidity">
            Влажность: <strong>{this.props.humidity}%</strong>
          </span>
        </p>
      </React.Fragment>
    )
  }
}
