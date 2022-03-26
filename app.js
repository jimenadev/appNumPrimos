const express=require('express');

const app=express();

//Rutas
require('./server/routes/num_primos')(app);




app.listen(3000, () => {
    console.log("escuchando en el puerto 3000");
});


module.exports={app};