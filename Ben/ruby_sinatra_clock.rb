require 'sinatra'
require 'erb'
require 'shotgun'

get '/' do
  erb :index
end

get '/clock' do
  erb :clock
end
