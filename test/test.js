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
				expect(res).to.have.status(404);
				done();
			});
	});

});

describe('obtiene numeros primos: ',()=>{

	it('No debería obtener los números (se envía caracteres especiales), mensaje de error', (done) => {
		chai.request(url)
            .get('/api/numeros-primos/$#*')
			.end( function(err,res){
				expect(res).to.have.status(404);
				done();
			});
	});

});

describe('obtiene numeros primos: ',()=>{

	it('Debe retornar 4 números primos', (done) => {
		chai.request(url)
            .get('/api/numeros-primos/7')
			.end( function(err,res){
				expect(res.body.num_primos).to.have.lengthOf(4);
				done();
			});
	});

});

describe('obtiene numeros primos: ',()=>{

	it('Debe retornar el núero primo 2 en la posición 3', (done) => {
		chai.request(url)
            .get('/api/numeros-primos/7')
			.end( function(err,res){
				expect(res.body.num_primos[3]).to.equal(2);
				done();
			});
	});

});

describe('obtiene numeros primos: ',()=>{

	it('Debe retornar el núero primo 3 en la posición 2', (done) => {
		chai.request(url)
            .get('/api/numeros-primos/7')
			.end( function(err,res){
				expect(res.body.num_primos[2]).to.equal(3);
				done();
			});
	});

});

describe('obtiene numeros primos: ',()=>{

	it('Debe retornar el núero primo 5 en la posición 1', (done) => {
		chai.request(url)
            .get('/api/numeros-primos/7')
			.end( function(err,res){
				expect(res.body.num_primos[1]).to.equal(5);
				done();
			});
	});

});