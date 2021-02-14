import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import MonthPicker from 'react-native-month-year-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: new Date(),
            dateEnd: new Date(),
            showDateFromPicker: false,
            showDateEndPicker: false
        };
      }
    
      showDateFromPickerHandler = (value) => {
        this.setState({
            showDateFromPicker: value
        });
      }

      showDateEndPickerHandler = (value) => {
        this.setState({
            showDateEndPicker: value
        });
      }
    
      onDateFromChange = (event, newDate) => {
        const selectedDate = newDate || this.state.dateFrom;
        this.showDateFromPickerHandler(false);
        this.setState({
            dateFrom: selectedDate
        });
      }

      onDateEndChange = (event, newDate) => {
        const selectedDate = newDate || this.state.dateEnd;
        this.showDateEndPickerHandler(false);
        this.setState({
            dateEnd: selectedDate
        });
      }

    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Card elevation={3} style={styles.pickerCard}>
                <View style={styles.pickerCardView}>
                    <Button style={styles.button} onPress={() => this.showDateFromPickerHandler(true)}>
                        <Text>{moment(this.state.dateFrom, "MM-YYYY").format('MMM - YYYY')}</Text>
                    </Button>
                    <Icon name="arrow-right" size={15} style={styles.arrow}/>
                    <Button style={styles.button} onPress={() => this.showDateEndPickerHandler(true)}>
                        <Text>{moment(this.state.dateEnd, "MM-YYYY").format('MMM - YYYY')}</Text>
                    </Button>
                </View> 
            </Card>
            {this.state.showDateFromPicker && (
                <MonthPicker
                  onChange={(e, newDate) => this.onDateFromChange(e, newDate)}
                  value={this.state.dateFrom}
                  maximumDate={new Date()}
                  locale="en"
                />
            )}
            {this.state.showDateEndPicker && (
                <MonthPicker
                  onChange={(e, newDate) => this.onDateEndChange(e, newDate)}
                  value={this.state.dateEnd}
                  minimumDate={this.state.dateFrom}
                  maximumDate={new Date()}
                  locale="en"
                />
            )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    arrow: {
        textAlign: 'center',
        width: 50,
        color: '#6200ee',
    },
    pickerCard: {
        marginTop: 20,
    },
    pickerCardView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        width: 50
    },
    button: {
        // backgroundColor: "white",
        width: 120
    }
});

export default DatePicker;