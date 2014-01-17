---
layout: post
title: WDI Week Three
categories:
- Education
- Technology
tags:
- AJAX
- General Assembly
- JavaScript
- jQuery
- programming
- Rails
- SQL
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  schema_item_name: ''
  schema_item_url: ''
  schema_rating: '0'
  _wpas_done_all: '1'
  enclosure: "http://amy-mac.com/blog/wp-content/uploads/2013/10/js_movie.mp4\r\n552131\r\nvideo/mp4\r\n"
  _wpas_mess: 'New blog post: WDI Week Three #wdi #generalassembly'
  _wpas_skip_4323721: '1'
  _wpas_skip_4321122: '1'
  _wpas_skip_4311791: '1'
---
It really does feel like these weeks are just blowing by so quickly. Over the weekend I stumbled across some shortcuts in TextMate that I didn't realize existed and made me love the software even more. The first couple days of the week were very mini-project based, which was nice. I said to my husband Tuesday night, "I've made 3 basic web apps this week...and it's only Tuesday." It's really nice to have things like that to show the progress we're making. First business of the week was that they mixed up the Camels and the Snakes, because when they polled us they found that we wanted more interaction with the other students. So I had to switch into the Camel classroom, which I like a lot better because there's no glare on my glossy computer screen causing me extreme difficulty all day.
<h2>Monday — jQuery Review and AJAX</h2>
We went over homework and it turned out that I had completely misunderstood one of the requirements, so I tried to fix it while we were going over homework, but didn't get to finish. We played around with jQuery some more and I tried, once again, to get this basic jQuery animation working that I started last May. It frustratingly still wasn't working, and my instructor couldn't figure out why either. I think there are definitely some issues involving event handlers for .keypress, since the same exact thing worked with clicking a button, but not with pressing keys. Way to go Codecademy for teaching things that don't actually work when you're not using <em>your</em> setup.

In the afternoon we started learning AJAX. Yay! I was looking forward to formal training on it, even though I've read the AJAX documentation extensively when I was building the chatbuilder app. During the AJAX lab we had to rebuild the movie search app using only jQuery/JS and AJAX. I was exciting about this since it means I would be able to host it on my site easily instead of using Heroku. During the lab I worked ahead while the instructor answered questions, so I ended up getting the app done sooner. I threw on the CSS from the other movie app, and voila. The one different thing though, is that the requirements for this project was that we had to do everything on one page, rather than having separate pages like we did in the first one. So when someone would click on the link for more info, it had to display the details while hiding the previous items. I really didn't like this, but I understood why they wanted us to do it that way.

When I did the jQuery tutorials on Code School, they taught event delegation and I understood it, but whenever our instructor talks about it in class I just can't figure out why it's any different than the code that I've been writing. I think it's something I really need to look into more extensively to fully comprehend it.

Homework that night was somewhat optional. They said if you were still working on your movie app, to finish that, otherwise to do the jQuery tic-tac-toe homework. They already had the html set up for us, and we were just supposed to edit the JavaScript file. They had the outlines of functions, but not the insides, and I couldn't make heads or tails of how they wanted us to use those functions. I thought, "This would be so much easier if they just let us do it from scratch." I really wish I had done it from scratch because I wasted so much time trying to figure it out. After an hour of writing code I realized wasn't going to work, I started over and tried to ignore some of their functions, and that wasn't really going anywhere either. Then I saw the instructors post in hipchat that we didn't have to finish the tic-tac-toe and there would be time to work on it in the morning. So I called it a night.
<h2>Tuesday — JavaScript and Ruby review</h2>
In the morning we were going to be doing review. Those who wanted to review Ruby went to one classroom, and those wanting to review JavaScript went to the other. I went to the JavaScript review, but they didn't really go over anything I wasn't already comfortable with, so I continued working on the Tic-Tac-Toe whenever I had a spare minute, and also worked on my movie app some more.

The night prior I was reading my <a title="jQuery Compressed" href="http://www.amazon.com/jQuery-Compressed-Jakob-Jenkov-ebook/dp/B006DI6QJ2" target="_blank">jQuery Compressed</a> book on the bus ride home, read about Modals and decided that this was the just the thing needed for the one-page JS movie app. It made viewing the movie details much cleaner and easier to go back to the results list and select something else since it basically pops up a div in front of everything else and then you just close that div to see the page underneath again. Here's a video of how it looks:
[video width="640" height="480" mp4="http://amy-mac.com/blog/wp-content/uploads/2013/10/js_movie.mp4"][/video]

