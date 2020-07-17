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

    // Display the result in element (thank you page large screens)
    document.getElementById("countDownTimer-ty").innerHTML = days + "days" + '<p class="mx-5 countdown">:</p>' + hours + "hours" +'<p class="mx-5 countdown">:</p>' + minutes + "minutes";

    // Display the result in element (thank you page smaller screens)
    document.getElementById("countDownTimer-ty-sm").innerHTML = days + "d : " + hours + "h : "
    + minutes + "m";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDownTimer").innerHTML = "We're Live Now!";
    }
  }, 1000);