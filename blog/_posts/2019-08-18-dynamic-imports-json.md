---
date: 2019-08-18 16:38:00-07:00
layout: post
title: Dynamic Imports of JSON
tags:
- Programming
- JavaScript
- Webpack
- React
- JSON
---
## TL:DR
If you want to do a dynamic import of JSON with Webpack be sure to account for a JSON file not having a default export when you're trying to extract the value and call `default` on the returned module to return the whole JSON object.


<hr/>

As someone who has been around the web development scene a long time and has often worked on large enterprise software that is behind the times, it can be hard to keep up to date with all the latest technology and trends when you don't have opportunities to use it every day at work (and you have two small children at home to take care of). So I've been trying to find some extra time the last couple months to study up on all the tools that I'd be using at my new job and signed up for a [Front End Masters](https://frontendmasters.com/) account to help me brush up.

One of the tools I had used before but had never taken the time to fully understand was **Webpack**. I had only used Webpack at one previous job and only for 4 months so I knew I wasn't using it to its fullest potential, and recently I learned how to do **dynamic imports** with Webpack and that was particularly exciting as someone who has specialized in front-end performance in the past. If you haven't been introduced to dynamic imports yet it is helpful for solving performance issues by making sure you're only serving up larger bundles of code when you actually need it, and it's all [regular JS under the hood](https://v8.dev/features/dynamic-import).

Working with modern JS you often see static imports for modules:
{% highlight javascript %}
import myLib from './myLib';
{% endhighlight %}

But dynamic imports aren't grabbed from the server until runtime. Using Webpack and the dynamic import structure it creates a promise that will retrieve the chunk at runtime and allow you to act on it at that point. Simple example:
{% highlight javascript %}
// This creates its own bundle chunk
const myLib = () => import('./myLib');

myButton.addEventListener('click', (e) => {
  // Chunk only downloads at this point and then you react to it
  myLib.then((libFunc) => {
    libFunc();
  });
});
{% endhighlight %}

After learning about this through the video, reading documentation and examples, and practicing it on my own I really thought I got it and was excited to put it to use. I ended up with the perfect opportunity a few weeks later at work. We had some sample JSON data that was being used as an occasional fallback to show an example graph when customer data wasn't available. However it was being loaded with a `() => require('myData.json')` statement. This was problematic because those large JSON files were being included in multiple other chunks instead of just one, and all these large files were being served up whether or not the sample data was even going to be used.

Now of course there's multiple ways you can solve that issue, and I certainly thought about just throwing the JSON onto the server and making a request for it when it was needed, but I wanted to make the minimal amount of changes possible and thought, "Why don't we just turn this into a dynamic import?" So I quickly changed the `require` into an `import` and immediately saw the chunks change drastically&mdash; it was beautiful. The sample data files became their own chunks and those other giant chunks became much smaller. But I was having trouble accessing the information from those files, and there were a couple different reasons for that, but the one I want to focus on is the one that was so difficult to find the answer for, maybe because it seems so obvious in hindsight. 

**JSON files don't have a default export.** And because of the other problems I was experiencing with resolving the promise in a legacy React component, I was at first dealing with a pending promise in the debugger instead of being able to just easily see what Webpack was returning. So I spent a good amount of time searching the internet to try to figure out if there's a special way you need to deal with JSON files when you are dynamically importing them and couldn't initially even find examples of anyone doing dynamic imports of JSON files.

So this was frustrating but I did eventually discover an example in an answer on StackOverflow that specifically showed what I needed and realized that this info needs to exist in more places on the internet. When you are dealing with a promise of a JSON file, you need to specifically be calling default on it, which is a key in the module object returned.

Examples of just capturing the data object:

{% highlight javascript %}
import('myData.json').then(({default: myData}) => myData);

// or

import('myData.json').then(module => module.default);
{% endhighlight %}

Also worth noting that this isn't the case if you're using Parcel or dynamic imports outside of Webpack. In those cases the JSON will just be returned; which is part of why this was so confusing.

So I'm hoping this will help anyone else who gets confused if they're new to dynamic imports with Webpack and trying to work with JSON.
