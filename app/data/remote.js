import {store} from './store';
import io from 'socket.io-client';
import axios from 'axios';
import PushNotificationAndroid from 'react-native-push-notification';
import { addDataPoint } from './remote.calculation';

const socket = io.connect('http://10.17.166.219:3001/');
let timeout;

axios.get('http://10.17.166.219:3001/api/feed/uids')
    .then(({ data: uids_remote }) => {
        const uids = uids_remote.map(i => i.uid);
        const dataPoints = {};

        uids.forEach(uid => dataPoints[uid] = []);

        store.dispatch({type: 'UIDSS', payload: uids});

        return [uids, dataPoints];
    })
    .then(([uids, dataPoints]) => {
        socket.on('data', (data) => {
            if (timeout) {
                clearTimeout(timeout);
            }
            
            store.dispatch({type: 'REMOTE_DATA', payload: data});

            uids.forEach(uid => {
                dataPoints[uid] = addDataPoint(dataPoints[uid], data[uid])
            });

            store.dispatch({ type: 'SORTED_REMOTE_DATA', payload: dataPoints });

            timeout = setTimeout(() => {
                PushNotificationAndroid.localNotificationSchedule({
                    message: 'There is no incoming data from the server...',
                    date: 1000,
                });        
            }, 5000);
        });
    })
    .catch(error => {
        console.log(error);
        PushNotificationAndroid.localNotificationSchedule({
            message: 'Network connection was corrupted.',
            date: 1000,
        });
    });

