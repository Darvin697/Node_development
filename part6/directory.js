var http=require('http')
var fs=require('fs')


http.createServer(function (req,res){

    if(req.url==="/"){

    fs.readFile('samplehtml.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    }else if(req.url==="/login"){
        res.write('login pannel')
        res.end()

    }else{
        res.write('Error')
        res.end()

    }



}).listen(7000) 