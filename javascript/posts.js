(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Post = (function(_super) {

    __extends(Post, _super);

    function Post() {
      Post.__super__.constructor.apply(this, arguments);
    }

    return Post;

  })(Backbone.Model);

  window.Posts = (function(_super) {

    __extends(Posts, _super);

    function Posts() {
      Posts.__super__.constructor.apply(this, arguments);
    }

    Posts.prototype.model = Post;

    Posts.prototype.url = 'posts.json';

    return Posts;

  })(Backbone.Collection);

}).call(this);
