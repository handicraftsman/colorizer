function genThemeUrl(color, prefix, outStyle, themeStyle, correction) {
  var url = "/theme.css" +
    "?color=" + color +
    "&prefix=" + prefix +
    "&style=" + outStyle +
    "&theme=" + themeStyle +
    "&correction=" + correction;
  return url;
};

function getColor() {
  return $("#colField").val();
};

function getPrefix() {
  return $("#prefixField").val();
};

function getOutStyle() {
  return $("input[name=outStyleSelector]:checked").attr("value");
};

function getThemeStyle() {
  return $("input[name=themeStyleSelector]:checked").attr("value");
};

function getColorCorrection() {
  return $("input[name=correctionSelector]:checked").attr("value");
};

function setOutUrl(input) {
  $("#themeUrlSlot").val(input);
};

function prepColorDemo() {
  var str = $("#cdemo").html();
  var res = str.replace(/\$prefix/g, "<span class='cdemoprefix'>color</span>");
  $("#cdemo").html(res);
};

function updColorDemo(input) {
  $(".cdemoprefix").html(input);
};

function genSampleTheme() {
  var url = genThemeUrl("2C75A0", "color", "compressed", "dark");
  $("#themeSlot").attr({
    "href": url
  });
  setOutUrl(outUrl = genThemeUrl(getColor(), getPrefix(), getOutStyle(), getThemeStyle(), getColorCorrection()));
  updColorDemo(getPrefix());
  $("#colField").val("2C75A0");
};

$(document).ready(function() {
  prepColorDemo();

  $("#genBtn").click(function() {
    var url = genThemeUrl(getColor(), "color", getOutStyle(), getThemeStyle(), getColorCorrection());
    $("#themeSlot").attr({
      "href": url
    });
    setOutUrl(outUrl = genThemeUrl(getColor(), getPrefix(), getOutStyle(), getThemeStyle(), getColorCorrection()));
    updColorDemo(getPrefix());
  });

  $("#sampBtn").click(function() {
    genSampleTheme();
  });

  genSampleTheme();
});
