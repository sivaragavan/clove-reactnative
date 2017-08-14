import firebase from 'firebase';

import {
  PODCASTS_FETCH_SUCCESS
} from './types';

export const podcastsFetch = () => (dispatch) => {
    firebase.database().ref('/podcasts')
      .on('value', snapshot => {
        dispatch({ type: PODCASTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
