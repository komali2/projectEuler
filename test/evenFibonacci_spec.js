var chai = require('chai');
var app = require('../projects/evenFibonacci.js')
var expect = chai.expect;

describe('fibonacci', ()=>{
  describe('fib generator', ()=>{
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
});
