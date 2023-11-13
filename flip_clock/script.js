let mySecond, myMinute, myHour;

function flipNumber(el, newNumber) {
  const thisTop = el.find(".top").clone();
  const thisBottom = el.find(".bottom").clone();
  thisTop.addClass("new");
  thisBottom.addClass("new");
  thisBottom.find(".text").text(newNumber);
  el.find(".top").after(thisTop);
  el.find(".top.new").append(thisBottom);
  el.addClass("flipping");
  el.find(".top:not(.new)").find(".text").text(newNumber);
  setTimeout(function () {
    el.find(".bottom:not(.new)").find(".text").text(newNumber);
  }, 500);
}

const setTime = function () {
  $(".flip").removeClass("flipping");
  $(".flip .new").remove();
  let date = new Date();
  let seconds = date.getSeconds().toString();
  if (seconds.length == 1) {
    seconds = "0" + seconds;
  }

  let minutes = date.getMinutes().toString();
  if (minutes.length == 1) {
    minutes = "0" + minutes;
  }

  let hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }
  hour = hour.toString();
  if (hour.length == 1) {
    hour = "0" + hour;
  }
  if ($(myHour[0]).text() !== hour) {
    flipNumber($(myHour[0]).closest(".flip"), hour);
  }
  if ($(myMinute[0]).text() !== minutes) {
    flipNumber($(myMinute[0]).closest(".flip"), minutes);
  }
  if ($(mySecond[0]).text() !== seconds) {
    flipNumber($(mySecond[0]).closest(".flip"), seconds);
  }
  setTimeout(() => {
    setTime();
  }, 500);
};

$(function () {
  myHour = $(".clock .flip:nth-child(1) div:not(.new) .text");
  myMinute = $(".clock .flip:nth-child(2) div:not(.new) .text");
  mySecond = $(".clock .flip:nth-child(3) div:not(.new) .text");
  setTime();
});
