import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Button.css';

export default class Button extends React.Component {
  render() {
    const Button = cn('Button');

    return (
      <button className={Button()} type="button">{this.props.text}</button>
    )
  }
}
