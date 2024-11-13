const express = require('express');
const path = require('path')

const friendsRouter = require('./routes/friends.routers')
const messagesRouter = require('./routes/messages.router');
const { title } = require('process');

const app = express()


const PORT = 3000;




// Middle ware example
app.use((req, res, next) => {
    const start = Date.now();
    
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
    
    
})

app.use('/site', express.static(path.join(__dirname,'public')))

app.use(express.json());
app.use('view engine', 'hbs')
app.set('views', path.join(__dirname,'views'))


//route handlers


app.get('/', (req,res) =>{
    res.render('index', {
        title: 'My Friends Are clever',
        caption: 'my himalan is a good ',
    })
})
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);




app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}....`)
})