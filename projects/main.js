'use strict';

import aFunc from './lib/test.js';

$( window ).load(function() {
  $('#main').html(aFunc());
});
