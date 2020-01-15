process.env.NODE_ENV = 'test';
const chai = require('chai');
const expect = require('chai').expect;
const should = require('chai').should();
const knex = require('../knex/knex.js');
const server = require('../app.js');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('API routes', () => {
    
});