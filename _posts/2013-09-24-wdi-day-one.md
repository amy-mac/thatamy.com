---
layout: post
title: WDI Day One
categories:
- Education
- Technology
tags:
- General Assembly
- programming
- ruby
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  schema_item_name: ''
  schema_item_url: ''
  schema_rating: '0'
  _wpas_done_all: '1'
  _wpas_mess: WDI Day One http://wp.me/p3OZi7-nN
  _wpas_skip_4321122: '1'
---
Yesterday was the first day of class. I arrived out of breath and sweaty from my exertions of trying not be late on the first day. Normally this would not be an issue but for some reason all three public transit methods from Alameda were backed up today. It's the first time ever that I've seen the parking lot at the ferry terminal in Alameda completely full.

I was nervous about the first day, not knowing what to expect, and worrying that I'd be lost. This wasn't the case, and I was actually bored most of the day. I think I would have actually preferred the former, but the instructors have assured us that day 2 is going to move at a much faster pace. I was mainly concerned because everything they went over on Day 1 was easy stuff from the pre-work that everyone already knew, and yet the Camel class was way ahead of us.

What I did learn, however, was how to finally fork something on Github and submit a pull request. I've been using Github to track my own repos for the last 6 months, but I was a little intimated by trying to interact with other people's repos, so had never tried forking and pulling before. I also learned some useful commands for text editors that I didn't previously know, like using 'command-/' to comment out a bunch of text (or uncomment). I also learned the command to go to the end of the line 'ctrl-e' which is going to make my workflow so much faster. I should have looked up these shortcuts way sooner. Minor things, but at least the day wasn't a complete loss.

We were assigned homework, and the majority of it was so easy that I had it done before class even ended, but there were 2 problems that ended up taking me 3 hours to do. One of them was the evil prime number function that so many programming languages test you on. I know it's a common test, but I've always had trouble with it. Now of course, the dirt simple way to find all the primes from 1 - 100 in Ruby (which was the question) is to simply do this:
``` ruby
require 'Prime'

Prime(100).each do |x|
  puts x
end
```
Done. There you go. But I'm pretty sure they wanted us to do things the manual way and I struggled with it. I know what primes are, of course, but I ended up reading so much documentation on prime numbers and the different algorithms that mathematicians have come up with to find them, and I even looked up examples of what other people do to find prime numbers in Ruby (without the Prime class), but I still couldn't get their examples to work. In the end I ended up doing a really sloppy function that worked but I know is not ideal.

The last problem on the homework was something that one of our instructors said he actually got during an interview. We all struggled with it and were talking about it on HipChat late into the night. It took me an hour to solve it, and it works, but isn't the cleanest solution. I'll probably refactor it to make it better.

<strong>The problem:</strong>
<blockquote>9. Use a pattern and consolidate the amount of characters into a simplified string.

input pattern = "AAASSSDDDDRDDSASSDDDSSSAD"
output pattern = 3A3S4DR2DSA2S3D3SAD

If a character is represented more than once, append the number of occurrences in front of it. If a character is only represented once, just put that letter.

Hint: Use a loop to iterate over a string. You can reference characters in a string similar to an array.</blockquote>
<strong>My solution:</strong>
``` ruby
input = "AAASSSDDDDRDDSASSDDDSSSAD".split(//)
output = ''
char = 1
counter = 0

while counter < input.length
  input.each do |num|
    if input[counter] == input[counter+1]
      char += 1
    else
      output << char.to_s
      output << num
      char = 1
    end
    counter += 1
  end
  output = output.delete '1'
end

puts output
```
