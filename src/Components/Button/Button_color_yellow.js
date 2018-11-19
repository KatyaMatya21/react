import * as React from 'react';
import { withBemMod } from '@bem-react/core';
import {cn} from '@bem-react/classname';

import './Button.css';

const ButtonYellow = function(Base, props) {
  const Button = cn('Button');

    return (
      <button className={`${Button()} ${Button({color: 'yellow'})}`} type="button">{props.text}</button>
    );
};

export default withBemMod(
  'Button',
  { text: 'Да' },
  ButtonYellow
);
