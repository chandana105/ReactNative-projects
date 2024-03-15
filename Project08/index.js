/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import {playbackService} from './musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);

// 2ns step :- is to register the palyback servie which we have created in to the trackplayer

// basically here idea is ur player needs to be ready ,  and needs to be listenoing for some events
// ie called setup of the player, ie ur app should be available and aware that thesee settigns are availbae to us, this should be avalbe for entriety of app (as u can be tryign t obuild the app, which runs sth on bakcground)
