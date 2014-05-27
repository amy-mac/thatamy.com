---
author: amy@amy-mac.com
comments: true
date: 2014-02-02 10:26:00+00:00
share: true
layout: post
title: More Ember Thoughts
categories:
- Technology
tags:
- Ember.js
- JavaScript
---

After 4 days of working with Ember, these are my thoughts about it.

##Things I Don't Like About Ember

###Input Helpers

They don't let you use all the same options you'd be able to use in a normal input element, like <code>required=true</code>. You can just use a normal input element, but then you don't have the luxury of the value binding to a property in the controller.
{{excerpt_separator}}
###Automated magic

Ember makes a lot of things easier on you by doing some "magic" behind the scenes, but when those things don't perform the way they're supposed to, it's hard to tell why. That's the advantage of having to spell everything out yourself--it makes it much easier to fix things when they don't perform the way they ought to.
  
###Handlebars Helpers

Sometimes they'd work and sometimes they wouldn't and I could never tell what the deciding factor was.
  
###Model Relationships

I expected these to work the same way they do in Rails with the <code>belongsTo</code> and <code>hasMany</code>, etc. But you can't reference them the same way you would in Rails and I became very frustrated when trying to display the comments for a post.
  
###The Guides

I felt like the guide on the website was really lacking, at least compared to Backbone's guides. They read more like a tutorial instead of explaining thoroughly how you use each feature. They do have the API section, which I think is more similar to what I wanted, but it is overwhelming at a glance.
  
  
##Things I Do Like About Ember

###Automated magic

When you're doing the basic setup for the site, it is really quick and easy. I'm also impressed with the way it updates values that are changed instantly across the site, without you explicitly having to tell it to re-render those items.
  
###The structure

Ember reminds me a lot of Rails, not just because of the MVC aspect but the way they do their routes and models. I like that it reminds me of Rails.
  
###The routing

Speaking of the way Ember does routes, I found it so much more straightforward and easy compared to the built in routing feature of Backbone.js that I ended up not even using, in favor of Page.js. The octothorpe in the url is annoying but I'm certain that could be gotten around the same way you can in Backbone. In the same vein, I like how easy they make it to transition to another "page" with something like this: <code>this.transitionTo('page');</code>
  
###The Chrome extension

There is a [chrome devtools extension for Ember](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en) and it's incredibly useful and awesome. I wish Backbone had an extension like that (maybe some day I should build one?)

##Final Thoughts

I am intrigued enough to continuing playing around with Ember. One of the things that was frustrating me would not even be an issue if I was using a RESTful API to serve information to Ember instead of using LocalStorage and relying on Ember's built in model relationships. I also know that a part of getting used to any technology is learning its quirks and how to work around that. So far I think Ember would be better for more simplistic apps, but I would have to build out a site more with it to be certain of that opinion.