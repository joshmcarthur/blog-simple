About this Repository
====

I know what you're thinking. Really, I do. you're thinking:

> But why didn't he just use magical double-rainbow blog generator _x_?

Believe me, I looked at a _lot_. I've already been using [Octopress](http://octopress.org). It started off real cool, but eventually I found it was really hard to change any of the styles because they were so hardout, and eventually the whole multi-repo-push-to-github thing became a complete mess, and long story short, I haven't been able to push any blog posts for ages.

I've also looked at more CMS-y things like [Refinery](http://refinerycms.com), but that's just way to heavy for me. Plus I like hacking on things, and with Refinery I'd still have a lot of the same styling problems I had with Octopress. 

I eventually got around to https://github.com/hmans/schnitzelpress and thought I was onto something - a lightweight platform that had basically what I needed, and could be hosted on [Heroku](http://heroku.com) without too much work from me. As I dug into the source code though, I found that it was actually kinda complex - more complex than I thought it needed to be. 

So, here's the situation I'm in:

* A whole bunch of posts in Markdown, but not pure Markdown, because [Jekyll](https://github.com/mojombo/jekyll) likes to have YAML metadata thrown in at the top of the file.
* A nice-looking and responsive blog, which I absolutely cannot deploy to no matter how hard I try.
* A bit of a mess of styles which I find really difficult to manage.
* Overall, **more than I need**.

Here's what I've done:

* I've written a `make.rb` script. This script reads my posts from my Octopress blog, extracts out the YAML metadata, and parses the rest of the file through [Redcarpet](https://github.com/tanoku/redcarpet). It outputs all files in a JSON file called `posts.json`. (Yes, I know this should be a `Rakefile`)
* I've run through http://www.initializr.com/ (which is awesome), and set up a really basic skeleton using Less (also awesome), and [HTML5 Boilerplate](http://html5boilerplate.com/) with all the stuff I don't use stripped out.
* I've added just enough [Coffeescript](http://coffeescript.org) to render a list of posts, and show each post using [Backbone.js](http://documentcloud.github.com/backbone/), and MVC-like framework for the browser.

The result of this is that I have a folder of Markdown posts I can write in [Mou](http://mouapp.com/), and then 'compile' locally, before deploying what is now a static site wherever the hell I want. That is why I called this repo **blog-simple** (for now). It's just a website, and we all know how to poke those.