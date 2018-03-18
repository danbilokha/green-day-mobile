// let PushNotification = require('react-native-push-notification');
//
// PushNotification.configure({
//
//     // (optional) Called when Token is generated (iOS and Android)
//     onRegister: function(token) {
//         console.log( 'TOKEN:', token );
//     },
//
//     // (required) Called when a remote or local notification is opened or received
//     onNotification: function(notification) {
//         console.log( 'NOTIFICATION:', notification );
//
//         // process the notification
//
//         // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
//         notification.finish(PushNotificationIOS.FetchResult.NoData);
//     },
//
//     // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
//     senderID: "YOUR GCM SENDER ID",
//
//     // IOS ONLY (optional): default: all - Permissions to register.
//     permissions: {
//         alert: true,
//         badge: true,
//         sound: true
//     },
//
//     // Should the initial notification be popped automatically
//     // default: true
//     popInitialNotification: true,
//
//     /**
//      * (optional) default: true
//      * - Specified if permissions (ios) and token (android and ios) will requested or not,
//      * - if not, you must call PushNotificationsHandler.requestPermissions() later
//      */
//     requestPermissions: true,
// });
//
// PushNotification.localNotificationSchedule({
//     message: "My Notification Message", // (required)
//     date: new Date(Date.now() + (60 * 1000)) // in 60 secs
// });

import PushNotificationAndroid from 'react-native-push-notification';
import {DeviceEventEmitter} from 'react-native';

(function () {
    // Register all the valid actions for notifications here and add the action handler for each action
    PushNotificationAndroid.registerNotificationActions(['Accept', 'Reject', 'Yes', 'No']);
    DeviceEventEmitter.addListener('notificationActionReceived', function (action) {
        console.log('Notification action received: ' + action);
        const info = JSON.parse(action.dataJSON);
        if (info.action == 'Accept') {
            // Do work pertaining to Accept action here
            console.log('ACCEPT received: ' + action);
        } else if (info.action == 'Reject') {
            // Do work pertaining to Reject action here
            console.log('REJECT received: ' + action);
        }
        // Add all the required actions handlers
    });
})();

export function notify(notification, delay = 1000) {
    PushNotificationAndroid.localNotificationSchedule({
        message: notification, // (required)
        date: new Date(Date.now() + delay)
    });
}

//WORKED APP
// setInterval(() => {
//     PushNotificationAndroid.localNotificationSchedule({
//         message: `My Notification Message, random data: ${Math.random() * 1000}`, // (required)
//         date: new Date(Date.now() + (6000 * 100)) // in 60 secs
//     });
// });
