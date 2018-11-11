import * as React from 'react';

import './ModulePicture.css';

import cam2w from './assets/robot-cleaner@2x.webp';
import cam2j from './assets/robot-cleaner@2x.jpg';
import cam1w from './assets/robot-cleaner@1x.webp';
import cam1j from './assets/robot-cleaner@1x.jpg';

export default class ModulePicture extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a className="module__picture" href="/">
          <picture>
            <source srcSet={ cam1w + ' 1x, ' + cam2w + ' 2x'} type="image/webp" />
            <img className="module__image" src={cam1j} srcSet={ cam1j + ' 1x, ' + cam2j + ' 2x'} alt="Вид с камеры в гостиной" />
          </picture>
          <span className="module__indicator"><span className="visually-hidden">Я ползунок!</span></span>
        </a>
        <div className="module__cam-details">
          <span className="module__scale">Приближение: <strong>78%</strong></span>
          <span className="module__light">Яркость: <strong>50%</strong></span>
        </div>
      </React.Fragment>
    )
  }
}
