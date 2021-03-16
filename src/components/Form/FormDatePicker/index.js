import React, {Component} from 'react';
import {Modal, View, StyleSheet, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import moment from 'moment';
import Button from 'react-native-paper/src/components/Button';

class FormDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            markedDate: {},
            showModal: false
        }
    }

    componentDidMount() {
        this.setTodayAsMarkedDate();
    }

    /* Component did mount function */
    setTodayAsMarkedDate = () => {
        let today = {};
        today[moment().format("YYYY-MM-DD")] = {selected: true, endingDay: true, color: 'green', textColor: 'gray'};
        this.setState({
            date: moment().format("YYYY-MM-DD"),
            markedDate: today
        })
    }

    /* State handler */
    markedDateHandler = (date) => {
        let newMarkedDate = {};
        newMarkedDate[date.dateString] =  {selected: true, endingDay: true, color: 'green', textColor: 'gray'};
        this.setState({
            markedDate: newMarkedDate,
        });
    }

    onSetHandler = () => {
        console.log(Object.keys(this.state.markedDate));
        let keys = Object.keys(this.state.markedDate);
        if (keys.length > 0){
            let newDate = keys[0];
            this.setState({
                date: newDate,
            });

        }
        this.showModalHandler(false);
    }

    onCancelHandler = () => {
        let newMarkedDate = {};
        if (this.state.date !== ""){
            newMarkedDate[this.state.date] =  {selected: true, endingDay: true, color: 'green', textColor: 'gray'};
            this.setState({
                markedDate: newMarkedDate,
            });
        }
        this.showModalHandler(false);
    }

    showModalHandler = (newShowModal) =>{
        this.setState({
            showModal: newShowModal
        })
    }

    render() {
        return(
            <>
                <TextInput
                    mode="outlined"
                    label="Date"
                    value={this.state.date}
                    editable={false}
                    right = {
                        <TextInput.Icon
                            name={() => <Icon name="calendar" color="#00000" size={20}/>}
                            onPress={() => this.showModalHandler(true)}
                        />
                    }
                />
                {this.state.showModal ?
                <Modal
                    animationType="fade"
                    transparent={true}
                >
                    <View style={styles.modalView}>
                        <Calendar
                            onDayPress={(day) => this.markedDateHandler(day)}
                            markedDates={this.state.markedDate}
                        />
                        <View style={styles.container}>
                            <Button
                                mode="contained"
                                style={styles.button}
                                onPress={() => this.onCancelHandler() }
                            >Cancel</Button>
                            <Button
                                mode="contained"
                                style={styles.button}
                                onPress={() => this.onSetHandler()}
                            >Set</Button>
                        </View>
                    </View>
                </Modal> : null}
            </>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        flex: 1,
        marginHorizontal: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        elevation: 5
    }
});

export default FormDatePicker;
