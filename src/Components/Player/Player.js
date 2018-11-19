import * as React from 'react';
import {cn} from '@bem-react/classname';

import './Player.css';

export default class Player extends React.Component {
  render() {
    const Player = cn('Player');
    const VH = cn('VisuallyHidden');

    return (
      <div className={Player()}>
        <div className={Player('Song')}>
          <img className={Player('Image')} src={this.props.albumcover} width="53" height="52" alt="Обложка альбома" />
            <div className={Player('Right')}>
              <div className={Player('NameWrap')}>
                <p className={Player('Name')}>{this.props.artist} – {this.props.track.name}</p>
              </div>
              <div className={Player('Line')}>
                <button className={Player('Button')}><span className={VH()}>Перемотка</span></button>
              </div>
              <span className={Player('Num')}>{this.props.track.length}</span>
            </div>
        </div>
        <div className={Player('Controls')}>
          <p className={Player('ControlsWrap')}>
            <button className={`${Player('Control')} ${Player('Control', { type: 'prev' })}`} type="button"><span
              className={VH()}>Перемотай назад</span></button>
            <button className={`${Player('Control')} ${Player('Control', { type: 'next' })}`} type="button"><span
              className={VH()}>Перемотай вперёд</span></button>
          </p>
          <div className={Player('Right')}>
            <div className={Player('Line')}>
              <button className={Player('Button')}><span className={VH()}>Громкость</span></button>
            </div>
            <span className={Player('Num')}>{this.props.volume}%</span>
          </div>
        </div>
      </div>
    )
  }
}
