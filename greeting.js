function greetingpost() {
  var person = prompt("Please enter your name");
  var date = new Date();
  var hour = date.getHours();

  if (hour >= 0 && hour < 12) {
    text = "Good Morning!";
  }
  if (hour >= 12 && hour < 18) {
    text = "Good Afternoon!";
  }
  if (hour >= 18 && hour < 24) {
    text = "Good Evening!";
  }

  if (person != null) {
    document.getElementById("example").innerHTML =
      "Hello " + person + "! " + text;
  }
}
