/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './screens/App';
import {name as appName} from './app.json';


console.disableYellowBox = true; // 关闭全部黄色警告
AppRegistry.registerComponent(appName, () => App);
