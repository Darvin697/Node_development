const { log } = require('console');
const EventEmitter = require('events');
const celebarity = new EventEmitter();

celebarity.on("race",(result) => {
    if (result === 'win') {
        console.log('we love you brooo!!!!');
        
    }
});

celebarity.on('race',(result) => {
    if (result === 'win') {
        console.log('Booo i could have done this better ');
        
    }
});

process.on('exit',(code) => {
    console,log('process  exit with status code',code);
})

celebarity.emit('race','win');
celebarity.emit('race','lost');