const primos =  {"num_primos" : []};
const valoresAceptados = /[0-9]/;

function getNumPrimos (req, res){
    let limite = req.params.limit;
    let result =  getPrimos(limite, isPrimo);
    res.send(result);
}


//retorna los numeros primos 
const  getPrimos = (limite, isNumPrimo) =>{
    primos['num_primos'].length = 0;
    for (var i= limite; i>= 2; i--){
        if (isNumPrimo(i,2)) {
            primos['num_primos'].push(i);
        }
    }
    return primos;

}

//devuelve si el numero es primo o no, con cilcos for
const isPrimo = (numero) =>{
    for (var i = 2; i <= 9; i++) {
        if(numero % i == 0 && numero != i){
            return  false;
        }
     }
     return true;
}

//devuelve si el numero es primo o no, de forma recursiva
function isPrimoRecursivo(n, i){
    if (n % i == 0 && n != i){
        return false;
    } else if (n<10 && i==n) {
        return true;
    }else if (n>=10 && i==10) {
        return true;
    }else{
        i= i+1;
        return isPrimo(n,i);
    }
}

module.exports = {getNumPrimos};
