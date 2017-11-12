define([
    "jquery", 
    "underscore", 
    "backbone",
    "views/BaseView"
], function($, _, Backbone, BaseView) {
    
    var WelcomeView = BaseView.extend({
        events:{

        },
        initialize: function () {
            console.log('WelcomeView')
        },
        render: function () {
            var view = this;
            view.$el.html('<a href="#home">Click To Home Page</a>')
        }
    });
    return WelcomeView;
    
});