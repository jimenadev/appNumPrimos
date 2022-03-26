const valoresAceptados = /[0-9]/;

function validar(req,res,next){
    let limite = req.params.limit;
    console.log('limi:'+limite);
    if (limite === undefined){
        res.status(404).send('Debe ingresar un valor');
    }else if(!limite.match(valoresAceptados)) {
        res.status(404).send('Debe ingresar un valor númerico');
    }else if(limite<2) {
        res.status(404).send('Debe ingresar un limite mayor o igual a 2');
    }else{
        next();
    }

}

module.exports={
    validar
}