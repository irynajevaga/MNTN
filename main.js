$(function () {
  var header = $("header"),
    yOffset = 0,
    triggerPoint = 150;
  $(window).scroll(function () {
    yOffset = $(window).scrollTop();

    if (yOffset >= triggerPoint) {
      header.addClass("minimized");
    } else {
      header.removeClass("minimized");
    }
  });
});
