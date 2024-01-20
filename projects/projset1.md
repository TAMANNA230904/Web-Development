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