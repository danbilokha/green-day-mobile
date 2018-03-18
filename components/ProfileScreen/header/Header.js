import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileShortInfo} from '../profileShortInfo/ProfileShortInfo';

class Header extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/profile/headerProfile.png')}
                    />
                    <Image
                        style={styles.avatar}
                        source={require('../../../assets/images/profile/avatar.png')}
                    />
                </View>
                <ProfileShortInfo />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    image: {
        maxWidth: '100%',
        maxHeight: 150,
    },
    avatar: {
        position: 'absolute',
        marginTop: 125,
        marginLeft: 10,
        maxWidth: 50,
        maxHeight: 50,
    }
});

export {Header};
