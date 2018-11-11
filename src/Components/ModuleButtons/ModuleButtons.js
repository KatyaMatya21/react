import * as React from 'react';
import {cn} from '@bem-react/classname';

import './ModuleButtons.css';

import Button from '../Button/Button';

export default class ModuleButtons extends React.Component {
  render() {
    const ModuleButtons = cn('ModuleButtons');

    return (
      <React.Fragment>
        <p className={ModuleButtons()}>
          {this.props.buttons.map(item => (
            <Button key={item} text={item}/>
          ))}
        </p>
      </React.Fragment>
    )
  }
}
