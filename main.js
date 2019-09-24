document.querySelector('#company').innerHTML = "Al's Sports Lounge"; //dynamically set text using js
document.querySelector('header > h2').innerText = 'Sports Lounge and Deli' 

let username = prompt('What is your name?');

let message = `Hello ${username}, welcome to our sports lounge. Browse our menu to prepare for kickoff. `

document.querySelector('#greeting').innerText = message;