In the afternoon we had the option of doing the Ruby review or starting on a lab project. Most of us who were in the JS review opted for the lab project. We had to create a To-Do List app using jQuery and as usual there a set checklist of things we were supposed to do. I got the beginning of mine set up pretty quickly but then hit a huge stumbling block that prevented me from going any further. I couldn't get the checkbox to recognize the event handler for it. I tried a few different things, and then asked for help. Both instructors who looked at it couldn't figure out why it wasn't registering the event.

Unfortunately I couldn't do anything else on the checklist until this problem was solved, so after about 45 minutes of frustration and getting worn out I said, "I give up," and put my head down.  But of course I wasn't able to actually give up. My mind just won't let things rest until I can figure it out. I looked at some examples of other jQuery code involving checkboxes and tried moving my event function to be within another function, instead of on its own, and magically it started working just the way it was supposed to. I'm not completely sure as to the why. Definitely a moment illustrated perfect in this picture: <img class="aligncenter size-full wp-image-1559" alt="Code meme" src="http://amy-mac.com/blog/wp-content/uploads/2013/10/BCh-v51CAAA9HuT.jpg" width="447" height="687" />

After that it was smooth sailing. Here is what mine looked like: <a title="To Do List" href="http://bl.ocks.org/amy-mac/raw/0a2d009e08906ffcea2d/">To-Do Project</a>.

Homework was to just finish working on the projects, so I continued working on the Tic-Tac-Toe and finally got it working with their suggested functions. I extremely regret not writing it from scratch, and in the future will probably follow my instincts instead.
<h2>Wednesday — SQL</h2>
When they told us Wednesday morning that we were going to learn SQL I think I clapped with glee. It's a subject that I hadn't started to learn yet, but of course am anxious to learn because databases are so important. They explained the basic concepts to us while white-boarding out examples, and then they had us fire up sqlite3 in the command line. We then practiced creating tables, adding entries, editing entries, deleting entries, and of course querying the database. I was surprised at how intuitive and non-scary it was. We practiced a lot and then did a lab where we had to take the guestbook homework from Week 2 and turn it into a RESTful app that saves the entries to a database and then queries the database for the messages. It was pretty great to start having persistent data.

For homework, we had to create a Sinatra app called "Book Haikus" that uses a sqlite3 database. I ended up going to the USS Loma Prieta meeting that night, which I hadn't initially planned on attending, due to homework etc, but my husband lured me to the Mission with Irish food, and it made sense to just head over to the Captain's house for the meeting. I worked on the homework the entire time I was there but it was slightly slow-going due to the distractions. I managed to get all the functionality working by the end up the meeting (9pm) but still needed to style it. The requirements for the homework stated that we either had to incorporate the Google Books API or make the page super styling, so on the BART ride home I got to work on the CSS. I ended up staying up until 11:30pm trying to get it looking nice but wasn't completely happy with it, and it was too late to try out the Google Books API, so I went to bed. I didn't get the CSS decent enough until the next morning. Here was the final outcome:

<a href="http://amy-mac.com/blog/wp-content/uploads/2013/10/Voila_Capture44.jpg"><img class="aligncenter size-medium wp-image-1560" alt="Book Haikus webpage" src="http://amy-mac.com/blog/wp-content/uploads/2013/10/Voila_Capture44-600x360.jpg" width="600" height="360" /></a>
<h2>Thursday — Rails</h2>
I showed off my page when we reviewed homework because no one else volunteered, and one of the instructors really liked it, so that made me feel better about it. She also rather enjoyed my haiku for <em>The Mists of Avalon</em> ^_^

We started learning *drum roll* Rails. Of course, I've made a <a title="Amy's first Rails App" href="http://obscure-tor-8051.herokuapp.com/">Rails app</a> before, but do I know Rails? Nope. So I'm pretty excited to learn it properly now. The morning was very slow going though. The instructor explained the concepts behind an MVC (Model-View-Controller) framework and then we started a live code-a-long to introduce a Rails project to us. Lots of people were having problems with the project set up, and others had questions each step of the way. It's definitely one of the days that I've taken the most notes. I didn't want to miss anything, and fully understand everything. Our project was called "Kittenz" because who doesn't like cats*?

We were walked through creating a model, then a controller, adding views, editing the routes. There was a lot of focus on the database and how much easier it was to interact with the database in Rails. Over lunch I continued playing <a title="Rails for Zombies" href="https://www.codeschool.com/courses/rails-for-zombies-redux" target="_blank">Rails for Zombies</a> on code school to enhance my understanding and it was a great secondary resource in understanding everything we were doing with the instructors. In the afternoon we learned about validations (which I had just seen in Rails for Zombies) and then for a lab we had to try and do the same things we did in the morning, but on our own, by creating a Dog model and a Dogs controller, etc. I completed that and then adventured into creating a form to add an entry to the database, instead of adding directly from the rails console, like we'd been doing all day. I managed to do that, but decided to hold off on attempted updating or deleting until the instructors were gonna show us.

