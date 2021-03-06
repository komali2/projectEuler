var chai = require('chai');
var app = require('../projects/evenFibonacci.js')
var expect = chai.expect;

describe('fibonacci', ()=>{
  describe('fib generator', ()=>{
    it('should return an array', ()=>{
      expect(app.fibGenerator(10)).to.be.an('array');
    });
    it('should generate a correct fibonacci sequence', ()=> {
      expect(app.fibGenerator(10)).to.eql([0, 1, 1, 2, 3, 5, 8]);
      expect(app.fibGenerator(100)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    });
    it('should reject negative max values',() => {
      expect(app.fibGenerator(-1)).to.eql([]);
      expect(app.fibGenerator(-30)).to.eql([]);
    });
    it('should handle 0 as a max value', ()=> {
      expect(app.fibGenerator(0)).to.eql([0]);
    });
    it('should handle 1', ()=> {
      expect(app.fibGenerator(1)).to.eql([0, 1, 1]);
    });
    it('should handle 2', ()=> {
      expect(app.fibGenerator(2)).to.eql([0, 1, 1, 2]);
    });
  });
  describe('sumEven', ()=>{
    it('should return a number', ()=>{
      expect(app.sumEven([2, 4, 6])).to.be.a('Number');
    });
    it('should sum even numbers', ()=>{
      expect(app.sumEven([2, 4, 6])).to.equal(12);
    });
    it('should sum even numbers mixed with odd numbers', ()=>{
      expect(app.sumEven([1, 2, 3, 4, 5, 6])).to.equal(12);
    });
    it('should return 0 when all numbers are odd', ()=>{
      expect(app.sumEven([1, 3, 5, 9])).to.equal(0);
    });
  });
  describe('fibSolution', ()=>{
    it('should solve the euler problem', ()=>{
      expect(app.fibSolution()).to.equal(4613732);
    });
  });
});
