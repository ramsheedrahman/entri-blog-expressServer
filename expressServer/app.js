var express=require('express')
var app=express()
var ejs=require('ejs')
app.set('view engine','ejs')
var db=require('./confi/connection')
userRouter=require('./routes/users')
adminRouter=require('./routes/admin')
db.connect((err)=>{
    if(err) console.log('error')
    else  console.log('database conectes');
  
})
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.listen(3000,()=>{
 console.log('server connected');
})