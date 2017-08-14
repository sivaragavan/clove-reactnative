import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PodcastList from './components/PodcastList';

const CloveRouter = () => (
  <Router sceneStyle={{ paddingTop: 65 }} >
    <Scene key="main">
      <Scene
        key="podcastList"
        component={PodcastList}
        title="Podcasts"
        // rightTitle="Add"
        // onRight={() => Actions.employeeCreate()}
        initial
      />
    </Scene >
  </Router >
);

export default CloveRouter;
