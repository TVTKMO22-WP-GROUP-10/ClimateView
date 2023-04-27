const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const apiAddress = "http://localhost:8080"

describe('User tests', function() {
    //register
    describe('POST /register', function() {
        it('should register with correct info', function(done) {
            chai.request(apiAddress)
            .post('/register')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                uname: "tester",
                pw: "pass"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })

        it('should not register with empty post', function(done) {
            chai.request(apiAddress)
            .post('/register')
            .send()
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(400);
                done()
            })
        })

        it('should not register with variables reaching over 255 char limit', function(done) {
            chai.request(apiAddress)
            .post('/register')
            .send({
                username: "tester11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                password: "pass1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(400);
                done()
            })
        })
    })

    //login
    describe('POST /login', function(){
        it('should login with correct info', function(done) {
            chai.request(apiAddress)
            .post('/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                uname: "tester",
                pw: "pass"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            })
        })
    }) 

    //delete user 
})