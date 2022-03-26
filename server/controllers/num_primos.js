const primos =  {"num_primos" : []};
const valoresAceptados = /^[0-9]+$/;

function getNumPrimos (req, res){
    let limite = req.params.limit;
    if (limite === undefined){
        res.status(404).send('Debe ingresar un valor');
    }else if(!limite.match(valoresAceptados)) {
        res.status(404).send('Debe ingresar un valor númerico');
    }else if(limite<2) {
        res.status(404).send('Debe ingresar un limite mayor o igual a 2');
    }else{
       let result =  obtieneNumerosPrimos(limite);
        res.send(result);
    }
    
}


//retorna los numeros primos 
function obtieneNumerosPrimos(limite){
    primos['num_primos'].length = 0;

    for (var i= limite; i>= 2; i--){
        if (esNumeroPrimo(i) == 'S') {
            primos['num_primos'].push(i);
        }
    }
   
    return primos;

}

//devuelve si el numero es primo o no
function esNumeroPrimo(numero){
    let primo = 'S';

    for (var i = 2; i <= 9; i++) {
        if(numero % i == 0 && numero != i){
            primo = 'N';
            break;
        }
     }

     return primo;
}

module.exports = {getNumPrimos};
