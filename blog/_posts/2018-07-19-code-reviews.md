---
author: amy@amy-mac.com
comments: true
date: 2018-07-24 22:09:18-07:00
layout: post
title: A Mental Checklist When I Do Code Reviews
tags:
- Programming
- Work
share: true
---

Some of the things that I’m thinking about when I am doing a front-end code review...

## TL:DR
- Accessibility
- Cross browser compatibility
- DRY/DRW
- Maintainability
- Performance
- Security
- Style/Formatting
- Tests

I’ve done my fair share of code reviews over the years, and continue doing so on an almost daily basis. At my old job, you would usually only perform a code review if you were requested on one, and I remember being so excited when I started being requested for them because it meant that I would have the opportunity to prevent bad front-end code from getting into the codebase in the first place (a `<span>` for every element on the page, anyone?) But I soon learned there’s much more to code reviews than just preventing bugs or pointing out stylistic issues. <strong>They are also a great learning experience</strong>. I’ve learned so much from reviewing other developers’ code over time, and it not only made me a better programmer, but has made me more thorough in my reviews&mdash;and in some of the positions I’ve held, you have to be, because there’s a lot more at stake.

There are lots of articles out there about how to do code reviews, why you should do code reviews, and so on. I’d like to talk about what I look for when I’m performing code reviews, also known as: the things that I think about when I’m writing code. I’ve never made an official checklist, though it’s often helpful when a team/company decides amongst itself what it considers important, and has checklists and/or guidelines to follow; but this is basically a mental checklist I think of every time.

## Accessibility
This is a first class concern of mine, and what I find a lot of people don’t realize is that if you are writing semantic <abbr title="HyperText Markup Language">HTML</abbr> and using the right element in the right circumstance, then you’re already writing mostly accessible HTML. So I’m a stickler about using proper HTML, and this tends to be where a lot of my comments lie. Are you using the right element? Are you using the correct attributes? Are you thinking about structure and layout? Are your images presentational or do they need to communicate something? Are you making sure interactive elements show focus properly? And so on…

## Cross Browser Compatibility
Let’s be real here, not only do a lot of people not have the luxury of developing for only the most modern browsers, but even the most modern browsers have quirks. Sorry folks, some things just aren’t going to look or act the same way in Firefox as they do in Chrome. You might not be familiar with all the quirks, known issues, or what is now standard, and that’s okay, but if you write front-end code then you should always be checking that what you’re writing looks consistent and works in all the major browsers your company supports. Download them all and get used to using them. Bookmark <a href="https://www.caniuse.com" target="_blank">caniuse.com</a>, and get yourself a <abbr title="Virtual Machine">VM</abbr>. <strong>No excuses</strong>. You develop for the world-wide web. (Also please don’t use vendor prefixes for <abbr title="Cascading Style Sheets">CSS</abbr> declarations that have been standard in all browsers since 2008, because it’s unnecessary weight).

## DRY/DRW
Everyone is familiar with <em>“Don’t Repeat Yourself”</em>, so yes I look out for repetition when someone is performing the same action over and over and it would be better to extract it into a method. However, there’s a bigger issue I tend to see that’s similar, which is <em>“don’t recreate the wheel.”</em> There are often duplicates of functions/methods that do the exact same thing and yet more will be added. When I’m working on a new area of a codebase that I haven’t worked on before I try to do a quick read-through of the classes and their methods to see what is already available to use and might pertain to the new enhancement/feature I need to create. Whoo hoo, less work, this query already exists, and so on.

In the same vein it’s also good to have re-useable components in an app not only for ease of use, but to keep an app looking/behaving consistently. So I keep a look out for anything that looks suspiciously like something that already exists. There’s another part of this too though, and that’s doing a whole lot of unnecessary work to create something from scratch that you can get from a library that is tried and tested. I’ll say that most of the time I find that libraries/plugins are added to codebases unnecessarily and weigh down the app when it could have been written much simpler. But there are valid use cases for using a library/plugin instead of rolling your own. I often remind myself of this when there’s some new functionality that needs to be introduced that has probably already been done bulletproof before. So it’s always good to check and see if you can find something that simply and effectively fits your use case before spending months recreating the wheel that could be much faultier.

## MAINTAINABILITY
This actually kind of ties in with DRY, because I often see places where partial templates or helper methods would prevent future disasters of having to remember to change something in all these different spots, where it's not necessarily a "find and replace" sort of scenario. I used to work on a very large enterprise web app that had existed for 8 years before I got there, and I can’t tell you how many times I saw something get changed in one spot but no one thought to update it in other spots, which caused bugs and customer aggravation, so I suppose I’m a little hyper aware of these things. I suppose the point is: be kind to your future self and the future others who will work on this code. If you can’t be DRY, then at least document things and leave directions. I’ve heard some argue that code should be written clearly enough that comments aren’t needed, but code comments should explain WHY and not WHAT, and sometimes how things connect to each other. You’ll thank yourself later.

