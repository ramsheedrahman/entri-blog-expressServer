
const  mongoClient=require('mongodb').MongoClient
const state={  db:null}
  

module.exports.connect=(done)=>{
    var url = "mongodb://localhost:27017/mydb";

   mongoClient.connect(url,(err,client)=>{
    if (err ) return done(err);
      state.db=client.db('mydbs');
    })
    done()
}

module.exports.get=()=> {
    return state.db;
}