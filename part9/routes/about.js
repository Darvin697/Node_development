var express=require('express')
var router = express.Router()
var MongoClient=require('mongodb').MongoClient





router.get('/',function (req,res,next){
    res.sendFile('about',)})

router.post('/submit',function (req,res,next){
    console.log(req.body)
    MongoClient.connect("mongodb://localhost:27017", function(err, db){
        if(db){
          console.log("error")
        }else{
          console.log("connected")
        }
      })
    res.send('Login')
})

module.exports=router;