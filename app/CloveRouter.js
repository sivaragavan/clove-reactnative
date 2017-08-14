import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PodcastList from './components/PodcastList';
import EpisodeList from './components/EpisodeList';
import EpisodeDetail from './components/EpisodeDetail';

const CloveRouter = () => (
  <Router sceneStyle={{ paddingTop: 65 }} >
    <Scene key="main">
      <Scene
        key="podcastList"
        component={PodcastList}
        title="Podcasts"
        initial
      />
      <Scene
        key="episodeList"
        component={EpisodeList}
        title="Episodes"
      />
      <Scene
        key="episodeDetail"
        component={EpisodeDetail}
        title="Episode Detail"
      />
    </Scene >
  </Router >
);

export default CloveRouter;
