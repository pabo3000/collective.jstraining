
define('exercise9',[
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


require([
    'exercise9'
], function() {
    'use strict';
});

define("/vagrant/buildout/src/collective.jstraining/collective/jstraining/exercise9/static/bundle.js", function(){});

