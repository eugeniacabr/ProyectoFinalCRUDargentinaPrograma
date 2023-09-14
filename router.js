const express = require('express');
const router = express.Router();
const conexion = require('./database/db')

router.get('/', (req,res)=>{
    
    conexion.query('SELECT * FROM users', (error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results})  }
    });
})

router.get('/create',(req,res)=>{
    res.render('create')
})

const crud = require('./controllers/crud');
router.post('/save',crud.save)
//Ruta para editar registros

router.get('/edits/:id',(req,res)=>{
    const id= req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edits',{user:results[0]})
        }
    });
})

module.exports= router;