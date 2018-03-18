import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Promo from '../Promo';

class Body extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Promo />
                <Text>Body test</Text>
            </View>
        )
    }
}

export { Body };
