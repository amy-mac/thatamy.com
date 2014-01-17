---
layout: post
title: WDI Week Two
categories:
- Education
- Technology
tags:
- CSS
- General Assembly
- impostor syndrome
- JavaScript
- programming
- Rspec
- ruby
- Sinatra
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  schema_item_name: ''
  schema_item_url: ''
  schema_rating: '0'
  _wpas_done_all: '1'
  _wpas_mess: 'New blog post: WDI Week Two http://wp.me/p3OZi7-o9'
  _wpas_skip_4323721: '1'
  _wpas_skip_4321122: '1'
  _wpas_skip_4311791: '1'
---
<h2>Monday</h2>
[caption id="attachment_1502" align="aligncenter" width="518"]<a href="http://amy-mac.com/blog/wp-content/uploads/2013/10/IMG_4605.jpg"><img class=" wp-image-1502  " alt="Props Board" src="http://amy-mac.com/blog/wp-content/uploads/2013/10/IMG_4605-e1381016681271-1024x839.jpg" width="518" height="425" /></a> I made it onto the props board![/caption]

The entire morning was a lecture about the way the internet works. Things like:
<ul>
	<li>HTTP</li>
	<li>Servers vs. Clients</li>
	<li>Ports</li>
	<li>SSL/TSL</li>
	<li>Data Persistence</li>
	<li>and more!</li>
</ul>
I was familiar with about half of what we went over, but it was a whole lot of information to try to absorb and I think my eyes were probably glazing over at points. We then started learning about HTTP methods: Get, Post, Put/Update, Delete. I was familiar with these from working with AJAX and doing the Parse API tutorial on Codecademy, not to mention first encountering these terms with my first rails app. We started to learn how to use Sinatra and put these methods to use. I was excited about finally getting a chance to put some back-end and front-end together. We started out with just a basic calculator, putting in the parameters through the address bar and having the answer appear on the page.

For homework we had to use Sinatra to make a guestbook, where you enter the message parameter through the address bar, and one page thanks you for the message, and displays it, while another page shows all the messages. We also started adding in CSS to our workflow on this day, and basically if you let me loose with CSS I will work on it indefinitely. I'm trying to get better about being able to walk away from my art instead of perfecting it and never finishing.
<h2>Tuesday</h2>
We started learning testing, and got an intro to Rspec. We did a lab where we had to calculator scores for bowling, and so we'd write the test first and then write the code that would make our tests pass. Unfortunately I didn't know anything about bowling scores so it was impossible for me to write the code without first understanding bowling. So I spent about 45 minutes just researching that and trying to get a grasp on the way it's scored, and then was able to make one test pass. I didn't get any further than that since I spent the majority of the time trying to figure out bowling. But now I understand what the term "test driven development" means. My initial intro to testing, through Learn Ruby the Hard Way, didn't use Rspec, it used the built in testing, and we wrote the code before we tried to test it. I definitely need to study up more on Rspec though, as we haven't spent a lot of time on it yet.

We did some HTML and CSS review, and did a lab where we had to make a one-page portfolio site for Cookie Monster. I busted it out in about 10 minutes and then sat there kind of bored while the lab continued for at least another 30 minutes. I had to remind myself that most classmates have not worked with HTML as long as I have. So I took the opportunity to review some of the other stuff we were learning.

We worked with Sinatra some more, and HTML forms, and actually started using Sinatra in a more natural way, so I liked it a lot more than on Monday. We got deeper into what REST is, worked on some more Sinatra labs. Then for homework we started working with our first API! That was also really exciting. We used the yahoo finance gem, and the assignment was to create a Sinatra app that had two pages: one with a search bar where you'd enter a stock symbol and then the page that shows the result. Here's what the front-end of mine looked like:

[gallery type="square" columns="2" link="file" ids="1505,1506"]

Simple app, but we have to start somewhere! I also did very minimal CSS on it, because it was Jesse's birthday and I was taking him to see 1776 at A.C.T. so I only had an hour in between school and the show to try to get the homework done. I got a pretty good start on it before I had to leave, and then I was frantically trying to finish when we were on the BART home. By the time we got home I had all the functionality working but hadn't added in the styling yet, so I just threw in some quick CSS when we got home, and went to bed.
<h2>Wednesday</h2>
I was dead after being up so late the night before, and treated myself to coffee shop coffee. One of my instructors actually commented on the minimal CSS styling when I turned in my homework, and I told her that I just didn't have much time to work on it. She said that she just figured that I didn't care as much about front-end because my back-end was really solid and then it was just the little CSS. I laughed and told her that my background is actually in front-end, but I figured in this case, the bare minimum would have to do.

