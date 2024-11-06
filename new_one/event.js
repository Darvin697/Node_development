const EventEmitter = require('events');
const celebarity = new EventEmitter();

celebarity.on("race win", () => {
    console.log('congrulations you are the winner!!');

})

celebarity.on('race win', () => {
    console.log('i could have done this better !!');
})

celebarity.on('race lost',() => {
    console.log('maybe next time man!!!!');
})

celebarity.emit('race win');
celebarity.emit('race lost');