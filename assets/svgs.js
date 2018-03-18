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
    Monetization: {
        svg: (
            <G fillRule="event-odd">
                <Path d="M22.5 3.833C12.15 3.833 3.75 12.42 3.75 23c0 10.58 8.4 19.167 18.75 19.167S41.25 33.58 41.25 23c0-10.58-8.4-19.167-18.75-19.167zm2.644 30.84v3.66h-5.006v-3.699c-3.207-.69-5.926-2.798-6.132-6.517h3.675c.188 2.013 1.538 3.585 4.969 3.585 3.675 0 4.5-1.879 4.5-3.048 0-1.59-.825-3.086-5.006-4.102-4.65-1.15-7.838-3.104-7.838-7.034 0-3.296 2.607-5.443 5.832-6.152v-3.7h5.006v3.738c3.487.863 5.231 3.565 5.344 6.498h-3.675c-.094-2.128-1.2-3.585-4.163-3.585-2.813 0-4.5 1.304-4.5 3.144 0 1.61 1.219 2.664 5.006 3.66 3.788.997 7.838 2.665 7.838 7.495-.019 3.507-2.588 5.424-5.85 6.056z" fillRule="nonzero" />
                <Path d="M0 0h45v46H0z" fill="none"/>
            </G>
        ),
        viewBox: '0 0 45 46',
    },
    Time: {
        svg: (
            <G fillRule="event-odd">
                <Path d="M22.481 3.833C12.131 3.833 3.75 12.42 3.75 23c0 10.58 8.381 19.167 18.731 19.167C32.85 42.167 41.25 33.58 41.25 23c0-10.58-8.4-19.167-18.769-19.167zm.019 34.5c-8.287 0-15-6.861-15-15.333 0-8.472 6.713-15.333 15-15.333 8.288 0 15 6.861 15 15.333 0 8.472-6.712 15.333-15 15.333z" fillRule="nonzero" />
                <Path d="M0 0h45v46H0z" fill="none" />
                <Path d="M23.438 13.417h-2.813v11.5l9.844 6.037 1.406-2.357-8.438-5.118z" fillRule="nonzero" />
            </G>
        ),
        viewBox: '0 0 45 46',
    },
    Access: {
        svg: (
            <G fillRule="event-odd">
                <Path d="M8.59 17.34l4.58-4.59-4.58-4.59L10 6.75l6 6-6 6z" fillRule="nonzero" />
                <Path d="M0 .75h24v24H0z" fill="none" />
            </G>
        ),
        viewBox: '0 0 24 25',
    },
}