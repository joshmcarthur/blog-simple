#!/usr/bin/env ruby
# make
# It just reads my markdown posts, and turns them into a JSON file
# that I can serve. Neat!

begin
  require 'English'
  require 'multi_json'
  require 'redcarpet'
  require 'json'
  require 'yaml'
  require 'fileutils'
rescue LoadError
  puts "Missing multi_json or redcarpet gem - install with gem install multi_json"
  exit
end

# Post
# A post has data, and content
# The data is things like title, tags etc.
# The content is straight markdown content
class Post
  attr_accessor :data
  attr_accessor :title
  attr_accessor :date
  attr_accessor :id
  attr_accessor :content
  attr_accessor :file

  def initialize(file)
    self.file = file
    self.read_yaml
    self.title = self.data['title']
    self.date = self.data['date']

    # Thanks to the lovely folks at
    # http://stackoverflow.com/questions/4308377/ruby-post-title-to-slug
    self.id = self.title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '') if self.title
  end


  # Return a JSON representation of the
  # Post object
  def to_json(*a)
    {
      :title => self.title,
      :id => self.id,
      :date => self.date,
      :content => self.content
    }.to_json(*a)
  end

  # Read the YAML frontmatter. - from Jekyll
  # https://github.com/mojombo/jekyll/blob/master/lib/jekyll/convertible.rb
  #
  # base - The String path to the dir containing the file.
  # name - The String filename of the file.
  #
  # Returns nothing.
  def read_yaml
    self.content = File.read(self.file)

    begin
      if self.content =~ /^(---\s*\n.*?\n?)^(---\s*$\n?)/m
        self.content = Redcarpet::Markdown.new(
          Redcarpet::Render::HTML,
          :autolink => true,
          :fenced_code_blocks => true
        ).render($POSTMATCH)
        self.data = YAML.load($1)
      end
    rescue => e
      puts "YAML Exception reading #{self.file}: #{e.message}"
    end

    self.data ||= {}
  end
end


desc "Compile markdown posts into HTML inside a JSON file"
task :compile do
  posts = []
  posts_folder = "./posts"
  output_file = "./posts.json"
  Dir[File.join(posts_folder, "*.markdown")].each do |post|
    posts << Post.new(post)
  end

  FileUtils.rm(output_file) if File.exists?(output_file)
  File.open(output_file, 'wb') do |file|
    file << posts.to_json
  end

  puts "Compiled #{posts.length} markdown files into #{output_file}!"
end

task :default => [:compile]



