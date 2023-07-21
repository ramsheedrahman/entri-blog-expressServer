var express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    res.send('hii iam admin')
})
router.get('/login',(req,res)=>{
    res.render('index',{title:'admin login '})
})

module.exports=router