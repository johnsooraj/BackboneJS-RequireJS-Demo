require.config({
  paths: {
    jquery: "../libs/jquery-3.2.1.min",
    underscore: "../libs/underscore",
    backbone: "../libs/backbone",
    router: "router",
    views: "../views",
    models: "../models",
    collections: "../collections"
  },
  shim: {
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    collections:{
        export: "$",
        deps: ["jquery", "jqxcore"]
   },
   models:{
        export: "$",
        deps: ["jquery"]
   },
   sources: {
        export: "$",
        deps: ["jquery"]
   },
   views:{
        export: "$",
        deps: ["jquery"]
   },
  }
});

require(["app"], function(App) {
  App.initialize();
});
