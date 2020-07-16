// Countdown date
  var countDownDate = new Date("Aug 20, 2020 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in element (large screens)
    document.getElementById("countDownTimer").innerHTML = days + '<p class="mx-5"></p>' + hours + '<p class="mx-5"></p>' + minutes;

    // Display the result in element (smaller screens)
    document.getElementById("countDownTimer-sm").innerHTML = days + "d : " + hours + "h : "
    + minutes + "m";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDownTimer").innerHTML = "We're Live Now!";
    }
  }, 1000);


// customScripts
    document.addEventListener('DOMContentLoaded', function() {
    // Flickity Slider
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      contain: true,
      autoPlay: true,
      autoPlay: 3000,
      fullscreen: true
    });

    // Animate on Scroll
    AOS.init({
      mirror: false
    });
  
    }, false);

    //section 6 bg elements animation
    var moveDiv = document.getElementById('mover');
    var rightPulse = document.getElementById('rightPulse');
    var leftPulse = document.getElementById('leftPulse');
    var spinDiv = document.getElementById('spin');
    var spin2Div = document.getElementById('spin2');
    var logoPulse = document.getElementById('logo');

    //mouse enter animation
    document.getElementById("access").addEventListener("mouseenter", function(event) {
      mouseEnter(event);
    });

    function mouseEnter(e) {
      moveDiv.style.animation = 'mover 0.3s infinite alternate';
      rightPulse.style.animation = 'rpulse 0.5s infinite alternate';
      leftPulse.style.animation = 'lpulse 0.5s infinite alternate';
      spinDiv.style.animation = 'spin 2s infinite linear';
      spin2Div.style.animation = 'spin 1s infinite linear';
      logoPulse.style.animation = 'logopulse 0.6s infinite alternate';
    }

    //mouse leave animation
    document.getElementById("access").addEventListener("mouseleave", function(event) {
      mouseLeave(event);
    });

    function mouseLeave(e) {
      moveDiv.style.animation = 'none';
      rightPulse.style.animation = 'none';
      leftPulse.style.animation = 'none';
      spinDiv.style.animation = 'none';
      spin2Div.style.animation = 'none';
    }