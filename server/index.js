const express = require('express')
const app = express()
var cors = require('cors')
const PORT = 5050
app.use(cors())
const mongoose = require('mongoose');

var bodyParser = require('body-parser')
app.use(bodyParser.json())


const PulseSchema = new mongoose.Schema({
    name: String,
    title: String,
    number: Number

}, { timestamps: true })

const Model = mongoose.model("Purse", PulseSchema)


app.get("/pulse",async(req,res)=>{
    const response = await Model.find()
    try {
        res.send({data:response})
    } catch (error) {
        res.send({error:error})
    }
})

app.get("/pulse/:id",async(req,res)=>{
    const {id} = req.params
    const response = await Model.findById(id)
    try {
        res.send({data:response})
    } catch (error) {
        res.send({error:error})
    }
})

app.delete("/pulse/:id",async(req,res)=>{
    const {id} = req.params
    const response = await Model.findByIdAndDelete(id)
    try {
        res.send({data:response})
    } catch (error) {
        res.send({error:error})
    }
})

app.post("/pulse",async(req,res)=>{
    const response = new Model(req.body)
    await response.save()
    try {
        res.send({data:response})
    } catch (error) {
        res.send({error:error})
    }
})



mongoose.connect('mongodb+srv://laman:laman123@purse.vy87bzx.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
})