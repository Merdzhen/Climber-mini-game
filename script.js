let climber = document.getElementById('climber-img');
let flag = document.getElementById('flag-img');
let checkpoints = [
  {left: '170px', bottom: '30px'},
  {left: '245px', bottom: '110px'},
  {left: '305px', bottom: '180px'},
  {left: '420px', bottom: '190px'},
  {left: '510px', bottom: '230px'},
  {left: '590px', bottom: '305px'},
];

let counter = 0;
let maxCount = (checkpoints.length - 1) * 100;
const counterUp = () => {
  if (counter < maxCount) {
    return counter += 100;
  } else {
    return counter;
  }
};

const counterDown = () => {
  if (counter > 0) {
    return counter -= 100;
  } else {
    return counter;
  }
};

const showFlag = () => {
  if (counter === maxCount) {
    flag.style.visibility = 'visible';
  } else {
    flag.style.visibility = 'hidden';
  }
};

const showScore = () => {
  if (counter === maxCount) {
    scoreAlert.textContent = 
    `You won! Score is: ${counter}`;
  } else {
    scoreAlert.textContent = `Your current score is: ${counter}`;
  }
};

let descriptionField = document.querySelector('.description');
let scoreAlert = document.createElement('div');
scoreAlert.textContent = `Your current score is: ${counter}`;
scoreAlert.style.fontSize = '22px';
scoreAlert.style.textAlign = 'center';
scoreAlert.style.fontWeight = 'bold';
descriptionField.append(scoreAlert);


document.addEventListener('keydown', function(event) {
  
  if (event.code === 'KeyX') {
    counterUp();
    showFlag();
    showScore();
    climber.style.left = checkpoints[counter/100].left;
    climber.style.bottom = checkpoints[counter/100].bottom;
   

  } else if (event.code === 'KeyZ') {
    counterDown();
    showFlag();
    showScore();
    climber.style.left = checkpoints[counter/100].left;
    climber.style.bottom = checkpoints[counter/100].bottom;

  }
});
