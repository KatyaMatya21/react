import * as React from 'react';
import './Module.css';

import ModuleData from '../ModuleData/ModuleData';

export default class Module extends React.Component {
  render() {
    return (
      <article className={this.props.classes} tabIndex="0">
        <div className="module__top">
          <h3 className="module__title">
            <span className="module__name">{this.props.title}</span>
            <span className="module__icon">
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={'#' + this.props.icon}></use>
          </svg>
        </span>
          </h3>
          <p className="module__details">
            <span className="module__type">{this.props.sources}</span>
            <span className="module__date">{this.props.time}</span>
          </p>
        </div>

        <div className="module__message">
          {this.props.description}

          {this.props.data && (
            <ModuleData data={this.props.data} />
          )}

        </div>

        <button className="module__close" type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#cross"></use>
          </svg>
          <span className="visually-hidden">Понятно!</span>
        </button>
        <button className="module__next" type="button">
          <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#next"></use>
          </svg>
          <span className="visually-hidden">Дальше!</span>
        </button>
      </article>
    )
  }
}
