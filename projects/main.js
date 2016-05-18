import summer from './threeandfive.js';
var openProgram= 'none';
$( window ).load(function() {
  $('#main').html(summer(1000));

});

function loadProgram(program){
  $('#main').html(app[program]);
}
