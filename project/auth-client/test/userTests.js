const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const apiAddress = "http://localhost:8080"

describe('User tests', function() {
    //register
    describe('POST /register', function() {
        it('should register with correct info', function() {
            chai.request(apiAddress)
            .post('/register')
            .send({
                username: "tester",
                password: "pass"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
            })
        })

        it('should not register with empty post', function() {
            chai.request(apiAddress)
            .post('/register')
            .send()
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(400);
            })
        })

        it('should not register with variables reaching over 255 char limit', function() {
            chai.request(apiAddress)
            .post('/register')
            .send({
                username: "tester11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                password: "pass1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(400);
            })
        })
    })

    //login
    describe('POST /login', function(){
        it('should login with correct info', function() {
            chai.request(apiAddress)
            .post('/login')
            .send({
                username: "tester",
                password: "pass"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
            })
        })
    }) 

    //delete user 
})