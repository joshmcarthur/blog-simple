(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.PostList = (function(_super) {

    __extends(PostList, _super);

    function PostList() {
      PostList.__super__.constructor.apply(this, arguments);
    }

    PostList.prototype.tagName = 'ul';

    PostList.prototype.initialize = function() {
      return this.model.bind('reset', this.render, this);
    };

    PostList.prototype.render = function() {
      var _this = this;
      _.each(this.model.models, function(post) {
        return $(_this.el).append(new PostListItem({
          model: post
        }).render().el);
      });
      return this;
    };

    return PostList;

  })(Backbone.View);

  window.PostListItem = (function(_super) {

    __extends(PostListItem, _super);

    function PostListItem() {
      PostListItem.__super__.constructor.apply(this, arguments);
    }

    PostListItem.prototype.tagName = 'li';

    PostListItem.prototype.template = _.template($('#tpl-post-list-item').html());

    PostListItem.prototype.render = function(event) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return PostListItem;

  })(Backbone.View);

  window.PostItem = (function(_super) {

    __extends(PostItem, _super);

    function PostItem() {
      PostItem.__super__.constructor.apply(this, arguments);
    }

    PostItem.prototype.template = _.template($('#tpl-post-item').html());

    PostItem.prototype.render = function(event) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return PostItem;

  })(Backbone.View);

}).call(this);
