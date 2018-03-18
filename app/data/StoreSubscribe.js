import React, {PureComponent} from 'react';
import { View } from 'react-native';
import {store} from './store';

class StoreSubscribe extends PureComponent {

    state = {
        state: store.getState(),
    };

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                state: store.getState(),
            });
        });
    }

    render() {
        return (
            <View>
                {this.props.children(this.state.state)}
            </View>
        );
    }

}

export {StoreSubscribe};
