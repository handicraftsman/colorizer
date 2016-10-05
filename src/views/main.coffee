#lUpdate = () ->
#lUpdate()

btn = document.getElementById("genBtn")
sbtn = document.getElementById("sampBtn")
field = document.getElementById("colorField")
themeSlot = document.getElementById("theme_slot")

makeColorStr = (color) ->
  "/theme.css?color=#{color}"

updateTheme = () ->
  color = field.value
  page = makeColorStr(color)
  theme_slot.href = page

btn.addEventListener "click", updateTheme
sbtn.addEventListener "click", () ->
  theme_slot.href = makeColorStr "2C75A0"
