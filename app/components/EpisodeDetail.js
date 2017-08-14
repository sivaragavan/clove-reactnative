import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';

import { CardSection } from './common';
import EpisodePlayer from './EpisodePlayer';

class EpisodeDetail extends Component {

  render() {
    const { description } = this.props.episode;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <CardSection>
            <HTMLView
              value={description}
              stylesheet={htmlStyles}
            />
          </CardSection>
        </ScrollView>
        <EpisodePlayer episode={this.props.episode} />
      </View>
    );
  }
}


const htmlStyles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366',
  },
});

export default EpisodeDetail;
