import React, { Component } from 'react';
import { Text } from 'react-native';

class UpperCaseText extends Component {
    render() {
        const { style, children } = this.props;
        return (
            <Text style={style}>{children.toUpperCase()}</Text>
        );
    }
}

export { UpperCaseText };