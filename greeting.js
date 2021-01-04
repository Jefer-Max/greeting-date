var person = prompt("Please enter your name");

function greetingPost() {
  var date = new Date();
  var hour = date.getHours();

  if (hour >= 0 && hour < 12) {
    text = "Good Morning";
  }
  if (hour >= 12 && hour < 18) {
    text = "Good Afternoon";
  }
  if (hour >= 18 && hour < 24) {
    text = "Good Evening";
  }

  if (person != null) {
    document.getElementById("example").innerHTML =
      "Hello " + person + "! " + text;
  }
}

function myFunction() {
  var hoursett = prompt("Please enter your range number from 0 to 24");

  if (hoursett >= 0 && hoursett < 12) {
    textsetting = "Good Morning";
  }

  if (hoursett >= 12 && hoursett < 18) {
    textsetting = "Good Afternoon";
  }

  if (hoursett >= 18 && hoursett < 24) {
    textsetting = "Good Evening";
  }

  if (hoursett < 0 || hoursett > 24) {
    alert("try again");
  } else {
    document.getElementById("demo").innerHTML =
      "Hello " + person + "! " + textsetting;
  }
}
