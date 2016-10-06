#lUpdate = () ->
#lUpdate()

btn = document.getElementById("genBtn")
sbtn = document.getElementById("sampBtn")
field = document.getElementById("colorField")
themeSlot = document.getElementById("themeSlot")

makeColorStr = (color, style) ->
  "/theme.css?color=#{color}&style=#{style}"

updateTheme = () ->
  color = field.value
  page = makeColorStr color, "compressed"
  themeSlot.href = page

themeSlot.href = makeColorStr "2C75A0", "compressed"

btn.addEventListener "click", updateTheme
sbtn.addEventListener "click", () ->
  themeSlot.href = makeColorStr "2C75A0", "compressed"
