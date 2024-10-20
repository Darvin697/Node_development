var express=require('express')
var router = express.Router()

const values =['Darvin','Thomas','Johny','Shibu'] 

const person={name:"Thomas",comments:{comment:'This is a sample commet',date:'4-12-1000'}}

router.get('/',function (req,res,next){
    res.render('about',{person})
})

module.exports=router;