#lUpdate = () ->
#lUpdate()

btn = document.getElementById("genBtn")
field = document.getElementById("colorField")
themeSlot = document.getElementById("theme_slot")

makeColorStr = (color) ->
  "/theme.css?style=nested&color=#{color}"

updateTheme = () ->
  color = field.value
  page = makeColorStr(color)
  theme_slot.href = page

theme_slot.href = makeColorStr "2C75A0"
#theme_slot.href = "/theme.css?style=nested&amp;color=2C75A0"
btn.addEventListener("click", updateTheme)
