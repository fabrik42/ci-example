#!/usr/bin/env ruby

require 'fileutils'
require 'date'

destination_directory = 'dist'

[
  'calculator.js'
].each do |filename|
  FileUtils.cp(filename, destination_directory)
end

puts "Copied over all static assets!"

version_info = [
  DateTime.now.to_s,
  `git rev-parse --short HEAD`
].join('@')

content = File.read('index.html')
content.gsub!('{{version_info}}', version_info)
File.write("#{destination_directory}/index.html", content)

puts "Built dist version of Calculator"
