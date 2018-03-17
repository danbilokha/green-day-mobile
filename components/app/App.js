import React, {PureComponent} from 'react';
import {ScrollView, View} from 'react-native';
import {Menu} from '../menu/Menu';
import {Footer} from '../footer/Footer';
import {Body} from '../body/Body';

class Content extends PureComponent {

    render() {
        return (
            <ScrollView>
                <View>
                    <Menu/>
                    <Body/>
                    <Footer/>
                </View>
            </ScrollView>
        )
    }
}

export {Content};
