import * as React from 'react';

import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className={ 'button ' + ( this.props.text === 'Да' ? 'button--yellow' : 'button--gray' ) } type="button">{this.props.text}</button>
    )
  }
}
