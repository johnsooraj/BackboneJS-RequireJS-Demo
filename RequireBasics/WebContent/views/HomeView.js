define([
    "jquery", 
    "underscore", 
    "backbone",
    "models/BooksModel",
    "views/BaseView"
], function($, _, Backbone, BooksModel, BaseView) {
    
    var HomeView = BaseView.extend({
        events:{

        },
        initialize: function () {
            console.log('HomeView')
        },
        render: function () {
            var view = this;
            view.$el.html('<a href="">Click To Welcome Page</a>')
            var booksModel = new BooksModel();
            booksModel.save();
        }
    });
    return HomeView;
    
});