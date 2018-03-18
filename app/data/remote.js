import {store} from './store';
import io from 'socket.io-client';
import axios from 'axios';
import {addDataPoint} from './remote.calculation';
import {notify} from '../settings/notification';

let timeout,
    countShowError = 0,
    countMaxErrorOccured = 1;

const socket = io.connect('http://10.17.166.219:3001/');

socket.on('connect_failed', () => {
    notify('Network connection was failed.');
});

socket.on('disconnect', () => {
    notify('Connection was disconnected.');
});

axios.get('http://10.17.166.219:3001/api/feed/uids')
    .then(({data: uids_remote}) => {
        const uids = uids_remote.map(i => i.uid);
        const dataPoints = {};

        uids.forEach(uid => dataPoints[uid] = []);

        store.dispatch({type: 'UIDS', payload: uids});
        return [uids, dataPoints];
    })
    .then(([uids, dataPoints]) => {
        socket.on('data', (data) => {
            store.dispatch({type: 'REMOTE_DATA', payload: data});

            uids.forEach(uid => {
                dataPoints[uid] = addDataPoint(dataPoints[uid], data[uid])
            });

            store.dispatch({type: 'SORTED_REMOTE_DATA', payload: dataPoints});

            if (countShowError < countMaxErrorOccured) {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    notify('There is no incoming data from the server...');
                    countShowError += 1;
                }, 5000);
            }
        });
    })
    .catch(error => {
        if (countShowError < countMaxErrorOccured) {
            notify('Network connection was corrupted.');
            countShowError += 1;
        }
    });

setInterval(() => countShowError = 0, 60000);
