const express =require("express") // // expresi ekledik 
const app = express()
app.get('/',(req,res)=>{
    res.send("Hello word")
})
app.listen(3000)
const mongoose =require("mongoose") // mongoose ekledik 
const exphbs=require("express-handlebars")
const { use } = require("express/lib/application")
const { route } = require("express/lib/router")
const { Router } = require("express")
const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs'}) ///.hbs olan dosyaları ara

    app.engine('hbs',hbs.engine)  //// sitesinde bu kodlar var kullanmak için yazmamız gerekli.
    app.set('view engine','hbs')
    app.set('views','views')
    app.use("/",Router)
    app.use(express.urlencoded({extended:true}))    