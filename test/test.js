let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Get numeros primos: ',()=>{
    it('obtener numeros primos', (done) => {
    chai.request(url)
    .get('/api/numeros-primos/20')
    .end( function(err,res){
    console.log(res)
    expect(res).to.have.status(200);
    done();
    });
    });
   });

   describe('obtiene numeros primos: ',()=>{

	it('No debería obtener los números (se envía string), mensaje de error', (done) => {
		chai.request(url)
            .get('/api/numeros-primos/huw')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(404);
				done();
			});
	});

});


describe('obtiene numeros primos: ',()=>{

	it('No debería obtener los números (se envia valor vacío), mensaje de error', (done) => {
		chai.request(url)
            .get('/api/numeros-primos')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(404);
				done();
			});
	});

});

describe('obtiene numeros primos: ',()=>{

	it('No debería obtener los números (número menor a 2), mensaje de error', (done) => {
		chai.request(url)
            .get('/api/numeros-primos/0')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(404);
				done();
			});
	});

});