## PERFORMANCE
I find a lot of people are somewhat cognizant of performance if they’re writing queries, but don’t necessarily take it into consideration in other circumstances. I try to think of the cost of everything I add, and the larger picture. (Side note: I take pride when I can delete more code than I add in). Best case scenario: people are just impatient when browsing your site. Worst case scenario: people can legit not access your site on mobile or in areas with lower speed internet. Think of performance always.

What this means for me usually comes down to a lot of front-end issues. Are you adding more <abbr title="Document Object Model">DOM</abbr> nodes than necessary? Why does it take 5 nested `<div>`s to render a line of text? Are you using an HTML element improperly, causing you to have to add a ton of CSS to make it behave like a different HTML element? Are you loading a ton of <abbr title="Javascript">JS</abbr> and/or CSS that will never be used by this page? Are you fetching large images from the server only to have CSS show it smaller? Are you adding unnecessary JS instead of just using an HTML element that already does that? (I once had to explain to someone that you can just use the “target” attribute on a link tag to open up the link in a new tab instead of writing extra JS to do the same thing). And if you are adding necessary JS, are you making sure that it is performant? Or are you re-querying the DOM over and over unnecessarily? And you looping through items in an inefficient manner? Or on the server, do you have an action being performed before every single call, when it doesn’t need to be? Obviously there’s a ton that goes into front-end performance, and the more you can help people be aware of all the little ways it can be affected, you can slowly get everyone to improve it over time.

## SECURITY
Of course it’s always good to check for the oldies but goodies: <abbr title="Cross Site Scripting">XSS</abbr>, SQL injection, unencrypted data, but as we experience a growing number of front-end frameworks being used that handle lots of information passed in from the server, I find myself having to check more often that sensitive information isn’t being exposed in the DOM that shouldn’t be, and people can easily be tripped up by that, especially when server rendering React components. I think developers are so used to being able to manipulate data on the server safely before rendering an HTML view that it just doesn’t occur to them that you can’t just blindly pass that same data to the front-end for it to use. So I’ve tried to start being extra careful myself about only giving the front-end the data it actually needs and remind others as well.

## STYLE/FORMATTING
In an ideal world you have a set style guide that everyone has agreed upon, and you have linters and/or formatters assisting in doing the heavy-lifting so that you don’t have to, but that’s not always the case. I’ve learned to not be nit-picky about style and let a lot of things go. When it comes to possible errors, however, I try to pick up the slack when the linters aren’t enough. Missing semicolons are an issue when you want to minify your JS (see Performance). Forgetting a closing `</div>` can completely break Internet Explorer (see Cross Browser Compatibility). In other words, these things do matter.

## TESTS
Not much to say here. Most of the time I like writing tests, and I feel a special delight when they catch a legitimate bug, but there are certainly moments when I’m feeling lazy and wish I was just done with my current task, but I always overcome it, suck it up and do it. Tests are important, and I think most people would agree to that. I don’t often have to ask, “Should there be a test for this?” I do often comment though on how tests could be better, because they either have redundant scenarios or take too much time to run because they’re not taking advantage of time saving measures like not writing to the database superfluously. Sometimes the assertions aren’t asserting what they say they’re asserting, which is also wasteful. So I make sure to give tests just as much attention as the rest of a pull request, because fast test suites equal happy developers, and accurate tests equal happy everybody.

## TYPOS
The truth is I don’t actually look for typos but have accidentally been a human spell-check for as long as I can remember. I’m good at proofreading. It is rare that I don’t notice misspelled words when reading things others have written. Advantage or curse? You decide. Honestly it’s kind of annoying.

## THE BIGGER PICTURE
A lot of these things would be considered being among the weeds, and it’s always good to keep in mind the architecture of the application and how it all fits together, which can be harder to do if you’re looking for some of the smaller things. That’s something linters and pre-commit hooks can help with; taking care of the little things so you don’t have to and then it’s easier to notice things the author may not have noticed or thought of because they were so deep amongst the weeds. A second pair of eyes can always help, because they’re looking at something fresh. I had an art teacher in college who would often remind us to step back from our work and view it from across the room. It is very beneficial.

---

I hope this encourages others to start thinking about some of these elements if they aren’t already. And finally, I always look for cool things that the author did and make sure to comment on it, whatever it may be. Maybe it’s great test coverage, or a cleverly named method, but we all work hard and it’s nice to be acknowledged.
