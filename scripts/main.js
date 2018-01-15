/* var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/rani.png') {
		myImage.setAttribute ('src','images/rani2.png');
	} else {
		myImage.setAttribute ('src','images/rani.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to this site, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to this site, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
