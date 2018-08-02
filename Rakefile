# require 'rubygems'
# require 'rake'
# require 'rdoc'
# require 'date'
# require 'yaml'
# require 'tmpdir'
# require 'jekyll'
#
# desc "Generate blog files"
# task :generate do
#   Jekyll::Site.new(Jekyll.configuration({
#     "source"      => ".",
#     "destination" => "_site"
#   })).process
# end
#
#
# desc "Generate and publish blog to master"
# task :publish => [:generate] do
#   Dir.mktmpdir do |tmp|
#     system "mv _site/* #{tmp}"
#     system "git checkout master"
#     system "rm -rf *"
#     system "mv #{tmp}/* ."
#     message = "Site updated at #{Time.now.utc}"
#     system "git add ."
#     system "git commit -am #{message.shellescape}"
#     system "git push origin"
#     system "git checkout source"
#     system "echo yolo"
#   end
# end

# task :default => :publish

#require "reduce"

# Courtesy of https://github.com/pacbard/blog/blob/master/_rake/minify.rake
# desc "Minify _site/"
# task :minify do
#   puts "\n## Compressing static assets"
#   original = 0.0
#   compressed = 0
#   Dir.glob("_site/**/*.*") do |file|
#     case File.extname(file)
#       when ".css", ".gif", ".html", ".jpg", ".jpeg", ".js", ".png", ".xml"
#         puts "Processing: #{file}"
#         original += File.size(file).to_f
#         min = Reduce.reduce(file)
#         File.open(file, "w") do |f|
#           f.write(min)
#         end
#         compressed += File.size(file)
#       else
#         puts "Skipping: #{file}"
#       end
#   end
#   puts "Total compression %0.2f\%" % (((original-compressed)/original)*100)
# end

# desc "Recompile Sass"
# task :recompile_sass do
#   puts "\n## Forcing Sass to recompile"
#   status = system("touch -m assets/scss/styles.scss")
#   puts status ? "Success" : "Failed"
# end

namespace :build do
  # desc "Build _site/ for development"
  # task :dev => :recompile_sass do
  #   puts "\n##  Starting Jekyll and recompiling Sass with source map"
  #   pids = [
  #     spawn("sass --sourcemap --watch assets/scss/styles.scss:assets/css/styles.css"),
  #     spawn("jekyll serve -w")
  #   ]
  #
  #   trap "INT" do
  #     Process.kill "INT", *pids
  #     exit 1
  #   end
  #
  #   loop do
  #     sleep 1
  #   end
  # end

  desc "Build _site/ for production"
  task :pro => :recompile_sass do
    puts "\n## Compiling Sass"
    status = system("sass --style compressed assets/scss/styles.scss:assets/css/styles.css")
    puts status ? "Success" : "Failed"
    puts "\n## Building Jekyll to _site/"
    status = system("jekyll build")
    puts status ? "Success" : "Failed"
    Rake::Task["minify"].invoke
    puts "\n## Deleting Sass source map"
    status = system("rm -f _site/assets/css/*.map")
    puts status ? "Success" : "Failed"
  end
end

desc "Copy life blog"
task :copy_life do
  puts "\n## Copying life directory to new _site directory"
  status = system("cp -R life/_site/life _site/")
  puts status ? "Success" :"Failed"
end

desc "Commit _site/"
task :commit do
  puts "\n## Staging modified files"
  status = system("git add -A")
  puts status ? "Success" : "Failed"
  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Updated site at #{Time.now.utc}"
  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing commits to remote"
  status = system("git push origin source")
  puts status ? "Success" : "Failed"
end

desc "Deploy _site/ to master branch"
task :deploy do
  puts "\n## Deleting master branch"
  status = system("git branch -D master")
  puts status ? "Success" : "Failed"
  puts "\n## Creating new master branch and switching to it"
  status = system("git checkout -b master")
  puts status ? "Success" : "Failed"
  puts "\n## Forcing the _site subdirectory to be project root"
  status = system("git filter-branch --subdirectory-filter _site/ -f")
  puts status ? "Success" : "Failed"
  puts "\n## Switching back to source branch"
  status = system("git checkout source")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing all branches to origin"
  status = system("git push --all origin")
  puts status ? "Success" : "Failed"
end

desc "Commit and deploy _site/"
task :commit_deploy => [:copy_life, :commit, :deploy] do
end
