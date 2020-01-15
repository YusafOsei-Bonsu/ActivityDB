process.env.NODE_ENV = 'test';
const chai = require('chai');
const should = chai.should();
const knex = require('../knex/knex.js');
const server = require('../app.js');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('API routes', () => {

    beforeEach(function(done) {
        knex.migrate.rollback()
        .then(function() {
          knex.migrate.latest()
          .then(function() {
            return knex.seed.run()
            .then(function() {
              done();
            });
          });
        });
      });
    
      afterEach(function(done) {
        knex.migrate.rollback()
        .then(function() {
          done();
        });
      });
    
    // Tests the GET route for showing activities 
    describe('GET /activities', () => {
        it('should return all activities', (done) => {
            chai.request(server)
            .get('/activities')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('array');
                res.body.length.should.equal(3);
                res.body[0].should.have.property('name');
                res.body[0].name.should.equal('sightseeing');
                res.body[0].should.have.property('fun');
                res.body[0].fun.should.equal(8);
                res.body[0].should.have.property('price');
                res.body[0].price.should.equal(120);
                // res.body[0].should.have.property('p_id');
                // res.body[0].p_id.should.equal('null');
                done();
            });
        });
    });

    // Tests the GET route for showing places 
    describe('GET /places', () => {
        it('should return all places', (done) => {
        chai.request(server)
        .get('/places')
        .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.length.should.equal(3);
            res.body[0].should.have.property('placename');
            res.body[0].placename.should.equal('London Eye');
            res.body[0].should.have.property('streetaddress');
            res.body[0].streetaddress.should.equal('Riverside Building, County Hall, Westminster Bridge Road');
            res.body[0].should.have.property('county');
            res.body[0].county.should.equal('London');
            res.body[0].should.have.property('postcode');
            res.body[0].postcode.should.equal('SE17PB');
            done();
           });
        });
    });

    // Tests the POST route for inserting new activities 
    describe('POST /activity', () => {
        it('should add a new activity', (done) => {
            chai.request(server)
            .post('/activity')
            .query({id: 4, name: 'bungeejumping', fun: 10, price: 400, p_id: 1})
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('array');
                res.body.length.should.equal(4);
                res.body[0].should.have.property('name');
                res.body[0].name.should.equal('sightseeing');
                res.body[0].should.have.property('fun');
                res.body[0].fun.should.equal(8);
                res.body[0].should.have.property('price');
                res.body[0].price.should.equal(120);
                // res.body[0].should.have.property('p_id');
                // res.body[0].p_id.should.equal('null');
                done();
            });
        });
    });
});