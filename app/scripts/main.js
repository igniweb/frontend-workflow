/* global require, Modernizr */
require(['core'], function (core) {
    'use strict';

    console.log('Core module loaded ', core);

    if (Modernizr.canvas) {
        console.log('Canvas is present!', Modernizr);
    }
});
