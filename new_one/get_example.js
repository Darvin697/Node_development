const { get } = require('https');

get('https://google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end' ,() => {
        console.log('no more data');
    })

})