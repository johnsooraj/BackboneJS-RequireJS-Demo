define([
    "jquery", 
    "underscore", 
    "backbone",
    "base"
], function($, _, Backbone, base) {
    
    var BaseView = Backbone.View.extend({
        el: $("#projectContainer"),
        events:{

        },
        initialize: function () {
            console.log('BaseView')
        },
        render: function () {
            var view = this;
            //view.$el.html('<a href="#home">Click To Home Page</a>')
        }
    });
    return BaseView;
    
});