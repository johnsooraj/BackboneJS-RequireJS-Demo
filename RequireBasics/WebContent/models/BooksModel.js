define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    var BooksModel = Backbone.Model.extend({
        urlRoot: 'api/books',
        defaults: {
            bookId: null,
            bookName: null,
            bookAuthor: null
        },
        initialize: function() {
            console.log('BooksModel Created')
        }
    });
    return BooksModel;
});