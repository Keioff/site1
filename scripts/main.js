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