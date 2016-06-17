import summer from './threeandfive.js';
import prime from './largestPrimeFactor.js';
var openProgram= 'none';
$( window ).load(function() {
  $('#main').html(prime());

});

function loadProgram(program){
  $('#main').html(app[program]);
}
