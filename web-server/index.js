const http = require('http');
const { json } = require('node:stream/consumers');

const PORT = 3000;

const friends = [
    {
        id:0,
        name:'sir issac newton',
    },
    {
        id:1,
        name:'Thomas Joseph'
    },
    {
        id:2,
        name:"Biju John",

    }
]

const server = http.createServer((req, res) =>{
    const items = req.url.split('/');
    // /friwends/2 ==> ['','friends',2]
    if (req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
            
        })
    }else if ( req.method === 'GET' && items[1] === 'friends') {
    // res.writeHead(200, {
    //     'content-type':'application/json'

    // });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length== 3){
        const friendIndex = Number(items[2]);
        res.end(JSON.stringify(friends[friendIndex]));


    }else{

    
    res.end(JSON.stringify(friends));
    }

    }else if( req.method === 'GET' && items[1] === 'messages'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Hello issac Newton</li>')
        res.write('<li>Whats  your thoughts on astronomy</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end();

    }else{
        res.statusCode = 404;
        res.end();
    }

})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}..`);
})
