const path = require('path')

function getMessages(req, res) {
    // res.send('<ul><li>Hello Albert !</li></ul>')
    res.sendFile(path.join(__dirname, '..', 'public', 'images', '4524153.jpg'));

}

function postMessages(req, res)  {
    console.log('updating the messages ...');
}

module.exports = {
    getMessages,
    postMessages,
};