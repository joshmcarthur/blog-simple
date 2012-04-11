(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.BlogRouter = (function(_super) {

    __extends(BlogRouter, _super);

    function BlogRouter() {
      BlogRouter.__super__.constructor.apply(this, arguments);
    }

    BlogRouter.prototype.routes = {
      "": "postIndex",
      "post/:slug": "postShow"
    };

    BlogRouter.prototype.postIndex = function() {
      return this.before();
    };

    BlogRouter.prototype.postShow = function(slug) {
      var _this = this;
      return this.before(function() {
        _this.post = _this.posts.get(slug);
        _this.post_item = new PostItem({
          model: _this.post
        });
        return $('#content').html(_this.post_item.render().el);
      });
    };

    BlogRouter.prototype.before = function(callback) {
      var _this = this;
      if (this.posts) {
        return typeof callback === "function" ? callback() : void 0;
      } else {
        this.posts = new Posts();
        return this.posts.fetch({
          success: function() {
            $('#sidebar').html(new PostList({
              model: _this.posts
            }).render().el);
            return typeof callback === "function" ? callback() : void 0;
          }
        });
      }
    };

    return BlogRouter;

  })(Backbone.Router);

}).call(this);
