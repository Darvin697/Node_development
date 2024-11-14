const path = require('path');
const { title } = require('process');
const friends = require('../models/friends.models');

function getMessages(req, res) {
    // res.send('<ul><li>Hello Albert !</li></ul>')
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', '4524153.jpg'));
    res.render('messages',  {
        title: 'messages to my friends',
        friend:  'Elon musk',
    });
}

function postMessages(req, res)  {
    console.log('updating the messages ...');
}

module.exports = {
    getMessages,
    postMessages,
};