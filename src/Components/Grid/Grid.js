import * as React from 'react';

import './Grid.css';

import * as Data from '../../events.json'

import Module from '../Module/Module';

export default class Grid extends React.Component {
  render() {
    const moduleList = Data.events.map((item) => (
      <Module
        key={item.icon}
        type={item.type}
        classes={`module module--${item.type} module--${item.size}`}
        title={item.title}
        sources={item.source}
        time={item.time}
        description={item.description}
        icon={item.icon}
        data={item.data}
      />
    ));

    return (
      <div className="grid">{moduleList}</div>
    )
  }
}
