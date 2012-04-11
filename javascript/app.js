(function() {

  $(function() {
    window.Blog = new BlogRouter();
    return Backbone.history.start();
  });

}).call(this);
