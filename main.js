'use strict';

import aFunc from './projects/test.js';

$( window ).load(function() {
  $('#main').html(aFunc());
});
