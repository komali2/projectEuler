var chai = require('chai');
var app = require('../projects/evenFibonacci.js')
var expect = chai.expect;

describe('fibonacci', ()=>{
  describe('fib generator', ()=>{
    it('should generate a correct fibonacci sequence', ()=> {
      expect(app.fibGenerator(10)).to.eql([0, 1, 1, 2, 3, 5, 8]);
    });
  });
});