We started working with JavaScript and I was really excited because of my prior experience with JavaScript, and my continuing goal to become really awesome with it. We started doing DOM manipulation with JavaScript right away, which made me happy since that's something that is really lacking in online tutorials. We worked with events happening when buttons are pushed, and did some setTimeout() and setInterval() fun things, which I had luckily gotten intimately familiar with those when I was doing the chat builder app.

We also went over recursion, which I mistakenly thought that I understood before the program started. One of our instructors did this 'rabbit hole' example that blew my mind. I had to continuing thinking about it for a while, but I <em>think</em> I get it now. We also started working with advanced CSS, which again, I was already familiar with, but I didn't mind having a mentally easy day with being so tired from the night before.

Homework was to use JavaScript to create a bank page where you could deposit money into a checking and savings account and also withdrawal it from those accounts, and there was all this other criteria we had to complete, ending with: there had to be overdraft protection. I worked on it step by step, and got it all working. The html had already been provided for us, and we just had to do the JavaScript for it, but I ended up changing up the default CSS quite a bit because it was pretty ugly. This was the result:

[caption id="attachment_1508" align="aligncenter" width="530"]<a href="http://amy-mac.com/blog/wp-content/uploads/2013/10/badtz-maru-bank.jpg"><img class="size-medium wp-image-1508" alt="Webpage screenshot" src="http://amy-mac.com/blog/wp-content/uploads/2013/10/badtz-maru-bank-530x300.jpg" width="530" height="300" /></a> Bank homework[/caption]
<h2>Thursday</h2>
[caption id="" align="alignright" width="240"]<a title="IMG_4627 by AMsloan, on Flickr" href="http://www.flickr.com/photos/amy_sloan/10104058366/"><img title="Rubber Duck" alt="Rubber Duck" src="http://farm8.staticflickr.com/7387/10104058366_d0af9a59c4_n.jpg" width="240" height="320" /></a> My new Rubber Duck for debugging assistance[/caption]

We were given a lab project to work on the entire day, and it was the largest scale of anything we've had to do so far. We had to combine Sinatra, Ruby, API's, HTML forms, JavaScript, and CSS to make a movie search app. We were using the <a title="omdb" href="http://www.omdbapi.com/" target="_blank">omdb API</a> because it wasn't going to need authentication. I found it a little limiting but understand why it was used for the lab. I had a couple of frustrations while working on it, one minor, one larger.

For the first one I had simply forgotten the first way we were using Sinatra, with entering parameters through the address bar. The 2nd frustration happened after lunch when I was working on the JavaScript disclosure widget, that was part of the lab's requirements. I spent 2 hours wondering why my code wouldn't work, suspected that it wasn't even loading, wasn't sure why, and I was so exhausted and fed up I said, "Fuck it," took the JS out and sat there in a stupor for about 20 minutes. I was going to ask for help but none of the instructors were around the last hour that I was beating my head against a wall.

Finally an instructor came and took a look at my JS and it turned out that I had written document.getElementByID instead of document.getElementById. That single uppercase letter caused me a 2 hour headache. I couldn't believe it. The bright side is, that my solution to creating a disclosure widget was correct and worked immediately once I fixed that. I was rather excited, because I've been wanting to do disclosure widgets for years, and so far hadn't gotten any to work with just CSS. I deployed my <a title="WDI Lab Project" href="http://secure-cove-7665.herokuapp.com/">movie-search app</a> to Heroku, to show to a couple of people, but the images won't work on it, so here's a screenshot of what it looks like when I run it locally:

[caption id="attachment_1510" align="aligncenter" width="576"]<a href="http://amy-mac.com/blog/wp-content/uploads/2013/10/movie-search.jpg"><img class=" wp-image-1510 " alt="Screenshot of Web App" src="http://amy-mac.com/blog/wp-content/uploads/2013/10/movie-search-1024x686.jpg" width="576" height="386" /></a> Movie Search Details Page[/caption]

Jesse says he likes the UI better than IMDb, so I'm thinking about finding a better API to access IMDb with and create a movie search app just for my husband to use, because I love him.

GA bought a bunch of Rubber Ducks and right after lunch let us pick out our own to use for <a title="Rubber Duck Debugging" href="http://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank">Rubber Duck Debugging</a>. I chose one that had blue flowers on it. I have yet to name my duck though. Since we were completely immersed in the lab all day, and since GA was having a social gathering for us after class, they assigned "easy" homework for us of doing a sort-of book report where we had to find a controversial tech article, summarize it, state people's opposing viewpoints, and then state our own opinion. I didn't actually find the assignment easy and would have rather coded. The social gathering after class was fun though. We went across the street to a bar called Zeke's and they stuffed us full of beer while we all chatted about nerdy things. I ducked out before everyone else so that I'd have time to do the homework and because I was dead tired. I got home at 8pm and didn't finish the homework until 10pm and then went to bed. I would have posted the report on the blog if I thought the article that I assessed was worthwhile but I don't feel it needs any attention.
<h2> Friday</h2>
We went over homework, except of course this time it was just hearing other people's opinions concerning the book reports. I was glad that I wasn't randomly called on, since I had trouble finding a decent article on Hacker News to talk about, and I didn't have any recent articles saved in my Instapaper that would suffice, so I ended up just settling on one, because it was late, and I was tired and wanted to go to bed.

