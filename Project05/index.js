/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// for expo (installed expo and run npx expo start)
AppRegistry.registerComponent('main', () => App);

// AppRegistry.registerComponent(appName, () => App); //for running on emulator
