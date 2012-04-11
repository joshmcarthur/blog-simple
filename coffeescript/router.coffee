class window.BlogRouter extends Backbone.Router
  routes:
    "": "postIndex"
    "post/:slug": "postShow"


  postIndex: ->
    @before()

  postShow: (slug) ->
    @before =>
      @post = @posts.get(slug)
      @post_item = new PostItem(model: @post)
      $('#content').html @post_item.render().el

  before: (callback) ->
    if @posts
      callback?()
    else
      @posts = new Posts()
      @posts.fetch(
        success: =>
          $('#sidebar').html new PostList(model: @posts).render().el
          callback?()
      )

