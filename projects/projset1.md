#Projects related to DOM
##project link
[Click herre](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solutin Code

##project1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;  
      default:
        break;
    }
  });
});
```

##project 2
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(bmi<18.6){
      results.innerHTML = `<span>${bmi}</span> \n You are underweight`;
    }
    else if(bmi<24.9){
      results.innerHTML = `<span>${bmi}</span> \n Your BMI is in Normal Range`
    }
    else{
      results.innerHTML = `<span>${bmi}</span> \n You are overweight`
    }
    
  }
});
```
##project 3
```javascript
const clock = document.querySelector('#clock');
//function to continuously run the clock on screen without refreshing
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

##project 4
```javascript
let randomNumber = Math.floor(Math.random() * 10 + 1);
const submit = document.querySelector('#subt');
const user_input = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

//to check if we can play game
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const User_input_val = parseInt(user_input.value);
    validateGuess(User_input_val);
  });
}
function validateGuess(guess) {
  //validate guessed number
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over,Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check number is correct high or low
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  // to update prev ,remaining slots etc
  user_input.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //to interact with DOM
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  user_input.value = '';
  user_input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start New</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    user_input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```