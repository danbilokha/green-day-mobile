let ws = new WebSocket('http://10.17.166.219:3001/api/feed/_hjhnm2w6y', 'GET');

ws.onopen = () => {
    // connection opened
    //ws.send('something'); // send a message
    console.log('opened');
};

ws.onmessage = (e) => {
    // a message was received
    console.log(e);
    console.log(e.data);
};

ws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
};

ws.onclose = (e) => {
    // connection closed
    console.log(e);
    console.log(e.code, e.reason);
};
