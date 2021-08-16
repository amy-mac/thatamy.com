---
date: 2018-08-17 13:55:00-07:00
layout: post
title: "Project: Is Alameda Exploding?"
tags:
- Programming
- Projects
- Ruby
---

I live on the island of Alameda in the San Francisco Bay area. We are bordered on our east side by the Oakland Coliseum and our west side by AT&T Park just directly across the water 3 miles away. When there are fireworks in either of these places we can hear them, and sometimes see them. On holidays we hear all the surrounding fireworks. We also get Blue Angels flying over and so on.

<figure>
  <a class="th" href="{{site.url}}/images/alameda-island.jpg" title="Larger image of map of Alameda">
    <img src="{{site.url}}/images/alameda-island.jpg" alt="Map of Alameda" />
  </a>
  <figcaption>Map showing Alameda and its surroundings</figcaption>
</figure>

In short, we're used to hearing noises, and I usually turn to my husband and say, "Must be sportsball" and shrug. But a week and a half ago as we were hearing all kinds of fireworks, my husband said, "I wish there was just a site I could go to in order to verify why I'm hearing fireworks." (It was the A's winning a game.) Which in turn made me think of the site "Is Oakland on Fire?" and thought it'd be fun to make something simple like that.

So this week I decided to quickly bang something out and got really excited to actually be working on a personal coding project for once, since I tend to not have a lot of time for my own.

## Holidays

I figured Sinatra would be perfect to quickly get something up and running since it's only a one page site, and then started out by looking into any plugins or API's that would easily give me a list of holidays. Since I really only care about the ones that have fireworks, I could have hard coded the information but really wanted the site to be as automated and easily maintainable as possible. I ended up finding <a href="https://github.com/holidays/holidays" target="_blank">this Holidays Ruby gem</a> which was perfect for what I needed. It makes it easy to also check if there are any fireworks holidays that week, since for Independence Day we tend to hear things in the days before and after, even though they're technically illegal.

{% highlight ruby %}
FIREWORK_HOLIDAYS = [
  "Independence Day",
  "New Year's Eve",
  "Lunar New Year's Day",
  "The second day of Lunar New Year",
  "The third day of Lunar New Year"
].freeze

def check_holidays
  logger.info "Checking Holidays"
  today = Date.today
  holidays = Holidays.on(today, :us, :hk)

  # Might be the week of Independence Day, etc
  if holidays.empty? && Holidays.any_holidays_during_work_week?(today)
    holidays = Holidays.next_holidays(1, [:us, :hk])
  end

  # We only care about the holidays that might have explosions
  holidays.map { |holiday| holiday[:name] }.detect { |hol| FIREWORK_HOLIDAYS.include?(hol) }
end
{% endhighlight %}

There might be some additional holidays to add, but I'm going to wait to expand it. Also since holidays don't regularly change, I will be adding caching soon.

## Sports
Then I figured the most heavy duty part was going to be finding the information about the sports games. I assumed I was going to need to use web scraping to get the information and started setting up <a href="http://www.nokogiri.org/" target="_blank">Nokogiri</a> and <a href="https://github.com/jnunemaker/httparty" target="_blank">HTTParty</a>. I quickly realized, however, that all the websites I wanted information from use JavaScript to load the information in after the initial page load. I haven't done much web scraping before and did some research about how to address this and quickly came across <a href="https://gohighbrow.com/scraping-javascript-heavy-websites/" target="_blank">this page</a> that mentions just accessing the urls that are bringing in the information, since JavaScript is usually accessing JSON anyway before manipulating it on the front-end. Of course I read this and went, "Oh duh, that's way more straightforward."

So I found the behind the scenes URL's on all the sports sites and ditched Nokogiri, since it was completely unnecessary, and just started looking through all the JSON being returned to find the information that I needed for my purposes.

{% highlight ruby %}
class Scraper
  attr_accessor :check_for_games

  ...

  def grab_page_info(team)
    case team
    when "Athletics"
      HTTParty.get(baseball_url("531221"))
    when "Giants"
      HTTParty.get(baseball_url("531220"))
    when "Warriors"
      HTTParty.get(basketball_url)
    end
  end

  def winning_baseball_game?(response)
    response = response["dates"].first

    home_game = response["date"] == simple_date && VENUE_NAMES.include?(response["games"][0]["venue"]["name"])

    return false unless home_game

    night_game = response["games"].first["dayNight"] == "night"
    is_winner = response["games"].first["teams"]["home"]["isWinner"]

    home_game && night_game && is_winner
  end

  def check_for_games
    games ||= []

    SPORTS_TEAMS.each do |team|
      puts "Checking site for #{team}"

      response = grab_page_info(team)
      return unless response.code == 200

      if team == "Warriors"
        home_game = response["games"].detect do |game|
          game["home"] == true && game["date"] == simple_date
        end

        games << team unless home_game.nil?
      else
        games << team if winning_baseball_game?(response)
      end
    end

    games
  end
end
{% endhighlight %}

And that was basically it. I put it up on Heroku and then started fiddling with it to make it faster. I ended up adding IronCache to store the results after the JSON had been retrieved and parsed, which was the biggest bottleneck.

## Summary
It's a bit of a frivilous project, but it was fun. Here are some of the variations of what you might see.

<figure>
  <img src="{{site.url}}/images/alameda_exploding1.jpg" alt="No idea, it's either in your head or it could be Armageddon">
  <img src="{{site.url}}/images/alameda_exploding2.jpg" alt="Probably because it's Independence Day">
  <img src="{{site.url}}/images/alameda_exploding3.jpg" alt="The Giants are playing tonight and just won">
</figure>

In the future I will probably add some checks for whether it's Fleet Week, and other such loud disturbances to expand it. Hope the Alamedans enjoy it! You can check out the <a href="http://isalamedaexploding.com">live site</a> or view the <a href="https://github.com/amy-mac/alameda_exploding">project on Github</a>.
