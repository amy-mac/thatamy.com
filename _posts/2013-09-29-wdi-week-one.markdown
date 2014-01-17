---
author: amy@amy-mac.com
comments: true
date: 2013-09-29 03:03:55+00:00
layout: post
slug: wdi-week-one
title: WDI Week One
wordpress_id: 1482
categories:
- Education
- Technology
tags:
- General Assembly
- programming
- ruby
---

As I suspected, blogging every day was impossible; too busy with homework. So here is an overview of the week.


## Tuesday — Arrays, Hashes, JSON


We went over the homework in the morning, and did some more exercises. The focus was on arrays, and I learned a couple new useful methods. I had been using the `.rand()` method to get random items from an array, but it turns out that the array class has its own method called `.sample()` that does the same thing in a much simpler manner. In the afternoon we did a lab project where we had to use Ruby to extract data from a JSON file. We also were told about a great browser extension called [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) for making JSON easier to read in the browser. It's also handy for showing you the path of a line item at the bottom of the screen. I've worked with JSON once before in the chatbuilder app for Hack Reactor, so I had a basic idea of what we were supposed to be doing, as far as accessing the values. I really enjoyed the lab, since working with JSON is one of the things I've been wanting to reinforce in my head. After class, Jack Danger from [Square](https://squareup.com/) came to talk to us about engineering, the work environment, advice, etc. and I found the talk very encouraging and inspiring.

https://twitter.com/ThatAmyMac/status/382665588776378368


