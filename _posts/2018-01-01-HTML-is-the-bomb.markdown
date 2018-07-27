---
author: amy@amy-mac.com
comments: true
date: 2018-01-01 10:00:00-07:00
layout: post
title: A Sort of Love Letter to HTML
categories:
- Technology
tags:
- HTML
share: true
---

![XKCD Comic](https://imgs.xkcd.com/comics/tags.png "<A>: Like </a>this.&nbsp;")

I’ve been studying HTML since 1999, and like everything else it has grown and advanced over time, and I’m still learning new things you can do with it all the time. Unfortunately it tends to be one of the under-appreciated parts of web development, especially for those coming from a background of backend development. I want to explain some of the major points about why it is worth all developers time to fully understand it in order to have a more effective front-end.

## Performance
We can all agree that we want our websites to be fast, right? One of the ways you can do that is by simply reducing the amount of DOM nodes on a page, or in other words, using less HTML elements. But wait, didn’t I just say, “Yay! HTML is the best! HTML for life!” Truth, but less is more. You want to use HTML _effectively_, and just like we don’t want a bunch of messy spaghetti JavaScript around, we need to respect the structure of the page and be strident about using the best tool for the job as you build the foundation of each page.

Here’s why:

* The more DOM nodes you have, the longer it takes to download that page from the server. HTML usually isn’t responsible for the major chunk of page load time, that award tends to go to images and scripts, but every little bit counts!
* CSS has to parse the entire DOM to figure out where it needs to apply the styles, and of course CSS performance in itself is a huge topic we won’t get into. The point is that the less unnecessary HTML elements on the page, the less work the stylesheets have to do, which results in better performance.
* Likewise, when you are querying the DOM in JavaScript or jQuery, the more DOM nodes you have, the harder it has to work to find the element you want. This is why developers tend to save the queried element into a variable when they're working with it, because it takes precious milliseconds to query it again and again. But why not make that initial search as fast as possible as well?

Every time I am working heavily on the HTML of a particular page for the first time, the first thing I'll do is go through and rip out all the superfluous elements. I clean house, so to speak. So now you're probably asking, "What are all these superfluous elements you keep talking about?" Basically, I'm talking about any element that does not need to be there for the look of the webpage to remain the same. The biggest offenders are pretty easy to spot.

Here's what to keep an eye out for:

### `<div>`'s and `<span>`'s that have no classes, IDs, or attributes
There might be a good reason that you have a `<div>` as a container for a collection of elements because of its inherent block properties, or maybe you have the styling on the parent element that targets all of its children, but more often than not if I see a bunch of plain `<div>`'s being nested, they are serving absolutely no purpose whatsoever. Along the same lines, those plain `<span>`s are usually a red flag. The entire purpose of a `<span>` is to be able to target something small that you want to style differently than everything else around it. 

Like this [span page from MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) says, "_It should be used only when no other semantic element is appropriate_," and if you look at that page, you'll see that both examples show it being added unnecessarily. The first, because it is unstyled and does absolutely nothing. The second example is unnecessary because the background-color can be put on the `<li>` element. A much better example of a proper use case is:

```html
<p><span class="blueText">Blue</span> is my favorite color</p> 
```

Where there would be a class that makes that one word Blue, and the rest of the text in the paragraph is a different color.

Another thing to look out for is multiple `<br/>` tags in a row. This is usually a sign that the element correct element.There are other elements that might be hanging out for no reason, too, but I'm focusing on these because they're the two biggest offenders that I have come across.

### Empty Elements 
I tend to spend a lot of time in the browser's inspector, and sometimes I'll see multiple elements that contain nothing. Not elements like the ones in the previous section, but elements that look like they should actually be doing something, because they have IDs, classes, and/or attributes.

```html 
<div class="importantThing blueVelvet">
</div>
```

So I immediately wonder why it's there and go look up the code, and it's almost always the result of some conditional.

```ruby
<div class="importantThing blueVelvet">
  <% if user.city %>
    <%= user.city %>
  <% end %>
</div>
```

Or what I tend to see in React code is that there won't even be the conditional, but it'll have a variable value there that happens to be blank, so you see nothing on the page, but these nodes still are clogging up the DOM for no reason. Now as with anything, there are perfectly good use cases for having placeholder elements in the DOM, like if you know you're going to be loading something there dynamically, for example. But if that's not the case then I encourage you to place the HTML elements **within** the conditional and if there is no conditional, add one!

### Using the right tool for the job
Sometimes you can reduce the amount of nodes by simply using the proper HTML element, which is why it's important to be familiar with them and what they do. Every HTML element has inherent properties and semantic value: there are block level elements, inline elements, elements that have more meaning than others (semantics). The elements behave in different ways and if you aren't using them for what they were meant for, you might have to have extra elements, and you might have to add more styling than would have been necessary. A really extreme example would be putting a `<div>` on a page with some text that you want to click on in order to visit another page by adding an `onClick` handler to that `<div>` and then making an AJAX call or calling `window.location("/link.html")`. You're probably not going to do that right? Why go to all that work, when you can simply use a normal `<a>` tag for your link that has all that functionality built into it?

Some less extreme, but common examples are cases like the multiple `<br/>` tags I mentioned above. If you are trying to put extra space between two blocks of text, then you probably aren't using paragraph tags and should be. If you are separating out chunks of text within a single paragraph tag, then you aren't using enough paragraph tags. Paragraph tags are block level elements that inherently have spacing above and below them.

Another example would be changing a `<span>` through CSS to be a block-level element instead of just using a `<div>`, or adding a bunch of CSS/JS to make a `<div>` act like a button instead of just using the `<button>` tag. You get a lot of functionality for free when you use the proper element. Buttons are inherently tabbable, they can use the `disabled` attribute, and they also have many special HTML5 attributes that can do lots of things.

In general, I encourage you to explore all that different attributes that can be used on a particular element, because that's how you learn just how powerful HTML can be, which brings me to the next special mention: HTML5.

#### You might not need CSS/JavaScript
You've probably seen ["You Might Not Need jQuery"](http://youmightnotneedjquery.com/) and ["You Might Not Need JS"](http://youmightnotneedjs.com/), but I'm here to tell you that _you might not need anything but HTML_. If you're an old school developer, you might not be as familiar with all the fantastic things you can do with plain old HTML elements, and I'm always surprised that HTML5 isn't used more being that it's pretty old now. One of the areas it really shines is with forms.

You have an input field and you only want the user to be able to enter numbers, so you have a backend validation to ensure that the value is numeric when it hits the server. Backend validations are important; they are the last line of defense before it hits the database, but why waste that time traveling all the way to the server initially? So you decide to implement some client-side validations to catch it without making a server call, and that's pretty easy to do using `isNaN(value)` or `$.isNumeric(value)`, but if you're doing that, then you're working way too hard. All you have to do is tell your field what type it should be: `<input type="number">` and it won't even **allow** the user to enter anything but numbers. "But what if I want to make sure they only enter positive numbers? Or limit it?" you might ask. You still don't need JS. Other attributes you can use on that field are `min` and `max`.

This is just one example, but there are many other special input types that can be used in forms that almost completely eliminate the need to use JavaScript for validations or to restrict input. Some of them even do fancy things that previously developers would have used a special plugin for. You want the user to input a date and want them to be able to choose from a pop-up calendar? `<input type="date">` will do this in every browser but Safari and Internet Explorer (sadly it falls back to a normal text input field), so plugins aren't completely obsolete in that case, but it can fit a lot of use cases. Another fun one is `<input type="color">` for letting users pick a color from a pop-up palette. I encourage you to explore all the [different input types and their attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

## Accessibility (A11y)
Another very important reason to understand HTML and its proper uses? Accessibility is important. I won't elaborate all the reasons why because there are [countless articles](https://www.google.com/search?ei=beFKWozBNcj10wLhqarADw&q=why+web+accessibility+is+important&oq=why+web+accessibility+is+important&gs_l=psy-ab.3..0j0i8i30k1l2.17319.28996.0.29228.25.24.1.0.0.0.148.2417.14j10.24.0....0...1c.1.64.psy-ab..1.24.2315...0i22i30k1j0i67k1j0i22i10i30k1j33i160k1j0i7i30k1j0i8i7i30k1.0.2c5tAmYU_zI) and books that will do that much better, but I will sum it up by saying that your website being accessible **enhances the user experience for everyone**. I'm also not going to talk about all the techniques to make your site accessible because that's a huge topic all its own. What I want to focus on, in the spirit of this article, is how using proper HTML elements (the right tool for the job, again) will already make your webpage much more accessible than it would be otherwise.

### [Semantic HTML](https://www.thoughtco.com/why-use-semantic-html-3468271)
I suppose having also studied print design and typography, that my love of clean layouts and meaningful structure has also carried over to web development. So I was pretty excited about the increase of semantic tags when HTML5 came around. Providing more meaning to the elements not only helps accessibility but is an all-around win, in my opinion. Long gone are the days where `<div>`s ruled the lands. Now we have `<section>`, `<article>`, `<aside>`, and so on. Even before HTML5 though, there were a large amount of tags that weren't being used when they should be.

Let's take tables for example. Tables no longer rule the web either, but they still have a good purposes and lots of associated tags that go with them. Yet somehow I'll see table after table only make use of `<table>`, `<tr>`, and `td`, oftentimes with the first table row trying to act as headers. If a table has headers, it should at the very least be using `<th>` for the header cells, but ideally using `<thead>` as well. The browser will treat these differently than just another table row, and semantically it means something.

I still see `<i>` and `<b>` used more often than `<em>` and `<strong>`, probably because old habits die hard. The former still have uses, but the latter should always be used when you're trying to place actual emphasis on something; not for styling reasons, but because of the meaning it conveys.

### How proper HTML helps keyboard accessibility 
All sites should be fully accessible by keyboard, and there are certain keys that users expect to be able to use to do this, because it's the standard. Most people know they can tab through form elements and tend to do it without thinking about it. This is another case where you want to use the right tool for the job, because the exact kinds of things on the page that the user would want to navigate to are tabbable by default, without you having to do anything. This is why structure is important, and this is why the right element is important. Links, buttons, and input fields all have that functionality built in. This is why you don't want to use a `<div>` in place of a `<button>`, or a link that doesn't actually use an `<a>` tag. It is also why the order of elements matter, because tabbing follows DOM structure, and not the visual structure on the page. So if you're floating `<button>`s and they appear in a different order on the page because of it, that's going to confuse the user when the element they expect to be selected does not actually get selected.

Sometimes that's not going to cut it. You might have a link menu hidden as a dropdown, and then you're going to have to make that parent element open and close when tabbed to, but by being mindful of using the right elements for the job, you're still halfway there.

Links also accept the "Enter" key by default. So if you are focused on a link and hit enter, it will go to that link. In forms, if you are focused on any input field within a form and hit enter, unless there is underlying code telling it to not behave like normal ([here's a nice article about why you should rarely suppress this](https://www.tjvantoll.com/2013/01/01/enter-should-submit-forms-stop-messing-with-that/)), it will automatically submit the form.

### How proper HTML helps screen-readers
There are a large amount of people in the world who have visibility issues, so they make use of screen-readers, and there is no feature that you as a developer turn on for this to work. A screenreader can read what's on any website, but how much of that is coherent _does_ depend on what you as a developer have put there. This is why the aforementioned semantics are important, but there are also some basic HTML attributes that aid screen-readers. One that most people know about is the `alt` attribute on images (alternative text), and yet it is so neglected. It's often left blank when it shouldn't be, filled in when it shouldn't be, or the information doesn't describe the image at all, rendering it useless. Let me hit on each of those points:

* If it is important that a particular image is conveyed to the user (a graph, a visual representation of something being described, etc) then you absolutely want an `alt` attribute.
* If the image is completely unimportant, like a visual flourish, or an icon to represent text that comes immediately before or after it, then you _do not want an `alt` attribute_. Why? You're not only throwing a mess of unimportant information at the user, but in many cases you're just making it repeat the same word twice, which is confusing. This is also where ARIA roles come into play, but the most basic thing you can do in this situation is to intentionally identify a blank `alt=""` attribute. If you don't put in any `alt` attribute at all, the screenreader/browser will just guess it by reading the file name or `title`.
* If you have an image of the user and your `alt` text is "User", or it's the logo of your company and it just says "Logo" or "Company Name", you are not helping anyone. At the very least be a little more descriptive: "Your profile picture", "Company Name's logo", but even better, be really descriptive if it's an important visual. "Image of a brown horse with black hair" helps you imagine something much more than "Pic of horse".

Another common misuse of HTML I come across is not labeling input fields. All input fields should have an associated label element and this is not accomplished by just having text near an input field. It may look fine to you visually and you might be able to deduce that they go together, but screen-readers won't. Screen-readers expect that any input field that is selected should be able to tell them what that input field is for. There are two main ways to make sure your fields are labeled properly. The first is to simply wrap your input field in the `<label>` element like this:

```html 
<label>
  Your name
  <input type="text" name="name"/>
</label>
```

I know some developers might not like to use that method because they have special styling on all `<label>`s that they don't want on the `<input>` field and that's fair enough, you just have to get explicit, and this is where I see the HTML fall way short.

```html 
<label>Your name</label>
<input type="text" name="name"/>
```

The above does not associate the label with the input field. Proximity does not equal association. This is where the `for` attribute comes in.

```html 
<label for="userName">Your name</label>
<input type="text" name="name" id="userName"/>
```

The above associates the fields by matching up the `for` attribute with the `id` of the field. If your `for` attribute and `id` attribute don't match up, then it does not work (I see this happen a lot). Sometimes you might not want the label there visually, or have an extra field associated with that same label. No problem, you can either hide the label, or add an ARIA attribute to the input field that specifies the labeling, but never just leave a field label-less. Screen-readers don't read placeholders. I should also note that if you want your form elements to be fully accessible for all screen-readers then it's best to cover your bases and have both the `for` attribute AND nest your `input` inside the `label`.

An added benefit of labeling inputs properly: they're easier to select and click, which makes them more accessible! Especially checkboxes and radio buttons, which have a very small click area. This is because it allows you to be able to click on the label text to select the element. Also note that for radio buttons, you should use the `<fieldset>` tag to group the radio inputs together, where the `<legend>` serves as the parent label while each input still has its own.

These are things that should be considered the basics of HTML, making use of the built in attributes and structure to better serve a diverse user base.

## You don't have to work as hard
If anything else, understanding HTML should be encouraged because it makes your work easier. It can reduce the need for both styling and scripting, and makes the world wide web a happier place.

-----
**Abbreviations**

- HTML: HyperText Markup Language
- DOM: Document Object Model
- ARIA: Accessible Rich Internet Applications
