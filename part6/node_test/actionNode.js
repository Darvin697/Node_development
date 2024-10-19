var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function (req ,res){

    var q=url.parse(req.url,true)
    //console.log(q.pathname)

    if(q.pathname==='/'){


    fs.readFile('sample.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    }
    else if(q.pathname==='/login'){

        fs.readFile('testhtml.html',function (err,data2){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data2)
            res.end()
        })
        
    }else if(q.pathname==='/submit'){

        console.log(q.query)
        console.log(q.query.fname)


        res.write('value')
        res.end()
    }
    else{
        fs.readFile('errorfile.html',function (err,data3){
            res.writeHead(400,{'Content-Type':'text/html'})
            res.write(data3)
            res.end()
        })
        
        
    }
    
}).listen(8000,() => (console.log("Server Running ........")))

