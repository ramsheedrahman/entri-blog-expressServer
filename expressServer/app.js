var express=require('express')
var app=express()
var ejs=require('ejs')
app.set('view engine','ejs')
userRouter=require('./routes/users')
adminRouter=require('./routes/admin')
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.listen(3000,()=>{
 console.log('server connected');
})