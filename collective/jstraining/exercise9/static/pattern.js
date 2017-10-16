
define([
    'jquery',
    'pat-base',
], function($, Base) {
    'use strict';

    var Pattern = Base.extend({
    name: 'exercise9',
    trigger: '.pat-exercise9',
    parser: 'mockup',
    defaults: {
    },
    init: function() {
        var that = this;
        that.$el.append(' <span>Exercise 9 was here</span>');
    }
    });

    return Pattern;
});
