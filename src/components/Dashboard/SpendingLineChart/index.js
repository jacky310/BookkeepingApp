import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory-native';
import theme from '../../../config/theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class SpendingLineChart extends Component {
    render() {
        return (
            <Card
                elevation={3}
                style={styles.card}>
                <Text style={styles.cardTitle}>Daily Spending</Text>
                <View style={styles.cardView}>
                    <View style={styles.chart}>
                        <VictoryChart
                            height={350}
                            width={400}
                            theme={VictoryTheme.material}
                        >
                            <VictoryLine
                                style={{
                                    data: {stroke: '#c43a31'},
                                    parent: {border: '1px solid #ccc'},
                                }}
                                data={[
                                    {x: 1, y: 2},
                                    {x: 2, y: 3},
                                    {x: 3, y: 5},
                                    {x: 4, y: 4},
                                    {x: 5, y: 7},
                                ]}
                            />
                        </VictoryChart>
                    </View>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        marginBottom: 20,
        width: '90%',
    },
    cardView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        marginTop: 10,
        marginBottom: -40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.black,
    },
    chart: {
        marginLeft: 20,
    },
});

export default SpendingLineChart;
