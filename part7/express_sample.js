const  express=require('express')
const path=require('path')
const bodyParser = require('body-parser');

const app=express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(function (req,res,next){       //THis is called middle ware we configure sessions and cookies here
  //  console.log("start")
 //   next()
//})

app.get('/',function (req,res){
    res.sendFile(path.join(__dirname,'login.html'))
    //console.log('middle')
   // next()
})

//app.use(function (req,res){
  //  console.log('end')
//})

app.get('/about',function (req,res){
    res.sendFile(path.join(__dirname,'about.html'))
})

app.get('/login',function (req,res){
    res.sendFile(path.join(__dirname,'singhup.html'))
})

app.post('/singhup',function (req,res){
    res.send('account created')
    console.log(req.body)
   

})






app.listen(3000, () => {console.log('server started .....')})