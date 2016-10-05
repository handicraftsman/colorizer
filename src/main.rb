require "sinatra"
require "sass"

ENV["PORT"] = "8080"

set :public_folder, File.dirname(__FILE__) + '../public'
set :bind, "0.0.0.0"
pName = "Colorizer"
$rColor = Sass::Script::Value::Color.from_hex("#ffffff")
$rPrefix = Sass::Script::Value::String.new("")
$rNWhite = Sass::Script::Value::Bool.new(true)

module Sass::Script::Functions
  def iColor()
    assert_type $rColor, :Color
    $rColor
  end

  def iPrefix()
    assert_type $rPrefix, :String
    $rPrefix
  end

  def iNormalWhite()
    assert_type $rNWhite, :Bool
    $rNWhite
  end
end

configure do
  set :protection, except: [:frame_options]
end

get "/" do
  erb :main, :locals => {:pName => pName}
end

get "/old.html" do
  erb :old, :locals => {:pName => pName}
end

get "/main.css" do
  scss :main
end

get "/main.js" do
  coffee :main
end

get "/jquery.js" do
  send_file "jquery.js"
end

get "/theme.css" do
  cache_control :public, :max_age => 1
  if params["color"] == nil then
    $rColor = Sass::Script::Value::Color.from_hex(("#ffffff"))
  else
    $rColor = Sass::Script::Value::Color.from_hex(("#" + params["color"]).downcase)
  end

  if params["style"] == nil then
    lStyle = :compressed
  elsif params["style"] == "compressed" then
    lStyle = :compressed
  elsif params["style"] == "nested" then
    lStyle = :nested
  elsif params["style"] == "expanded" then
    lStyle = :expanded
  elsif params["style"] == "compact" then
    lStyle = :compact
  else
    lStyle = :compressed
  end

  if params["prefix"] == nil then
    $rPrefix = Sass::Script::Value::String.new("color")
  else
    $rPrefix = Sass::Script::Value::String.new(params["prefix"])
  end

  if params["nwhite"] == nil then
    $rNWhite = Sass::Script::Value::Bool.new(true)
  else
    $rNWhite = Sass::Script::Value::Bool.new(false)
  end

  scss :theme, :style => lStyle
end