The first part of the homework that night was mostly easy and I had finished it all in class except for a single problem that I ended up spending a couple hours on. I scoured both the [arrays documentation](http://ruby-doc.org/core-2.0.0/Array.html) and the [hash documentation](http://ruby-doc.org/core-2.0/Hash.html) trying to figure it out. All we had to do was compare 3 arrays to find the number that was common to all of them. I kept trying to figure out how to loop through and compare all the items, but no method I was coming up with really seemed logical. I finally posted to HipChat to see if any of my classmates had figured it out, and one of the instructors started giving me hints, but another classmate said, "Just use &." I looked at the Array docs again and realized that up above all the word methods there were operators that I had been ignoring.  If you use & to compare two arrays, it'll return the common items. Easy as pie! Example: `[3, 5, 6] **& **[5, 7, 2]` will return [5]. I felt like an idiot for not finding that method sooner. Needless to say, I now look at all the operators too.


The second part of the homework was tricky. We were given 4 subway lines that intersect at Union Square and had to be able to take input of where a user was getting on at, and getting off at, and tell them how many stops until their destination. I spent a couple of hours on it and got a fair amount done, but there was one thing tripping me up that I didn't know how to solve so I finally went to bed around midnight. About 5 minutes after going to bed I was laying there explaining in my head to my instructor the issue that I was having and a lightbulb appeared (Yay Rubber Ducky debugging!). I excitedly grabbed my iPad from the nightstand and started jotting down the solution with my stylus in Penultimate, and went back to sleep. The next morning before school I got it working and quite happily submitted my homework before heading out to class.


## Wednesday — Methods/Functions


The morning was kind of slow again, as we went over methods, but the afternoon really started to pick up and provide some challenge. They combined the Camels and the Snakes and split us up into two groups. One group was going to go do review and the other was going to do some more challenging exercises. I chose the latter, of course. We worked through some exercises, such as testing whether a word is a palindrome. I started to solve it by doing looping and comparisons, and then I stopped and went, "Wait! Can't we just compare the string to the string reversed? Such as: `puts true if string1 == string1.reverse`? Alas, about 5 minutes after I had that "Duh!" moment, the instructor notified us that we can't just take the easy route, we have to do things the manual way. Luckily I had only commented out my original start to the solution, so I finished it up and was able to get it working the manual way.

After doing a couple more exercises like that, the instructors told us that the next challenge was to create a 'Choose Your Own Adventure' game. I excitedly clapped my hands and said, "Ooohh, I've created a couple Choose Your Own Adventure games because it was required in [Learn Ruby the Hard Way](http://ruby.learncodethehardway.org/book/)!" (Which we had to do for pre-work). The instructor said that their requirements would probably be harder, but when I showed them what I had made for the LRTHW exercise, which you can see [here](https://github.com/amy-mac/st-tng_game/blob/master/star_trek.rb), they said, "Well obviously you don't need to do this exercise." So they asked me if I'd like to instead go through and refactor my code? I agreed most heartily since I've been wanting to continue to make the game better as time goes on. So I spent the next hour going through cleaning up the code, and decided to start tracking it through git.

[caption id="" align="aligncenter" width="640"][![General Assembly students coding](http://farm3.staticflickr.com/2863/9989492336_cbcb83d5f0_z.jpg)](http://www.flickr.com/photos/amy_sloan/9989492336/) Classmates working out code on the window.[/caption]

Our homework assignment was to create a calculator app to run in the command line. I figured it would be pretty easy so I left class right away to head home. The calculator was in fact easy, but it took me over two hours just to type it all out. Once I got it in a fairly good working state I cuddled up to watch an episode of DS9 with my husband. He laughed at me because as soon as it ended I sat back down at the computer to fix some bugs. He went to sleep and I only continued working for about 5 minutes more before deciding to prove to him that I'm not an addict, and went to bed. In the morning, however, I chose to fix the bugs in my [calculator app](https://gist.github.com/amy-mac/3f19e38115c70dca6cfc) instead of using my time to eat breakfast before class. Dedication.


## Thursday — Culture, Github, and Classes


This was the day that tiredness was really starting to set in. The first part of the morning we were asked to get into our small sub-groups of buddies to brainstorm on culture for the classroom, since we hadn't gotten to that the first day. Every group had to go up and add to a list of what we thought was most important for the culture of our class. A lot of it kind of goes without saying, but I think it was a good reminder to people to be respectful, honest, encourage each other, etc.

We went over our calculator homework after that and a couple people went up to present their solutions. One of my classmates, Santiago, made one that just blew all of us away; it was gorgeous. He had formatted it in such a way as to be really readable in the command line. A couple other people presented who didn't follow all of the instructions, and then our instructor showed us her solution, which also didn't follow all of the instructions. I was a little annoyed with this because I tried to follow them exactly, and would have probably done things a little differently if I wasn't under the restrictions of their steps, so I raised my hand and asked if we're supposed to take the homework instructions literally, or can we deviate? They said we don't have to take them literally, so I'm definitely going to start coding things the best way I see fit, and not get too hung up on being so precise.

I also didn't realize it at the time, but no one is looking at my homework anyway. I am one of the only people who has had a pull request open the entire week for my homework. It just isn't getting looked at and merged in, and it's so lengthy now I'd be shocked if they bother to read all the files and commits.

After that, one of the instructors, who is pretty much the resident Git expert, went over Git and Github again with us, and how to submit our homework. I guess some students were pretty confused about it, which is understandable because I remember being confused and frustrated when I finally started using Github last February. At first I was going along and doing the exercises with the class because practice makes perfect, but then he had to go into some massive explaining of how it all works and ties together, using lots of drawings and visual representations, and so I started working on my own stuff at that point. All in all the whole Github thing took over 2 hours and I was feeling very drained and grumpy by the time it ended. Yay for lunch time to rejuvenate.

After lunch we started going over Classes and Inheritance in Ruby. This is also something I had already learned in the pre-work but I was happy to do the exercises because Classes are so important and practice makes perfect (I'll be saying that a lot). We did a few exercises about how to create Classes, inherit from other Classes, use `attr_accessor`, and so on. I spent the latter half of the afternoon trying to remember how to use the splat operator properly for unknown amount of parameters in method arguments. I remember learning about how to do it when I did the Ruby tutorials on Codeacademy but I was having trouble remembering how to access it if you have multiple arguments. I'm hoping this will be gone over in class at some point, because I think it's very important for using methods to their best potential.

The homework assigned seemed like it was going to be very quick and easy (as opposed to just easy like the Calculator app was) so I decided to stay after class to get it done before heading home and let rush hour commuters clear the streets. I rebased the upstream for the homework repo and started to get to work, but then realized the rebase didn't actually finish. There were merge conflicts. I had my first "working with another person's repo" headache. I started looking around for our Github expert instructor to ask for help but I didn't see him anywhere and he wasn't on HipChat so I started trying to figure out what I needed to do, on my own. Luckily the error messages are pretty informative so I was able to deduce that I needed to open up the files that had "warning" symbols on them (and were mentioned in the errors) and edit them. I managed to finish editing 3 of the 4 files that had merge conflicts, when the instructor appeared to help. He aborted the rebase and helped me go back through everything and make sure things were good. I asked him for any tips on how to make sure this doesn't happen again in the future, but neither of us really knew why the merge conflicts happened other than he said there had been some Github weirdness that week. Either way, I'm glad to have him as a resource if it happens again.

So that all took 45 minutes and then I finally got started on the [homework](https://gist.github.com/amy-mac/3a811124a1fcd88a4ed1). We had to create a blender method, and then a blender Class. I did the method pretty quickly, and had just started on the Class when a classmate came over and asked me for help. I told her I hadn't gotten to the part she was asking about yet, but that I'd be happy to help once I tackled it. A few minutes later I had finished and went over to help. All the instructors had left for the night so it was just a few of us there working away. I spent about 10 minutes helping to walk her through it and it looked like it was working, so I started to go back to my seat, and then another person asked for help. So I helped that guy and then went back to my seat to wrap things up. Right after sitting down though, another classmate asked me for help so then I went and helped him too. He used regex in his app! I'm kind of scared of regex right now, but mainly because I haven't really sat down to learn and understand it yet. After I was finished helping everyone out, I pushed my homework up (to Github) and headed towards home. At this point, it was about 8pm, so I was kind of amused that even though it was the easiest homework of the entire week, I had managed to spend 2 ½ hours after class just trying to get it submitted.

I'm starting to learn that I really like helping my classmates, and explaining concepts to them, because it helps me fully understand things better, it helps me learn to communicate more effectively—which is something I definitely have needed to improve—and I have always enjoyed helping other people, so everyone gets something out of it. I'm not the best communicator in the world, and I have often thought that I suck at explaining things, so the more practice I get...the better! ;-)


## Friday — Exceptions


I was officially exhausted by this day. I was so drowsy and coffee wasn't really helping. This was also the first day that I had a really frustrating time in class. I think this was directly correlated to my tiredness. After going over the homework, we started learning about Exceptions (error handling). I paid full attention to this, because while I had started to see some stuff about Exceptions in the pre-work, this was not a subject I was fully comfortable with yet. We were told about the ninety-nine percent rule:


> 

> 
> "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time."
> 
> 

> 
> —Tom Cargill, [Bell Labs](http://en.wikipedia.org/wiki/Bell_Labs)




After the initial Exceptions lecture, we worked on a [lab project](https://gist.github.com/amy-mac/ebaf2e60f0c185e809ce) and this was where I got really frustrated. I spent about 30 minutes just beating my head against a wall, not able to figure out how to get things to work. One instructor tried to help, but I don't think she understood me when I explained what I was having trouble with. I continued to beat my head against a wall, and thought that I just wasn't getting the Exceptions stuff at all. It turned out that the Exceptions stuff wasn't my problem. A simple loop that wasn't performing correctly was my problem. I couldn't figure out why this simple loop wasn't working:




[![Ruby code](http://amy-mac.com/blog/wp-content/uploads/2013/09/loop.jpg)](http://amy-mac.com/blog/wp-content/uploads/2013/09/loop.jpg)




I tested all the objects involved to make sure that it was outputting what I thought it was outputting, but it turns out that by using `puts` to test instead of `print` I wasn't realizing that the stomach array was actually an array within an array. It took one of my other instructors coming over and helping me to figure that out. It was just a matter of flattening the array before doing the loop. After that I had a raging headache and was so angry with myself for getting stuck on a stupid loop.  I'm sure I came across as really grumpy too when the instructor was helping me, and so I felt bad, because I wasn't grumpy with her, I was grumpy with the code. Hopefully she understood. With the loop problem solved, I had the custom Exception working within 5 minutes. It ended up being so anticlimactic and easy; I felt like there should be so much more to it after struggling all that time. I sat back and took a deep breath and then got myself some ibuprofen.




One of the past instructors of the program had a Google Hangout with us from Berlin to chat and give us advice. I was extremely disturbed by the fact that he was the complete doppelgänger of an ex-lover of mine from Virginia. I mean seriously: identical. During lunch I actually wandered outside and found a bunch of my classmates hanging out in South Park. I joined them and basked in the sunshine and was thrilled I finally had a chance to do some socializing. I bring my lunch from home every day, whereas most everyone eats out, so it's been tough trying to make friends.




After lunch we had a [!Quiz](https://gist.github.com/amy-mac/6735106) (not Quiz), where we could go over what we had learned all week to determine how comfortable we were with everything. It wasn't going to be "graded," and was mainly for our benefit, but we still had to fork the gist for it so that the instructors could look over it. I sped through most of it, but as I got towards the end I got stuck on a loop again. Loops were not my friend on Friday. I was trying to do a loop within a loop and it just wasn't working the way it was supposed to. Finally I just did a single loop and incremented the index of an array, and got it working, but then our time ran out for the quiz. I need to learn to move on to the easy problems when I'm stuck, because I continued working after the instructor got up and started to go through the beginning and finished the rest of it really quickly.




We once again got to join with the Camels and then split into two groups to work on separate lab projects. Though I was exhausted and grumpy I chose the more challenging one, because it's me, and I'm a masochist. It was already after 4pm at this point, and the weekly General Assembly Happy Hour was going to start at 5:30pm. We had to create a Tic Tac Toe game in the command line. The instructor showed us an example of the final product, and gave us instructions and told us to go forth. He also assured us that this was not something we were going to get done tonight, that we would need to work on it over the weekend as homework, and that none of his students had ever completed it in less than a day and a half.




I pulled out my notebook and was going to start strategizing when my classmate Shindo, who was sitting next to me, started talking to me about how to go about solving this. We started throwing ideas back and forth, and my brain was so fuzzy at this point that I was being very ineloquent, but we discussed what the proper course of action would be, and wrote some things down in the notebook as examples as we were talking through it, and then we started to code. We hadn't really said we were going to work together; it just kind of happened. This was my first time truly pair programming, and it was magical. I'm a believer now. We worked on it together, letter by letter, talking through everything, typing in the same code, and keeping each other in check.




[caption id="" align="aligncenter" width="640"][![General Assembly Happy Hour](http://farm3.staticflickr.com/2809/9989574333_f2ee8868d8_z.jpg)](http://www.flickr.com/photos/amy_sloan/9989574333/) Happy Hour at GA from the viewpoint of the classroom we were in[/caption]


The result of this was that 30 minutes before Happy Hour started, we realized we were somehow accidentally almost done creating the game. It was at that point that we were like, "Holy f#@k! We might actually finish this tonight." We then became really motivated to plow on through. By the time Happy Hour started, we pretty much had the game working, but had some bugs to work out. We continued working on it for another hour and by the end we were having just this one small precise problem with our winning logic. It was having trouble with vertical columns, so we kept changing it and testing just the column, rinse repeat, and got really frustrated that it wasn't doing what it should have been. Finally I was like, "Okay, let's try this one last edit and then if this doesn't work I'm just going to Happy Hour." We ran it and as I hit the last key of the column and it acted the way it should we both cried out and hugged each other. It was an exhilarating moment, and there was no way that I would have gotten anywhere near completing it in that time if it weren't for Shindo.


https://twitter.com/ThatAmyMac/status/383769056269967360


We certainly wanted to make the game look nicer and more polished, but the point was that it worked, so we went out to celebrate. We excitedly told our instructor that we solved it, and he said, "Okay, now I want you to do this with it..." and it was something we had already done. We made it bulletproof, yo! All the cheese was gone by the time I joined the party, but breaking records was far more satisfying. I managed to get the last cup of white wine and excitedly socialized with my classmates. While talking to some of the Camels it ended up turning out that another classmate had finished the Tic Tac Toe game before we did, but he was really quiet about it. However, that classmate has a Computer Science degree. So while we may only actually be 2nd best, we're still the first beginners to solve it that quickly, so I'm still proud!





## Thoughts and Reflections


After waiting so long to be able to do this, I can't believe that the first week is already over. We have 11 more weeks to go, and it may seem like a long time, but I think they'll go by quickly. By the end of the week I was exhausted, but I was able to easily get out of bed every day because I had something to look forward to, and every morning I woke up immediately wanting to get back on my computer and make my code better.



	
  * I am solving problems faster than I was at the beginning of the week.

	
  * I already feel much more solid, as a programmer, than I did at the beginning of the week.

	
  * My husband is probably already tired of hearing me enthusiastically talk about new Ruby methods that I learned that day.

	
  * I'm really glad that this is the bootcamp that I ended up in, and not the others I applied to, for numerous reasons.

	
  * When given access to unlimited coffee, I will drink it all.

	
  * I've made some friends and had great discussions with them.

	
  * I'm happier than I've ever been in my life.


I can't wait to see what next week will bring.
