import * as React from 'react';

import ModuleGraph from '../ModuleGraph/ModuleGraph';
import ModuleStats from '../ModuleStats/ModuleStats';
import Player from '../Player/Player';
import ModuleButtons from '../ModuleButtons/ModuleButtons';
import ModulePicture from '../ModulePicture/ModulePicture';

export default class ModuleData extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.type === 'graph' && <ModuleGraph />}

        {this.props.data.temperature &&
        (<ModuleStats
          temperature={this.props.data.temperature}
          humidity={this.props.data.humidity}
        />)}

        {this.props.data.artist && (
          <Player
            albumcover={this.props.data.albumcover}
            artist={this.props.data.artist}
            track={this.props.data.track}
            volume={this.props.data.volume}
          />
        )}

        {this.props.data.buttons && <ModuleButtons buttons={this.props.data.buttons} />}

        {this.props.data.image && <ModulePicture />}

      </React.Fragment>
    )
  }
}
