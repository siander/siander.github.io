


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/zebra.jpg') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/zebra.jpg');
    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');



function setUserName () {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hey " + myName + ", it's the Cool Zebra!";
}



if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Hey " + storedName + ", it's the Cool Zebra!";
}



myButton.onclick = function() {
  setUserName();
}

