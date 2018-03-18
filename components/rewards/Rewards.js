import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {Card} from '../Card/Card';

class Rewards extends PureComponent {

    render() {
        return (
            <Card style={this.props.color}>
                <Text>{this.props.text}</Text>
            </Card>
        )
    }
}

Rewards.propTypes = {
    text: PropTypes.string
};

export {Rewards};
