import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

import { CardSection } from './common';
import EpisodePlayer from './EpisodePlayer';

class EpisodeDetail extends Component {

  componentDidMount() {
    ReactNativeAudioStreaming.play(this.props.episode.enclosure.url, {
      showIniOSMediaCenter: true,
      showInAndroidNotifications: true
    });
  }

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
