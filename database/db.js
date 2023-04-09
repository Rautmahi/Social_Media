const mongoose = require('mongoose');


const connect = async()=>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.DB_URL);
        console.log("Connect database")
    }catch(err){
        console.log('Connection failed')
    }
};

module.exports = connect