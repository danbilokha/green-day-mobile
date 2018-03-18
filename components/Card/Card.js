import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import {window} from '../global/global.calculation';

class Card extends PureComponent {

    renderTitle = () => this.props.title
        ? <View styles={styles.title}> {this.props.title} </View>
        : null;

    render() {
        return (
            <View style={{...styles.container, ...this.props.style}}>
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
        height: 30
    }
});

Card.propTypes = {
    title: PropTypes.string,
    props: PropTypes.object
};

export {Card};
