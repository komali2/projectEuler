var chai = require('chai');
var app = require('../projects/largestPrimeFactor.js')
var expect = chai.expect;


describe('largestPrimeFactor', ()=>{
  describe('primeFinder', ()=>{
    it('should return an array', ()=>{
      expect(app.primeFinder(10)).to.be.an('Array');
    });
    it('should find a list of prime factors', ()=>{
      expect(app.primeFinder(10)).to.have.members([2, 5]);
      expect(app.primeFinder(15)).to.have.members([3, 5]);
      expect(app.primeFinder(20)).to.have.members([2, 5]);
      expect(app.primeFinder(122)).to.have.members([2, 61]);
    };
  });
});
