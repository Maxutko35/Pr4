let MyImg = document.querySelector('img');

MyImg.onclick = function() {
    let MySrc= MyImg.getAttribute('src');
    if(MySrc === 'mitsubishi.png') {
        MyImg.setAttribute ('src', 'lancer.png');
    } else {
        MyImg.setAttribute ('src', 'mitsubishi.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
