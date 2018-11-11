import * as React from 'react';

import './ModuleButtons.css';

import Button from '../Button/Button';

export default class ModuleButtons extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="module__buttons">
          {this.props.buttons.map(item => (
            <Button key={item} text={item}/>
          ))}
        </p>
      </React.Fragment>
    )
  }
}
