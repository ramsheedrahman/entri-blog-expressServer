var express=require('express')
const db=require('../confi/connection')
var router=express.Router()
var func=require('../confi/functions')

let orders=[{'name':'pizza','size':'medium','price':'180'},{'name':'berger','size':'large','price':'280'},
{'name':'pizza','size':'large','price':'240'},
{'name':'pizza','size':'small','price':'120'},
{'name':'berger','size':'medium','price':'220'},{'name':'berger','size':'small','price':'200'}]

router.get('/',(req,res)=>{
    res.send('hii')
})
router.get('/login',(req,res)=>{
 db.get().collection('mycl').insertOne({orders})
    res.render('index',{title:'ram'})
})

router.get('/agg',(req,res)=>{
    func.getmatch().then((pro)=>{
        console.log(pro)
        res.send('agg')
})
    })

   
        
            
               
        
            
            
          
           
           
     
    
 
   
module.exports=router