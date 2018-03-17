import React from 'react';
import { G, Path } from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
    Dash: {
        svg: (
            <G fillRule="event-odd">
                <Path d="M0 0h24v24H0z" fill="none" />
                <Path fillRule="nonzero" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </G>
        ),
        viewBox: '0 0 24 24',
    },
    Home: {
        svg: (
            <G fillRule="event-odd">
                <Path d="M10 21v-6h4v6h5v-8h3L12 4 2 13h3v8z" fillRule="nonzero" />
                <Path d="M0 0h24v24H0z" fill="none" />
            </G>
        ),
        viewBox: '0 0 24 24',
    },
    Notifications: {
        svg: (
            <G fillRule="event-odd">
                <Path d="M12 21.5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 4.86 6 7.42 6 10.5v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6C8 8.02 9.51 6 12 6s4 2.02 4 4.5v6z" fillRule="nonzero" />
            </G>
        ),
        viewBox: '0 0 24 24',
    },
}