function age() {
  // initial variables
  var d1 = document.getElementById("date").value;
  var m1 = document.getElementById("month").value;
  var y1 = document.getElementById("year").value;

  //receive time using Date function and convert to date, month, year
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // d1,m1,y1 are supposed to be the users birthday variables
  // d2,m2,y2 are supposed to be the current date variables
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  // this calculate the differences, to get ready to calculate the users age
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  // JS code to update HTML content on page with a text and variable values
  document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
