const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const apiAddress = "http://localhost:8080"

describe('Visualization tests', function() {
    //v1
    describe('V1 tests', function() {
        it('should GET v1year', function(done) {
            chai.request(apiAddress)
            .get('/v1year')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should GET v1monthly', function(done) {
            chai.request(apiAddress)
            .get('/v1monthly')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should GET v1reconstruction', function(done) {
            chai.request(apiAddress)
            .get('/v1reconstruction')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
    })

    //v2
    describe('V2 tests', function() {
        it('shoulc GET v2icecore1', function(done) {
            chai.request(apiAddress)
            .get('/v2icecore1')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should GET v2icecore2', function(done) {
            chai.request(apiAddress)
            .get('/v2icecore2')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should GET v2icecore3', function(done) {
            chai.request(apiAddress)
            .get('/v2icecore3')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should GET v2maunaloannual', function(done) {
            chai.request(apiAddress)
            .get('/v2maunaloaAnnual')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should GET v2maunaloaMonthly', function(done) {
            chai.request(apiAddress)
            .get('/v2maunaloaMonthly')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
    })

    //v3
    describe('V3 tests', function() {
        it('should GET v3 ppm', function(done) {
            chai.request(apiAddress)
            .get('/co2')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('shoulc GET v3 temp', function(done) {
            chai.request(apiAddress)
            .get('/temp')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
        it('should GET v3 activities', function(done) {
            chai.request(apiAddress)
            .get('/activities')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
    })

    //v4
    describe('V5 tests', function() {
        it('should GET v5 data', function(done) {
            chai.request(apiAddress)
            .get('/v5data')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
        })
    })
})