const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const apiAddress = "http://localhost:8080"

describe('User tests', function() {
    //register user
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
            .set('content-type', 'application/x-www-form-urlencoded')
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
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                uname: "tester11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                pw: "pass1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                done()
            })
        })
    })

    //login user
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

        it('should login with incorrect info', function(done) {
            chai.request(apiAddress)
            .post('/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                uname: "wrong",
                pw: "info"
            })
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(401);
                done()
            })
        })

        it('should not login with empty fields', function(done) {
            chai.request(apiAddress)
            .post('/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send()
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(400);
                done()
            })
        })
    }) 

    //delete user 
    describe('DELETE /deleteuser/:uname', function(){
        it('should delete existing user', function(done) {
            chai.request(apiAddress)
            .delete('/deleteuser/tester')
            .end(function(err, res){
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            })
        })
    })
})