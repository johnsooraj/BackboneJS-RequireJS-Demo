define([
    'jquery', 
    'underscore', 
    'backbone', 'router'
], function($, _, Backbone, Router) {
  var initialize = function() {
    //It is a function that Backbone calls every time to
    //read or save the model to the server. It represents the state of the model.
    var BBSync = Backbone.sync;
    Backbone.sync = function(method, model, options) {
      var error = options.error;
      options.error = function(model, response, options) {
        error(model, response, options);
      };
      var success = options.success;
      options.success = function(model, response, options) {
        if (model.isError) {
          switch (model.errorCode) {
            case "3":
              alert("Your Session is Expired, Please login again...");
            case "412":
          }
        }
        success = (model, response, options);
      };
    };

    Router.initialize();

  };

  return {
    initialize: initialize
  };
});
