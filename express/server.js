const express = require('express');

const app = express()

const PORT = 3000;

const friends = [{
    id: 0,
    name: 'Issac Newton',
},
{
    id: 1,
    name: 'Thomas Alva Edison'

}
];


app.get('/friends', (req, res) => {
res.json(friends);

});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({
            error:"friend not found"
        });
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Albert !</li></ul>')

})

app.post('/messages', (req, res) => {
    console.log('updating the messages ...');
})

app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}....`)
})