import {store} from './store';
import io from 'socket.io-client';
import axios from 'axios';

import {addDataPoint} from './remote.calculation';

const socket = io.connect('http://10.17.166.219:3001/');

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
            store.dispatch({type: 'REMOTE_DATA', payload: data});

            uids.forEach(uid => {
                dataPoints[uid] = addDataPoint(dataPoints[uid], data[uid])
            });

             store.dispatch({ type: 'SORTED_REMOTE_DATA', payload: dataPoints });
        });
    })
    .catch(error => console.log(error));

