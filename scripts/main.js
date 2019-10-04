let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/muna.jpg') {
        myImage.setAttribute ('src','images/munapro.jpg');
    } else {
      myImage.setAttribute ('src','images/muna.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName || myName === null) {
        setUserName();
    }else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello Reader,' + myName;
    myHeading.innerHTML = 'Hello Reader,' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello Reader, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}




