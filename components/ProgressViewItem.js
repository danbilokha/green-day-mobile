import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class ProgressViewItem extends Component {
    get powerProduced() {
        const { stage: { powerProduced } } = this.props;
        return powerProduced ? `${powerProduced}kW` : ' ';
    }

    get actualMoneyEarned() {
        const { stage: { actualMoneyEarned, predictedMoneyEarned } } = this.props;
        return actualMoneyEarned ? `${actualMoneyEarned}$` : predictedMoneyEarned ? `${predictedMoneyEarned}$` :' ';
    }

    get marathonBoundary() {
        const { first, last } = this.props;

        if (first) {
            return 'Mararhon started';
        }

        if (last) {
            return 'Finshed'; 
        }

        return ' ';
    }

    get month() {
        const { stage: { month, year } } = this.props;
        const { first, last } = this.props;

        return first || last ? `${month} ${year}` : month;
    }

    render() {
        const { stage, last } = this.props;
        return (
            <View style={[styles.container, this.props.last && styles.containerLast]}>
                {
                    last ? <Image
                        style={styles.image}
                        source={require('../assets/images/award.png')}
                    /> : (
                        <View>
                            <Text style={styles.powerProduced}>{this.powerProduced}</Text>
                            <Text style={[stage.status == 'current' && styles.moneyCurrent]}>{this.actualMoneyEarned}</Text>
                        </View>
                    )
                }
                <View style={[styles.circle, stage.status !== 'past' && styles.circleEmpty, stage.status == 'current' && styles.circleCurrent]} />
                <View style={[styles.line, this.props.last && styles.lastLine]} />
                <Text style={[{ textAlign: 'left' }, styles.text]}>{this.marathonBoundary}</Text>
                <Text style={[styles.text, stage.status == 'current' && styles.textCurrent]}>{this.month}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        width: 150,
        position: 'relative',
    },
    containerLast: {
        marginRight: 0,
        width: 90,
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: 100/2,
        borderWidth: 5,
        backgroundColor: '#00aaa5',
        borderColor: '#00aaa5',
        marginTop: 15,
        marginBottom: 15,
    },
    circleEmpty: {
        backgroundColor: '#ffffff',
    },
    circleCurrent: {
        backgroundColor: '#f8e71c',
    },
    line: {
        position: 'absolute',
        top: '50%',
        left: 30,
        width: 150,
        height: 5,
        backgroundColor: '#00aaa5',
    },
    lastLine: {
        width: 0,
    },
    moneyCurrent: {
        color: '#4a90e2',
    },
    image: {
        width: 25,
        height: 35,
    },
    text: {
        color: '#9b9b9b',
    },
    textCurrent: {
        color: '#000000',
    },
    powerProduced: {
        fontSize: 18,
    }
});

export default ProgressViewItem;