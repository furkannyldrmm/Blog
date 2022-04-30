const express =require("express") // // expresi ekledik 
const app = express()
app.get('/',(req,res)=>{
    res.send("Hello word")
})
app.listen(3000)