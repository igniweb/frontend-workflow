/* global define */
define(['templates', 'articles'], function (templates, articles) {
    'use strict';

    var self = {};

    self.createUi = function () {
        var html = templates['app/templates/template.hbs'](articles);
        $('.hero-unit').find('ul').html(html);
    };

    return self;
});
