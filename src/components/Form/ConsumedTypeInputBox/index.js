import React, {Component} from 'react';
import {TextInput, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {Modal, StyleSheet, View} from 'react-native';
import Button from 'react-native-paper/src/components/Button';

const TYPE_LIST = {
    meals: "Meals",
    food: "Food",
    transport: "Transport",
    entertainment: "Entertainment",
    study: "Study",
}

class ConsumedTypeInputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeValueTemp: "",
            typeValue: "",
            typeString: "",
            showModal: false
        }
    }

    /* State handler */
    typeValueTempHandler = (value) => {
        this.setState({
            typeValueTemp: value,
        });
    }

    showModalHandler = (newShowModal) =>{
        this.setState({
            showModal: newShowModal
        })
    }

    typeInputHandler = (value) => {
        this.setState({
            typeValueTemp: "",
            typeValue: "other",
            typeString: value
        });
    }

    onSet = () => {
        this.setState({
            typeValue: this.state.typeValueTemp,
            typeString: TYPE_LIST[this.state.typeValueTemp]
        });
        this.showModalHandler(false);
    }

    onCancel = () => {
        this.setState({
            typeValueTemp: ""
        });
        this.showModalHandler(false);
    }

    render() {
        return (
            <>
                <TextInput
                    mode="outlined"
                    label="Type"
                    value={this.state.typeString}
                    onChangeText={(text)=>this.typeInputHandler(text)}
                    right = {
                        <TextInput.Icon
                            name={() => <Icon name="list" color="#00000" size={20}/>}
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
                            <RadioButton.Group onValueChange={value => this.typeValueTempHandler(value)} value={this.state.typeValueTemp}>
                                <RadioButton.Item label="Meals" value="meals" />
                                <RadioButton.Item label="Food" value="food" />
                                <RadioButton.Item label="Transport" value="transport" />
                                <RadioButton.Item label="Entertainment" value="entertainment" />
                                <RadioButton.Item label="Study" value="study"/>
                            </RadioButton.Group>
                            <View style={styles.container}>
                                <Button
                                    mode="contained"
                                    style={styles.button}
                                    onPress={() => this.onCancel()}
                                >Cancel</Button>
                                <Button
                                    mode="contained"
                                    style={styles.button}
                                    onPress={() => this.onSet()}
                                >Set</Button>
                            </View>
                        </View>
                    </Modal> : null}
            </>
        )
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

export default ConsumedTypeInputBox;
