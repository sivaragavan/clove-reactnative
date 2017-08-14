import React, { Component } from 'react';
import { Text } from 'react-native';

import { CardSection } from './common';

class EpisodePlayer extends Component {

  render() {
    return (
      <CardSection style={styles.sectionStyle}>
        <Text>Player</Text>
      </CardSection>
    );
  }
}

const styles = {
  sectionStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ddd',
  }
};

export default EpisodePlayer;
