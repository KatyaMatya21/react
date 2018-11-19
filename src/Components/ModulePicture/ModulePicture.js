import * as React from 'react';
import {cn} from '@bem-react/classname';

import './ModulePicture.css';

import cam2w from './assets/robot-cleaner@2x.webp';
import cam2j from './assets/robot-cleaner@2x.jpg';
import cam1w from './assets/robot-cleaner@1x.webp';
import cam1j from './assets/robot-cleaner@1x.jpg';

export default class ModulePicture extends React.Component {
  render() {
    const ModulePicture = cn('ModulePicture');
    const VH = cn('VisuallyHidden');

    return (
      <React.Fragment>
        <div className={ModulePicture()}>
          <a className={ModulePicture('Link')} href="/">
            <picture>
              <source srcSet={cam1w + ' 1x, ' + cam2w + ' 2x'} type="image/webp" />
              <img className={ModulePicture('Image')} src={cam1j} srcSet={cam1j + ' 1x, ' + cam2j + ' 2x'} alt="Вид с камеры в гостиной" />
            </picture>
            <span className={ModulePicture('Indicator')}><span className={VH()}>Я ползунок!</span></span>
          </a>
          <div className={ModulePicture('CamDetails')}>
            <span className={ModulePicture('Scale')}>Приближение: <strong>78%</strong></span>
            <span className={ModulePicture('Light')}>Яркость: <strong>50%</strong></span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
