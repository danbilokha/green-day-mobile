import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import PromoItem from './PromoItem';
import Icon from './Icon';

class Table extends Component {
    renderRow({ name, address, link }, index) {
        return (
            <View style={{ flexDirection: 'row' }} key={index}>
                <ScrollView horizontal={true}>
                    <View style={styles.tableCell}><Text>{name}</Text></View>
                    <View style={styles.tableCell}><Text>{address}</Text></View>
                    <View style={styles.tableCell}><Text style={styles.tableLink}>Link to home page</Text></View>
                </ScrollView>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', marginTop: 10 }}>
                <View style={styles.tableTitle}>
                    <Text style={{ color: '#ffffff' }}>{this.props.title}</Text>
                </View>
                    {
                        this.props.data.map((datum, index) => (
                            this.renderRow(datum, index)
                        ))
                    }
            </View>
        );
    }
}

class Promo extends Component {
    state = {
        items: [
            {
                icon: 'Time',
                description: 'Save your time'
            },
            {
                icon: 'Time',
                description: 'Earn with solar technology'
            },
            {
                icon: 'Monetization',
                description: 'Save your money'
            }
        ],
        manufacters: [
            {
                name: 'Bony Forge Solar Corp',
                address: 'Texas. st Union 14557',
                link: 'https://google.com',
            },
            {
                name: 'Solar Home',
                address: 'California 56763',
                link: 'https://google.com',
            },
            {
                name: 'Wind and solar systems',
                address: 'Texas. st Union TYsd 145567',
                link: 'https://google.com',
            },
            {
                name: 'Comp. Unit. Man',
                address: 'Texas. st Union 23',
                link: 'https://google.com',
            }
        ]
    };

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.right}>
                    <Text style={styles.title}>Solar North Corp.</Text>
                    <Text style={styles.content}>We will install solar system completely free and you will get 20% of all solar energy cost.</Text>
                </View>
                <ImageBackground
                    style={{width: '100%', height: 'auto', marginTop: 10,}}
                    source={require('../assets/images/solar-panels-under-blue-sky-and-sun-flare.png')}
                >
                    <View style={styles.left}>
                        {
                            this.state.items.map((item, index) => (
                                <PromoItem
                                    key={index}
                                    icon={item.icon}
                                    description={item.description}
                                />
                            ))
                        }
                        <View style={{ marginLeft: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ textAlign: 'right', color: '#ffffff', fontFamily: 'Lato', fontSize: 18}}>Contact manufacturer</Text>
                            <Icon name="Access" fill="#ffffff" width="25" height="25"/>
                        </View>
                    </View>
                </ImageBackground>
                <Table title="Nearest Manufacturer list" data={this.state.manufacters} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 17,
        color: '#3c3c3c',
        marginBottom: 10,
    },
    content: {
        fontFamily: 'Lato',
        fontSize: 19,
        color: '#00aaa5',
    },
    right: {
        padding: 10,
        backgroundColor: '#ffffff',
    },
    left: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(0, 170, 165, .6)',
    },
    tableCell: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        width: 200
    },
    tableTitle: {
        backgroundColor: '#00aaa5',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    tableLink: {
        color: '#4a90e2',
        fontFamily: 'Lato',
        fontSize: 14,
    }
});

export default Promo;
