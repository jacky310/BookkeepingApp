/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {StyleSheet} from 'react-native';
import FormScreen from './src/scenes/Form';
import DashboardScreen from './src/scenes/Dashboard';
import { BottomNavigation, Text } from 'react-native-paper';


const RecentsRoute = () => <Text>Recents</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Dashboard', icon: 'chart-line' },
    { key: 'form', title: 'Form', icon: 'pencil' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    form: FormScreen,
    dashboard: DashboardScreen,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
        barStyle={styles.bottomNavigation}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'white'
  }
});


export default App;
