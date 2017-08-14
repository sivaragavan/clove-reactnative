import React, { Component } from 'react';
import { ListView } from 'react-native';

import EpisodeListItem from './EpisodeListItem';

class EpisodeList extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ podcast }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(podcast.episodes);
  }

  renderRow(episode) {
    return <EpisodeListItem episode={episode} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default EpisodeList;
