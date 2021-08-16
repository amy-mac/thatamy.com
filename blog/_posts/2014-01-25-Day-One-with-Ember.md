---
author: amy@amy-mac.com
comments: true
date: 2014-01-25 20:26:00+00:00
share: true
layout: post
title: Day One with Ember
tags:
- Technology
- Ember
---

I recently started giving myself a crash course in [Ember.js](http://emberjs.com "Ember.js") to do a quick example app for a job interview. I was pretty sure I could pick it up quickly since once thing I definitely learned in the bootcamp was how to learn fast and work quickly. This certainly isn't ideal for most real world situations because you want to produce high quality sites and apps which require proper planning, testing, and attention to detail. But it's nice to know what I am capable of doing in a pinch.

One of the things that is really starting to amaze me is that the more I learn about all these different technologies the less scary everything looks, as a whole. When I look at new languages, they don't look like Greek and I can generally get the gist of what they're doing. It's also the same with JavaScript frameworks, though I'm really only on my 2nd right now. After about 8 hours of working with Ember.js it reminds me so much of Rails with its naming conventions and automated "magic." I can see how Backbone.js gives you so much more liberty, which is nice, but Ember.js makes specific things quicker and easier because of the conventions. An example is when you're looping over a collection in its template, you don't have to specify the variables for what you're looping over because it knows that you're probably going to want to loop over the collection of objects that are associated with that template and controller.

You could write this:

{% highlight erb %}
{% raw %}
  {{#each user in users}}
    <h1>{{user.name}}</h1>
  {{/each}}
{% endraw %}
{% endhighlight %}

But Ember will let you write this instead:

{% highlight erb %}
{% raw %}
  {{#each}}
    <h1>{{name}}</h1>
  {{/each}}
{% endraw %}
{% endhighlight %}

Convenient, right? So I'm feeling pretty comfortable with Ember so far, since it reminds me of Rails but written in JavaScript, and the Handlebars templating was super easy to get used to since it's the same syntax I've started using with liquid tempting in my Jekyll blog. I still have a lot more to learn in Ember as I continue over the next couple days, but I'm becoming very intrigued with some of its object modeling features that I was reading up on, since again, it's the same things I'm used to seeing in Rails, with the model relationships, and designating what the attribute types are going to be, even without dealing with a traditional database. I'm really excited to continue playing with it, and wonder if (or how) I'll decide that one is better than the other---Backbone or Ember?
