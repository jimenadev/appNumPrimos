const md_auth=require('../middleware/validar');
const primosController=require('../controllers/num_primos');

module.exports=(app)=>{
    app.get('/api/numeros-primos/:limit',md_auth.validar,primosController.getNumPrimos);
}