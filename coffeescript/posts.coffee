class window.Post extends Backbone.Model

class window.Posts extends Backbone.Collection
  model: Post
  url: 'posts.json'

