import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class ProfileShortInfo extends PureComponent {
    render() {
        const date = new Date();
        const today = date.getUTCMonth() + 1 + '/' + date.getFullYear();

        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.avatar}
                        source={require('../../../assets/images/profile/avatar.png')}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text>Nick Sunny</Text>
                    <Text>Kyiv, Ukraine</Text>
                    <Text>Joined { today }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        maxHeight: 40,
    },
    avatar: {
        marginTop: -25,
        marginLeft: 10,
        maxWidth: 50,
        maxHeight: 50,
    },
    userInfo: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    }
});

export { ProfileShortInfo };
