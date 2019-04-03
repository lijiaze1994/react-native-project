/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Route from  './screens/route/route';
import WelcomePage from './screens/page/welcome/WelcomePage';
import {name as appName} from './app.json';
console.disableYellowBox = true; // 关闭全部黄色警告

AppRegistry.registerComponent(appName, () => Route);
