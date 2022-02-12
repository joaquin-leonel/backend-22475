const express = require('express');
const loggerMiddleware= require('./middlewares/logger')
const authMiddleware =require('./middlewares/authorizer')


const app= express();
const PORT = process.env.PORT || 8080;

//Middlewares
app.use([
    loggerMiddleware,
    authMiddleware
]);

//Routes
app.get('/', (req,res) =>{
    
    res.send(`<h1>Home</h1>`)
   
})

app.get('/about,', (req,res) =>{
    
    res.send(`<h1>About</h1>`)
})



const connectedServer =app.listen(PORT,()=>{
    console.log(`server funcionando y corriendo en el puerto ${PORT}`)
})

connectedServer.on('error',(error) =>{
    console.error('Error:', error);
})