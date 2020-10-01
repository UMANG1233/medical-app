var express=require('express')
var app=express()
require('./db/mongoose')
var path = require('path')
var bodyParser= require('body-parser')
const userRouter = require('./routers/user')
const medicineRouter = require('./routers/medicine')
const multer=require('multer')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRouter)
app.use(medicineRouter)
app.use(express.json())
app.set("view engine", "ejs");
app.set('views','./src/views');


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

const Medicine = require('./models/medicine')
const User = require('./models/user')
