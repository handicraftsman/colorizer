require "sinatra"
require "sass"

set :public_folder, File.dirname(__FILE__) + '../public'
set :port, 8080
pName = "Colorizer"
$rColor = Sass::Script::Value::Color.from_hex("#ffffff")

module Sass::Script::Functions
  def iColor()
    assert_type $rColor, :Color
    $rColor
  end
end

get "/" do
  erb :main, :locals => {:pName => pName}
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
  end

  scss :theme, :style => lStyle
end
