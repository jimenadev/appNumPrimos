const primos =  {"num_primos" : []};
const valoresAceptados = /[0-9]/;

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
   
        if (primo(i,2)) {
            primos['num_primos'].push(i);
        }
    }
   
    return primos;

}

//devuelve si el numero es primo o no, con cilcos for
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

//devuelve si el numero es primo o no, de forma recursiva
function primo(n, i){
    if (n % i == 0 && n != i){
        return false;
    } else if (n<10 && (i==10 || i==n)) {
        return true;
    }else if (n>=10 && i==10 && n!=i) {
        return true;
    }else{
        i= i+1;
        return primo(n,i);
    }
}

module.exports = {getNumPrimos};