After that I started working a little on the homework which had just been assigned, as it was the end of the day. Just like last week, it was supposed to be "easy" homework of finding an article about failure (and lessons learned), summarizing the article, and then writing about what failure means to us, etc. I find these kinds of assignments very difficult, so it's a good thing I went home to work on it and rest, instead of going to the multiple friend events I was originally planning on. In the end, it took me 3 hours, and I didn't actually finish until 5 minutes before class started. I was still 50 words short.

*<em>A lot of people but we'll pretend like they don't exist.</em>
<h2>Friday — More Rails</h2>
The first hour or so of class was a "fireside" chat—complete with virtual fireplace playing on the projector—about failure and success. We sat in a circle and some people talked about their articles, and we all discussed what failure means to us, in regards to the program, and what success would look like. After that, the instructors informed us that there was a very important reason we had this kind of assignment and discussion, and that's because Friday was going to be an all day lab day of having to create a Rails project on our own, and that we might feel overwhelmed with failure.

First they went over how to add things to the database from a form, in a Rails app, which I had already done the prior afternoon so I got started on the lab early. It was actually a very basic assignment, with a set list of instructions, so it's not like we were just free to create anything we wanted. We were supposed to create something like <a title="bit.ly" href="https://bitly.com/" target="_blank">bit.ly</a> called rit.ly. We had to take the link inputted, store it in the database along with a hash code we created, and then display the code to them and have their new rit.ly link redirect to the original website when they'd click on it, etc. I had the entire functionality of it working by lunch time. So then after work I concentrated on the CSS and making it all look nice. I added in error handling, and then was kind of bored, so I added in iframe previews of the websites just for the hell of it:

<a href="http://amy-mac.com/blog/wp-content/uploads/2013/10/Voila_Capture46.jpg"><img class="aligncenter size-medium wp-image-1562" alt="Rit.ly webpage" src="http://amy-mac.com/blog/wp-content/uploads/2013/10/Voila_Capture46-600x362.jpg" width="600" height="362" /></a>

After that I really wasn't sure what to do next, with the limitations of the lab instructions, so I put on my headphones and continued watching Rails for Zombies tutorials. We had a brief break to meet Brooke, the staff member in charge of what happens after we graduate WDI. She's going to talk more about the resources available to us when we get a little further into the course. Class ended a little early because we all had to be out of there by 5pm, since General Assembly was hosting a <a title="Bay Area Geek Girl Dinner" href="http://bayareagirlgeekdinners.com/" target="_blank">Geek Girl Dinner</a> that night. So happy hour was taking place at Zeke's, a bar across the street, and I went over with the rest of the group to socialize and drink some beer.

I didn't find out what the homework was until late that night, and it turns out we have to take our Sinatra movie search app, and turn it into a Rails app, and then add on a reviews feature. I'm kind of excited we get to keep working with the movie search app, since I'm going to need a final one to present to my husband, for his movie searching needs, and it's a 3-day weekend, so hopefully I'll also get to study and review all the things I've been wanting to brush up on.
<h2>Thoughts and Reflections</h2>
I was having really intense anxiety on Monday, to the point of hyperventilating and tears. I've been really demanding of myself and it's starting to take its toll. I know I need to learn to relax and stop thinking I can just study and work constantly, with no breaks. We've instituted a new rule at home that I'm not allowed to be on my computer or iPad for at least 30 minutes before bedtime and I'm not allowed to think about code, or read any coding books in that time. This has been a lot easier said than done, but I finally started reading <em>Sandman</em> to try and distract myself.
<ul>
	<li>It's really interesting to me that though I was studying JavaScript and jQuery a very long time before I had ever seen Ruby, I've had the most frustrations in the program with the former.</li>
	<li>I'm really tired all the time again. My enthusiasm and excitement isn't enough to sustain me anymore. Sometimes the only thing that gets me out of bed in the morning is the desire to finish perfecting my homework before class.</li>
	<li>Overall, I felt that the instructors and the curriculum really prepared us well for Rails. It all feels very natural, because it's all the same stuff we've been doing for a couple weeks now: Sinatra, accessing params, REST, SQL, erb. For all of it I was like, "Oh, so like what we've been doing." It connects up so beautifully.</li>
	<li>I'm still shy about trying to pair program. I think I need to push myself to do it once a week to break out of my comfort zone.</li>
</ul>
