require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user.route')
const postRouter = require('./routes/post.route')

const connect = require('./database/db')

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));


app.use('/users',userRouter)
app.use('/posts',postRouter)


app.get("/",async(req,res)=>
{
    res.status(200).send("server start")
});

app.listen(PORT,async()=>{
    await connect();
    console.log("Listening on PORT",PORT)
});


module.exports = app;