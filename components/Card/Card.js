import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {window} from '../global/global.calculation';

class Card extends PureComponent {

    renderTitle = () => this.props.title
        ? <Text style={styles.title}> {this.props.title} </Text>
        : null;

    render() {
        return (
            <View style={[styles.container, !!this.props.style ? this.props.style : {}]}>
                {this.renderTitle()}
                {this.props.children}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: window.width,
        height: 'auto',
        margin: 5,

    },
    title: {
        backgroundColor: '#00aaa5',
        height: 20
    }
});

Card.propTypes = {
    title: PropTypes.string,
    props: PropTypes.object
};

export {Card};
