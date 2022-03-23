#!/usr/bin/env ruby

require 'date'

version_info = [
    DateTime.now.to_s,
    `git rev-parse --short HEAD`
].join('@')

content = File.read('index.html')
content.gsub!('{{version_info}}', version_info)
File.write('build/index.html', content)
