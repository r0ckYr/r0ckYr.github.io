var i = 0, j = 0, k = 0, a = 0;
var txt = "Hi There,"; /* The text */
var txt2 = "I'm Rakshit Rautela"; /* The text */
var summaryText = "I AM Into ";
var sLen = summaryText.length;
var interests = ["Web Development  ", "Java Software Development  ", "Python Software Development  "]
var speed = 100; /* The speed/duration of the effect in milliseconds */
var speed2 = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("nameText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else
    typeWriter2();
}

function typeWriter2() {
  if (a < txt2.length) {
    document.getElementById("nameText2").innerHTML += txt2.charAt(a);
    a++;
    setTimeout(typeWriter2, speed);
  }
  else
    summaryWriter(interests[1]);
}

function summaryWriter() {
  mySummary = document.getElementById("mySummary");
  newText = summaryText + interests[0];
  if (j < newText.length) {
    document.getElementById("mySummary").innerHTML += newText.charAt(j);
    j++;
    setTimeout(summaryWriter, speed2);
  }
  else {
    removeText(interests[k].length);
  }

}

function removeText(len) {
  mySummary = document.getElementById("mySummary");
  document.getElementById("mySummary").innerHTML = document.getElementById("mySummary").innerHTML.slice(0, document.getElementById("mySummary").innerHTML.length-1);
  var iLen = mySummary.innerHTML.length;
  if (len > 1) {
    document.getElementById("mySummary").innerHTML = document.getElementById("mySummary").innerHTML.slice(0, iLen - 1);
    document.getElementById("mySummary").innerHTML = document.getElementById("mySummary").innerHTML + "|";
    len--;
    setTimeout(removeText, speed2, len);
  }
  else {
    if (k == 2)
      k = 0;
    else 
      k = k+1;
    updateSummary(k, 0);
  }
}

function updateSummary(k, _) {
  mySummary = document.getElementById("mySummary");
  newText = interests[k];

  if (_ < newText.length-1) {
    if(mySummary.innerHTML.charAt(mySummary.innerHTML.length-1)=='|')
    document.getElementById("mySummary").innerHTML = document.getElementById("mySummary").innerHTML.slice(0, document.getElementById("mySummary").innerHTML.length-1);
    document.getElementById("mySummary").innerHTML += newText.charAt(_);
    document.getElementById("mySummary").innerHTML += "|";
    console.log(document.getElementById("mySummary").innerHTML);
    _++;
    setTimeout(updateSummary, speed2, k, _);
  }
  else {
    removeText(interests[k].length);
  }
}
