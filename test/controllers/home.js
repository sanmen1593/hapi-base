'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { describe, it, before, beforeEach, after, afterEach } = lab;

const server = require('../../server');

describe('Home endpoint', () => {
  describe('when GET /api/v1/home ', () => {
    let options;
    before((done) => {
      options = {
        method: "GET",
        url: "/api/v1/home"
      };
      done();
    });

    it('returns a 200 code', (done) => {
      server.inject(options, (response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns an array', (done) => {
      server.inject(options, (response) => {
        const result = response.result;
        expect(result).to.be.instanceOf(Array);
        done();
      });
    })
  });

  describe('When GET /api/v1/home/{id}', () => {
    let options;
    before((done) => {
      options = {
        method: "GET",
        url: "/api/v1/home/124"
      };
      done();
    });

    it('return a 200 status code', (done) => {
      server.inject(options, (response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('return an object', (done) => {
      server.inject(options, (response) => {
        expect(response.result).to.be.instanceOf(Object);
        done();
      });
    });


  })

  describe('when POST /api/v1/home', () => {

  })
});
