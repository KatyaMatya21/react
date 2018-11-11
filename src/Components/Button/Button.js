import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Button.css';

export default class Button extends React.Component {
  render() {
    const Button = cn('Button');

    return (
      <button className={`${Button()} ${Button({color: this.props.text === 'Да' ? 'yellow' : 'gray' })}`} type="button">{this.props.text}</button>
    )
  }
}
