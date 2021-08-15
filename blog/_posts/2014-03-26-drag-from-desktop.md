---
author: amy@amy-mac.com
comments: true
date: 2014-03-26 21:09:18+00:00
layout: post
title: Drag from Desktop Tricks
categories:
- Technology
- Tutorial
tags:
- JavaScript
- Drag and Drop
- Tricks
share: true
---

Lately I've been reading a whole lot about drag and drop while I've tried to implement a 'drag from desktop to upload' feature. While some of these features have been around for a very long time, others are new and therefore finicky.

One of the annoying things about dragging files from the desktop is that there are only 3 events that the browser will recognize for this target: `dragenter`, `dragover`, and `drop`; whereas when you drag items that are already in the browser you also have `dragstart`, `drag`, and `dragend`. I read a lot of articles telling you that you **can't** do these things, but I wasn't satisfied with that. I knew there had to be a way to cheat. There are in fact a couple ways that you can fake the drag start and drag end events. Here are the tricks:

## On Drag Start

If there's nothing that you want to happen when an item starts being dragged then you're a lucky person, because you won't care that you can't initiate anything at the beginning of a drag. But what if you want a drop zone to become apparent when an item starts being dragged, or some other kind of notice or action that helps the user? There might be multiple ways to get around this, but the best way I've found so far is to simply attach an event listener to the `body` tag for `dragover` like so:

{% highlight js %}
var page = document.getElementsByTagName("body")[0];
page.addEventListener("dragenter", doSomething, false);

function doSomething(event) {
  event.stopPropagation();
  event.preventDefault();
  
  // Whatever action you want performed when the drag starts
  
  return false;
}
{% endhighlight %}

This works well because of course the body covers every last inch of your viewport, so as soon as the dragged item enters the window it'll start picking up that something is being dragged, so you effectively are faking a `dragstart` event.

## On Drag End

Here's the tougher one. Most people will find themselves wanting something to happen when the dragging has stopped, even if it's just telling the hover CSS on the drop zone to go away. It's pretty easy to take care of any drag end actions if something has been properly dropped in the drop zone, because then you just tack on all the actions to the `drop` event. What if they stop mid-drag, however? Say you have the drop zone light up when an item starts being dragged and halfway there they let go of the mouse for whatever reason. Oops, the drop zone is still lit up and could even be preventing further actions. The way I solved this last one is by adding an event listener to the body once again for a drop event.

{% highlight javascript %}
var page = document.getElementsByTagName("body")[0];
page.addEventListener('drop', doSomething, false);

function doSomething(event) {
  event.stopPropagation();
  event.preventDefault();
  
  // Whatever actions you want to stop doing when the drag ends

}
{% endhighlight %}

This is effective for two reasons. One is that up to date browsers will automatically open files that you drop into them and you don't want to have that happen if you're letting users drop things in from the desktop and want to prevent the default behavior if they accidentally miss the drop zone. That's why those `preventDefault()` functions are so important. You're saying, "Hey browser, don't do your thing because I'll take it from here." Then the second reason is to of course cancel any actions that you were performing on drag. This will probably be the same thing you were telling the 'drop' function to stop doing once the item was properly dropped.

Now here's where it got tough. What if instead of prematurely letting go of the item somewhere on the page, they drag it back to the desktop and let go? How do you account for that? I played around with a couple possible solutions, such as listening for the `mouseleave` event on the body but just like the drag events, the body won't recognize a `mouseleave` event that takes place when you've dragged something from outside the browser.

The answer ended up being what takes place after that: the `mouseenter` event. Once they've dragged something back to the desktop the mouse has to re-enter the body again if it wants to do anything on the page and it will be without the dragged item, so voila!

{% highlight javascript %}
var page = document.getElementsByTagName("body")[0];
page.addEventListener("mouseenter", doSomething, false);

function doSomething(event) {
  event.stopPropagation();
  event.preventDefault();

  // Whatever actions you want to stop doing when a drag ends
  
}
{% endhighlight %}

It's not an ideal solution of course because you'll have a lot of unnecessary events triggering if the user just happens to keep waving their mouse in and out of the browser, but it works and is better than the alternative of your users no longer being able to use the drop zone areas because they're blocked by new CSS items or overlays, etc.

And finally a working example for you&mdash;try dragging a file in from your desktop and performing the scenarios mentioned above.

<div id="dropzone" style="width:200px;height:200px;border:3px dashed #CCC;margin:0 auto 10px;text-align:center;"><p style="font-size:24px;font-weight:bold;color:red;margin-top:20px;display:none;">Drop Here!</p></div>

I'd love to hear any better ideas people have come up with for mimicking the drag start and end events; feel free to comment!
