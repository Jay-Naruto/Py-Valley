import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import Cards from "./dbCards.js"

const app=express()
const port=process.env.PORT || 9000


app.use(express.json())
app.use(cors())

const connectionUrl='mongodb+srv://admin:Naruto@123@cluster0.toqua.mongodb.net/tinder-clone?retryWrites=true&w=majority'
mongoose.connect(connectionUrl,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection

db.once('open',()=>{
    console.log("Db connected!")
})

app.get("/",(req,res)=>{
    res.status(200).send("hello")
})

app.post("/main/tinder/cards",(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err)
        {
            res.status(500).send(err.message)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get("/main/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err.message)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.listen(port,()=>console.log(`Listening on ${port}`))