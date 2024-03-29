import axios from 'axios';
import parsePodcast from 'node-podcast-parser';
import firebase from 'firebase';

const podcasts = [
  // {
  //   pid:'atp',
  //   url:'http://atp.fm/episodes?format=rss'
  // },
  {
    pid: 'the-daily',
    url: 'http://feeds.podtrac.com/zKq6WZZLTlbM'
  },
  {
    pid: 'radiolab',
    url: 'http://feeds.wnyc.org/radiolab'
  },
  {
    pid: 'Tim Ferriss Show',
    url: 'http://timferriss.libsyn.com/rss'
  }

];

const config = {
  apiKey: 'AIzaSyDly8Yic1-m5e0OgPItQRTYFb0E4JOR9b8',
  authDomain: 'clove-aaa7a.firebaseapp.com',
  databaseURL: 'https://clove-aaa7a.firebaseio.com',
  projectId: 'clove-aaa7a',
  storageBucket: 'clove-aaa7a.appspot.com',
  messagingSenderId: '672920420353'
};

firebase.initializeApp(config);

console.log(`Loading ${podcasts.length} Podcasts\n`);

podcasts.forEach(podcast => {
  axios.get(podcast.url)
    .then(response => {
      parsePodcast(response.data, (err, podcastJSON) => {
        if (err) {
          console.error(err);
          return;
        }

        firebase.database().ref(`/podcasts/${podcast.pid}`)
          .set(podcastJSON)
          .then(() => {
            console.log(`${podcast.pid} - ${podcastJSON.title} (${podcastJSON.episodes.length})`);
          });
      });
    })
    .catch(error => {
      console.log(error);
    });
});
