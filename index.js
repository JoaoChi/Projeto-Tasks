/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Auth from './src/screens/Auth';
import {name as appName} from './app.json';
import App from './src/Navigator';

AppRegistry.registerComponent(appName, () => App);