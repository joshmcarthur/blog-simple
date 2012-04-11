class window.PostList extends Backbone.View
  tagName: 'ul'
  initialize: ->
    this.model.bind('reset', this.render, this)

  render: ->
    _.each @model.models, (post) =>
      $(@el).append new PostListItem(model: post).render().el

    @


class window.PostListItem extends Backbone.View
  tagName: 'li'
  template: _.template($('#tpl-post-list-item').html())

  render: (event) ->
    $(@el).html @template(@model.toJSON())
    @

class window.PostItem extends Backbone.View
  template: _.template($('#tpl-post-item').html())

  render: (event) ->
    $(@el).html @template(@model.toJSON())
    @

