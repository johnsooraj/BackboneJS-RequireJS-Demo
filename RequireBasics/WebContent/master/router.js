define(["jquery", "underscore", "backbone", "views/WelcomeView", "views/HomeView"
], function( $,  _, Backbone, WelcomeView, HomeView ) {

  //Router is used for routing the client side applications and
  //defines the URL representation of the application's object.
  //A router is required when web applications provide linkable,
  //bookmarkable and shareable URL's for important locations in the app.

  /*   
  1	extend
  It extends the backbone's router class.
  
  2	routes
  It defines the URL representation of applications objects.
  
  3	initialize
  It creates a new constructor for the router instantiation.
  
  4	route
  It creates a route for the router.
  
  5	navigate
  It is used to update the URL in the applications.
  
  6	execute
  It is used when a route matches its corresponding callback. 
  */

  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "Welcome",
      "home": "Home"
    }
  });

  var initialize = function() {
    var app_router = new AppRouter();
    app_router.on("route:Welcome", function(actions) {
      var welcomeView = new WelcomeView();
      welcomeView.render()
    });
    app_router.on("route:Home", function(actions) {
      var homeView = new HomeView();
      homeView.render();
    });
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
