/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
// import FormScreen from './src/scenes/Form';
// import DashboardSrceen from './src/scenes/Dashboard';
// import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
    return (
      <App/>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
