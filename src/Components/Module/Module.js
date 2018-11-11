import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Module.css';

import ModuleData from '../ModuleData/ModuleData';

export default class Module extends React.Component {
  render() {
    const Module = cn('Module');
    const VH = cn('VisuallyHidden');

    return (
      <article className={`${Module()} ${Module({type: this.props.type})} ${Module({size: this.props.size})}`} tabIndex="0">
        <div className={Module('Top')}>
          <h3 className={Module('Title')}>
            <span className={Module('Name')}>{this.props.title}</span>
            <span className={Module('Icon')}>
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={'#' + this.props.icon}></use>
          </svg>
        </span>
          </h3>
          <p className={Module('Details')}>
            <span className={Module('Type')}>{this.props.sources}</span>
            <span className={Module('Date')}>{this.props.time}</span>
          </p>
        </div>

        {this.props.description && (
          <div className={Module('Message')}>
            {this.props.description}

            {this.props.data && (
              <ModuleData data={this.props.data} />
            )}
          </div>
        )}

        <button className={Module('Close')} type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#cross"></use>
          </svg>
          <span className={VH()}>Понятно!</span>
        </button>
        <button className={Module('Next')} type="button">
          <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#next"></use>
          </svg>
          <span className={VH()}>Дальше!</span>
        </button>
      </article>
    )
  }
}
