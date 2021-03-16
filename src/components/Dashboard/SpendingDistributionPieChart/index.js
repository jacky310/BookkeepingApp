import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {VictoryPie} from 'victory-native';
import theme from '../../../config/theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class SpendingDistributionPieChart extends Component {
    render() {
        return (
            <Card
                elevation={3}
                style={styles.card}>
                <Text style={styles.cardTitle}>Spending Distribution</Text>
                <View style={styles.cardView}>
                    <View>
                        <VictoryPie
                            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
                            height={300}
                            width={400}
                            padding={40}
                            innerRadius={70}
                            labelRadius={({innerRadius}) => innerRadius + 45}
                            data={[
                                {x: 'Food', y: 100},
                                {x: 'Housing', y: 20},
                                {x: 'Clothes', y: 20},
                                {x: 'Others', y: 49},
                            ]}
                        />
                    </View>
                </View>
            </Card>
        );
    }

}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
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
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.black,
    },
});

export default SpendingDistributionPieChart;
