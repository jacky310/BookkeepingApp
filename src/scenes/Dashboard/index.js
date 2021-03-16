// @flow
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SpendingDistributionPieChart from '../../components/Dashboard/SpendingDistributionPieChart';
import SpendingLineChart from '../../components/Dashboard/SpendingLineChart';
import MonthYearPicker from '../../components/MonthYearPicker';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <MonthYearPicker />
          <View style={styles.body}>
            <SpendingDistributionPieChart style={styles.pieChart} />
            <SpendingLineChart style={styles.lineChart} />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  pieChart: {
    marginTop: 20,
  },
  lineChart: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default DashboardScreen;
