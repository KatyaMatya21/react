import * as React from 'react';
import './Player.css';

export default class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="player__song">
          <img className="player__image" src={this.props.albumcover} width="53" height="52" alt="Обложка альбома" />
            <div className="player__right">
              <div className="player__name-wrap">
                <p className="player__name">{this.props.artist} – {this.props.track.name}</p>
              </div>
              <div className="player__line">
                <button className="player__button"><span className="visually-hidden">Перемотка</span></button>
              </div>
              <span className="player__num">{this.props.track.length}</span>
            </div>
        </div>
        <div className="player__controls">
          <p className="player__controls-wrap">
            <button className="player__control player__control--prev" type="button"><span
              className="visually-hidden">Перемотай назад</span></button>
            <button className="player__control player__control--next" type="button"><span
              className="visually-hidden">Перемотай вперёд</span></button>
          </p>
          <div className="player__right">
            <div className="player__line">
              <button className="player__button"><span className="visually-hidden">Громкость</span></button>
            </div>
            <span className="player__num">{this.props.volume}%</span>
          </div>
        </div>
      </div>
    )
  }
}
