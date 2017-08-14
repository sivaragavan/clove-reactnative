import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { podcastsFetch } from '../actions';
import PodcastListItem from './PodcastListItem';

class PodcastList extends Component {
  componentWillMount() {
    this.props.podcastsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ podcasts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(podcasts);
  }

  renderRow(podcast) {
    return <PodcastListItem podcast={podcast} />;
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

const mapStateToProps = state => {
  const podcasts = _.map(state.podcasts, (val, uid) => ({ ...val, uid }));
  return { podcasts };
};

export default connect(mapStateToProps, { podcastsFetch })(PodcastList);
