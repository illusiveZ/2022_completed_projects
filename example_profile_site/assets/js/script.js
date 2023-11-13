"use strict";

// Sticky settings
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".sticky").addClass("nav-sticky");
  } else {
    $(".sticky").removeClass("nav-sticky");
  }
});

// Smooth Link
$(".nav-item a, .mouse-down a").on("click", function (e) {
  const $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 0,
      },
      1500,
      "easeInOutExpo"
    );
  e.preventDefault;
});

// Scroll Spy - Switches which part of the page is 'active'
// i.e if on 'About' section, 'About' will show as active in the menu
$(".navbar-nav").scrollspy({
  offset: 70,
});

// Sticky Button
$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".nav-btn").addClass("active");
  } else {
    $("nav-btn").removeClass("active");
  }
});

// Contact Form
const validateForm = function () {
  const name = document.forms["myForm"]["name"].value;
  const email = document.forms["myForm"]["email"].value;
  const subject = document.forms["myForm"]["subject"].value;
  const comments = document.forms["myForm"]["comments"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById("error-msg").innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please Enter a Name*</div>";
    fadeIn();
    return false;
  }
  if (subject == "" || subject == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please Enter a Subject*</div>";
    fadeIn();
    return false;
  }
  if (comments == "" || comments == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please Enter a Comment*</div>";
    fadeIn();
    return false;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("simple.msg").innerHTML = this.responseText;
      document.forms["myForm"]["name"].value = "";
      document.forms["myForm"]["email"].value = "";
      document.forms["myForm"]["subject"].value = "";
      document.forms["myForm"]["comments"].value = "";
    }
  };
  xhttp.open("POST", "assets/php/contact.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urelencoded");
  xhttp.send(
    "name=" + name + "&email=" + "&subject=" + subject + "&comments" + comments
  );
  return false;
};

function fadeIn() {
  let fade = document.getElementById("error-msg");
  let opacity = 0;
  let intervalID = setInterval(() => {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}

const textWrapper = document.querySelector(".hero-title .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".hero-title .letter",
    rotateY: [-90, 0],
    duration: 1500,
    delay: (el, i) => 45 * i,
  })
  .add({
    targets: ".hero-title",
    opacity: 0,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 500,
  });
