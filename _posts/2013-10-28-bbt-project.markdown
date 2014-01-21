---
author: amy@amy-mac.com
comments: true
date: 2013-10-28 03:30:55+00:00
layout: post
slug: bbt-project
title: BestBeachToday Project
wordpress_id: 1590
categories:
- Projects
- Technology
tags:
- General Assembly
- programming
- Rails
excerpt: <p>The app that I first set out to create, and the one that I presented on Demo Day on Friday are different, because I really had to scale my vision down and just produce the MVP due to lack of time. I'd like to think of what I presented as a working prototype. I plan on making it lots better.</p>
share: true
---

<div class="text-center">

  <img src="{{site.url}}/images/2013/Voila_Capture56-612x370.jpg" alt="Index of BestBeachToday">

  <p>Splash Page</p>

</div>

The app that I first set out to create, and the one that I presented on Demo Day on Friday are different, because I really had to scale my vision down and just produce the MVP due to lack of time. I'd like to think of what I presented as a working prototype. I plan on making it lots better.


## What I Set Out to Create


A quick and easy way for people to find out the best beach to go to for spontaneous beach trips. At a glance they can see a list of beaches nearby, the current drive time based on traffic, weather forecast, etc. It might sound lame, but I came up with the idea because I spent hours trying to come up with something that would be useful that didn't exist already.

I tried to think about things that drove me nuts online, and I remembered that back when I had a lot more free time, I'd decide that I was going to spend a day at the beach, but when I'd get up in the morning to go, I'd end up spending over an hour just trying to figure out where to go. I'd have to go to 5 different websites to obtain driving information, weather forecasts, information about the beach itself, and if those didn't satisfy me, starting the search over. By the time I was finished I'd often lose motivation to go at all. I wish I would have had an idea that wasn't so frivolous, but as stated in last week's blog entry, I'm not good at ideas.

So my vision included finding all the beaches within 50 miles, showing current traffic, showing weather information, having a more detailed description of the beaches when you clicked on them, as well as amenities and pictures. There was going to be tags to filter by, since everyone has a different opinion of what makes a beach "the best."

I thought it'd be easy to just aggregate all this information into one place, but I learned a lot about API's this week and the limitations of them. After 3 or 4 days of having to switch out API's for different ones when one wouldn't be good enough, I realized I was going to have to just produce the MVP.


## First Obstacles
	
  1. Trying to get the JavaScript variables created by the HTML5 Geolocation function into the controller
    - And then getting them into the controller but not being able to display results on the page
  2. Not being able to get more than 20 results from Yelp
  3. Yelp not having descriptions for businesses
  4. Not being able to search for more than 25 miles away with Yelp
  5. Yelp only providing these tiny images for the business picture
  6. Yahoo weather information only providing limited data
  7. Not getting any of my Rspec tests to run; not to PASS, but to RUN. I think somewhere in the set-up process there was a hiccup.


## Solutions
	
  1. Transferred the JavaScript variables through an AJAX call to my controller action.
    - And then when that worked, but I could only get everything to display in the rails console and not get the front-end to re-route and show the results, and once it re-routed it no longer had the variables. I abandoned AJAX and settled on having 2 form input fields that the HTML5 Geolocation would automatically enter the information into, and then the user would have to press the "submit" button, which then got everything flowing properly through the proper CRUD actions in the controller. Why didn't I do this to begin with? I was trying to save my user from having to ever see the lat & lon and press a button.
  2. Problem not fully solved, there was no other API that could give me the list of beaches I'd need, so I had to grumpily say "Oh well" for now and hope that users wouldn't get mad that they didn't have ALL the options
  3. I looked into other API's but couldn't find anything that would give me the descriptions. I considered hand putting them into my database, but there wasn't time and that wouldn't be an ideal option since there are thousands of beaches in the world. In the end I filled the gap with the Yelp review excerpts. A temporary solution.
  4. Again, problem not solved, and I had to just settle on having my users given only the "top" options within 25 miles, as deemed worthy by Yelp. I'm looking for other solutions.
  5. I put the circular vignette on them to try and make them look nicer than these tiny pictures in a much larger container; another temporary solution.
  6. I replaced the Yahoo Weather API with the Weather Underground API
  7. I had to build my app without tests and I'm really unhappy about it, as I feel like this is definitely a project that would have benefited heavily from TDD. There wasn't enough time though to trouble shoot why Rspec wasn't working if I wanted to have something functioning by Friday. The venn diagram comes to mind that says you can only have 2 of these three things: good, fast, cheap.

## Second Obstacles
	
  1. Google Directions API only being able to show 10 results at a time
  2. Google Directions API not having CURRENT TRAFFIC, only regular drive time without traffic.
  3. Everyone in class getting blocked from using any kind of Google Maps API on a daily basis because we were all accessing it from the same IP address and they have a 2,500 per day rate limit
  4. The Flickr API not allowing general queries for photos. Everything you do has to be in regards to your own photos, collections, groups, etc.
  5. Weather Underground having an API rate limit of 10 calls per minute.
    - And then getting to the afternoon before Demo Day and realizing that only one person can use my site at a time and this would be a problem if my classmates tried to use it the next day


