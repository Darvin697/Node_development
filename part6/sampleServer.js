var http=require('http')
var fs=require('fs')

http.createServer(function (req,res){

    fs.readFile('samplehtml.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })




}).listen(7000) // here server is a call back function having two pram request and response



// and can als0 write as 

/*http.createServer(function (req,res){
    res.write("crossroads")
    res.end()

}).listen(7000) */