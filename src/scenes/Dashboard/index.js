import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Headline, Button, Appbar, Card} from 'react-native-paper';
import DatePicker from '../../components/DatePicker';
import MonthPicker from 'react-native-month-year-picker';
import { VictoryPie} from "victory-native";
import moment from 'moment';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class DashboardSrceen extends Component {
  constructor(props) {
    super(props);
    this.rowIndex0 = 0;
    this.state = {
      date: new Date(),
      show: false
    };
  }

  showPicker = (value) => {
    this.setState({
      show: value
    });
  }

  onValueChange = (event, newDate) => {
    const selectedDate = newDate || date;
    this.showPicker(false);
    this.setState({
      date: selectedDate
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Appbar.Header>
            <Appbar.Content title="Dashboard"/>
          </Appbar.Header>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <DatePicker/>
              {/* <Text>From:</Text>
              <Button mode="outlined" onPress={() => this.showPicker(true)}>
                <Text>{moment(this.state.date, "MM-YYYY").format('MMM')} - {moment(this.state.date, "MM-YYYY").format('YYYY')}</Text>
              </Button>
              <Text>To:</Text>
              <Button onPress={() => this.showPicker(true)}>
                <Text>{moment(this.state.date, "MM-YYYY").format('MMM')} - {moment(this.state.date, "MM-YYYY").format('YYYY')}</Text>
              </Button>
              {this.state.show && (
                <MonthPicker
                  onChange={(e, newDate) => this.onValueChange(e, newDate)}
                  value={this.state.date}
                  maximumDate={new Date()}
                  locale="en"
                />
              )} */}
              <View style={styles.container}>
                <VictoryPie
                  innerRadius={100}
                  data={[
                    { x: "Cats", y: 50 },
                    { x: "Dogs", y: 49 },
                    { x: "Birds", y: 1 }
                  ]}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
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

export default DashboardSrceen;