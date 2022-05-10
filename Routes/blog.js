const {Router} =require("express")
const Blog=require("../model/Blog")

const Routes =Router()

router.get('/', async (req,res)=> {
    const blogs = await Blog.find({}).lean()
    res.render('index',{
        title:'aaaaa List',
        isIndex:true
    })                              //// hangi sayfaya ne göndereceğimizi gösterir indexe gönderir


    router.get('/create',(req,res)=> {
        res.render('create',{
            title:'create List',
            isCreate:true
        })

})

const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true //mutlaka dolu kayıt getirir
    },
    completed: {
        type: Boolean, //boolean değer atandığında nav atanamaz. mutlaka default değer göndermelidir. true olunca işleme başlar o yüzden genelde false verilir
        default: false
    }
})
 
router.post('/create', async (req,res) =>{
    const todo= new Todo({
        title: req.body.title,
    })
    await todo.save()
})

res.redirect('/') 

router.post('/complete', async (req,res) =>{
    const todo= await Blog.findById(req.body.id)
    blog.completed= !blog .completed;
  
    })
    await todo.save()
})

res.redirect('/') 



module.export = model('Todo', schema) //export ederken model içinde export eder. schema tablosu açar ve sütunlarını ekler

module.exports=router // bağlantı kurulmasını sağlar

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;