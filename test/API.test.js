process.env.NODE_ENV = 'test';
const chai = require('chai');
const expect = require('chai').expect;
const should = require('chai').should();
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
    
    describe("GET /activities", () => {
        it('should return all activities', (done) => {
            chai.request(server)
            .get("/activities")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.equal(3);
                res.body[0].should.have.property('name');
                res.body[0].name.should.equal('sightseeing');
                res.body[0].should.have.property('fun');
                res.body[0].channel.should.equal(8);
                res.body[0].should.have.property('price');
                res.body[0].genre.should.equal(27);
                res.body[0].should.have.property('p_id');
                res.body[0].rating.should.equal(1);
                done();
            });
        });
    })
});