import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Grid.css';

import * as Data from '../../events.json'

import Module from '../Module/Module';

export default class Grid extends React.Component {
  render() {
    const Grid = cn('Grid');

    const moduleList = Data.events.map((item) => (
      <Module
        key={item.icon}
        type={item.type}
        size={item.size}
        title={item.title}
        sources={item.source}
        time={item.time}
        description={item.description}
        icon={item.icon}
        data={item.data}
      />
    ));

    return (
      <div className={Grid()}>{moduleList}</div>
    )
  }
}