## Solutions

	
  1. For 1, 2, and 3, my solution was to just not use Google Maps. Since my MVP only needed current traffic time, and Google Maps didn't provide that, it didn't make any kind of sense to use their API. So I looked into a couple other options and ended up choosing the MapQuest API. I was an avid user of MapQuest for many years, and only stopped using them when they changed their UI to look more like Google Maps, which in their case, was not in their favor. I'm pleased to say that for what I needed, their API is vastly superior, and I knew no one else would be using it. So I implemented it and it was smooth sailing.
    - I do still think that Google Maps provides better overall directions, however, since they have such ease of use for bicyclists, pedestrians, and public transit, so instead of showing direction on my page with the Mapquest API, I just decided to provide a link to directions on Google Maps that already had the information filled in for the user. It's kind of better that way, anyway, because it keeps the page uncluttered.
  2. Much like with the directions link, I ended up providing a link to Flickr on the show pages that does the search for that beach for you, so that you can see pictures for it. This is a short-term solution. I plan to do something similar to what the Yahoo Weather app does, and start a group that people can add photos of beaches to, which can then be used as a gallery on the site.
  3. I begrudgingly reduced the amount of beach results from Yelp to 9, assuming that the user would only have a chance to click on one of them within the same minute, so that wouldn't go over the 10 calls a minute limit. This wasn't an ideal solution though, because if they immediately hit the back button, it would call those 9 results again.
    - I realized that the way I had it set up really only allowed for one user at a time. If multiple people were on the site at the same time, it would instantly go over the API calls limit on Weather Underground. I thought long and hard about just removing the current temperature from the results page, but I knew that if I did that it would defeat the purpose of the entire app, because you wouldn't be able to see the most important information at a glance. When I complained about my API limit on Twitter, one of my developer friends commented back, "_Cache all the things!_" I knew that wouldn't completely solve my problem, because it would only work for people who were searching in the exact same area. Even if someone in SF was searching and someone in Oakland was searching, they were going to get different results. However, the more I thought about it, I realized that for Demo Day, all I needed was for my classmates to be able to access at the same time; I wasn't going to mass advertise the link. So I set out the night before Demos to figure out how to cache the results page, and also the show pages, so that I wouldn't have to worry so much about people accessing the site. It took me until 1am to fully implement it, but it worked. Another short-term solution.


## Conclusion

The app still has a few bugs, but it's functioning fairly well. I fixed a few before heading to school on Friday, and I've made sure to log all of them in my Trello project to continue to fix when I can. I didn't get to style the pages as much as I wanted, since back-end was more important to get done. I also have a wishlist of items to make the site reach the completeness of my original vision. It ended up that I didn't have to stay up half the night implementing caching, because not a single person accessed my site during the school day, courtesy of Google Analytics. But I suppose it's not a total loss, because I was able to show it to a couple select friends on the weekend to start getting user feedback from people who are not me.

Honestly, I was very disappointed in the Demo Day process. I got stuck being one of the last people to go and they rushed through the last people so they could get to the celebrations early. I didn't get to talk much about my app and it felt so anti-climactic after the constant work I put into it for over a week. I get more emotional when I'm really tired, and I sat there wanting to cry. It was a rough day for me and I went home to rest. I was so insecure about my project to begin with, and I think the underwhelming response confirmed my fears. But I plan to stick with it, because I find it useful, so maybe someone else will too. Also, I did learn a lot about using API's and caching, so it was certainly worthwhile.

**Short term plans to make it more usable:**
	
  * Switch from using Yelp, to using Foursquare's API. I actually can't believe I didn't think of this sooner, since I use Foursquare every day. Foursquare has categories and I checked out their API and they provide much better access than Yelp's.
  * Find another weather API that allows for more calls per minute. I love Weather Underground, but I cannot afford to pay $150/month to get better access.
  * Refactoring! It's kind of a mess right now because of the rush.


I wish I could provide the link to actually share the project with all of this background, but it would create the potential for me to go over my limit, so until I switch over the weather API the [github link](https://github.com/amy-mac/best_beach) is all I can provide, but I will be sure to update this once I change the weather API, which is top priority.


<ul class="small-block-grid-2">
  <li><a class="th" href="{{site.url}}/images/2013/Voila_Capture55.jpg">
  <img src="{{site.url}}/images/2013/Voila_Capture55.jpg" alt="Show Page">
</a></li>
  <li><a class="th" href="{{site.url}}/images/2013/Voila_Capture57.jpg">
  <img src="{{site.url}}/images/2013/Voila_Capture57.jpg" alt="Results Page">
</a></li>
</ul>