After that, one of the instructors went over JavaScript prototypes and inheritance. This was something I had already learned back when I first started learning JavaScript, and it wasn't something that I had problems with at the time I learned it, but the way the instructor explained it and did the examples made me really confused. When we started the exercise after the explanation, I was so lost I pulled up the JavaScript track on Codeacademy to review what I had learned the first time around. I learned JavaScript from quite a few different sources, but I knew I could find the examples I was looking for quickly on Codecademy. After reviewing prototypes there, I once again felt like I had a grasp on things and understood it fully, and knocked out a bunch of prototype examples.

I then went back to troubleshooting why my Sinatra app that I had deployed to Heroku first thing that morning wasn't working, until lunch. GA fed us pizza for lunch, which was pretty awesome of them, and a couple GA alumni talked to us about their experiences and gave us some advice. It reminded me that I haven't really thought a lot about projects, and honestly am kind of terrified of coming up with my own ideas. This weekend I plan on brainstorming and doing some initial research.

After lunch they spent a couple hours going through how to do the movie app step by step, for those that were having difficulties. Since I already had gotten mine working, and felt like I have a pretty good grasp on Sinatra, I didn't code along, but kept an ear open for explanations of anything that I wanted more details about. While listening I spent quite a bit of time trying to figure out how to deploy a Sinatra app with my own web host (Bluehost) since I wanted more control than Heroku provides, and as I suspected it's quite a pain in the ass. I purposely only renewed my service for 3 months instead of a year because I thought there might be better hosting services for the web apps that I would be making in the future, and now I just need to find them. Bluehost was/is great for the simple hosting needs I had up until now, but it's time to ramp things up!

[caption id="" align="aligncenter" width="500"]<a title="IMG_4628 by AMsloan, on Flickr" href="http://www.flickr.com/photos/amy_sloan/10104018135/"><img title="Happy Hour" alt="IMG_4628" src="http://farm8.staticflickr.com/7430/10104018135_accaec052c.jpg" width="500" height="375" /></a> GA Happy Hour getting started[/caption]
<p style="text-align: left;">When the day was almost over, they split the Snakes and the Camels into two groups again, for those that wanted more JavaScript review, and those who wanted to get a head start on the homework. Even though I didn't yet know what the homework was going to be, I chose the latter group, because I figured it was unlikely to be anything more complicated than the JavaScript that I've learned in the past. The homework problems weren't too hard, but I had trouble concentrating because the room we were in was very loud and disruptive. I still managed to get about 75% of the problems done before Happy Hour started though, so I am excited it's going to be an easy homework weekend. I had a couple glasses of wine and chatted with my classmates for an hour before heading home to a home-cooked meal by my wonderful husband. I plan on spending Saturday reviewing all the topics that we learned this week and doing some extra study. Then I plan on forcing myself to relax for the whole day on Sunday to help my body and mental state.</p>

<h2>Thoughts and Reflections</h2>
I was feeling really burned out the last couple days of the week. I think I haven't been getting enough quiet time to myself for re-energizing. Textmate is perpetually open on my computer these days. I still don't like SublimeText, no matter how many times I've tried to use it. I think I'm up to the 5th time this year of making the attempt.

I had planned on someday learning how to use Vim, because I've heard that a lot of Ruby developers use it in the workplace. When I queried one of my instructors about whether it would be really beneficial to know how to use it by the time the program ended, they exclaimed, "Oh I'd hire you instantly, just for that." So that really reinforced it as a goal for me, to start learning it and to get efficient with it by December.

As of this week, I've finally stopped feeling like I'm not cut out to do back-end programming. I've had my doubts up until the program started, and kept thinking that I'll have front-end development to fall back on if it turns out I really do suck at back-end. I'm overwhelmed by how much there is still to learn, but I really do feel like I can do this, and that's an amazing feeling. Jesse's been raving about me, about how talented I am, and how proud he is of me, and a lot of classmates have commented about how good I am, and I keep saying, "No, I'm not, I am just studying hard," and other such excuses.

I don't think it really occurred to me until today how much I'm still letting impostor syndrome kick in. Every time someone compliments me about my code, or my designs, I immediately downplay it, or give excuses as to why it's really not that great, or I say, "Yeah, but I didn't do this thing that I should have done." I'm going to try to be more mindful about this going forward.

Wish I had time to post more code here, but there's so much I want to review this weekend. Still happy, still exhausted, life is grand.
