import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {Card} from '../Card/Card';

class Rewards extends PureComponent {

    render() {
        const styles = {
            backgroundColor: this.props.color,
            padding: 5,
            maxWidth: 100,
        };
        const textStyles = {
            textAlign: 'center'
        };
        return (
            <Card style={styles}>
                <Text style={textStyles}>{this.props.text}</Text>
            </Card>
        )
    }
}

Rewards.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
};

export {Rewards};
