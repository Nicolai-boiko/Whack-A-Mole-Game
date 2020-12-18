const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;
  let save = document.getElementById('save');
  let hiddenButton = document.getElementById('hiddenButton');


  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
          return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
  }

  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));


  function setScore (e) {
      let yourName = prompt('Введите свое имя', 'Nick');
        localStorage.setItem(yourName, score);
    }
  save.addEventListener('click', setScore);


  function getScore() {
    let yourScoreName = prompt('Введите свое имя', 'Nick');
    if (localStorage.getItem(yourScoreName) === null) {
        alert('Нет результата с таким именем')
    } else if (yourScoreName === null) {
    } else {
        scoreName.textContent = `${yourScoreName}:${localStorage.getItem(yourScoreName)}`;
    }
}
hiddenButton.addEventListener('click', getScore);

  
difficultyButtons.forEach(difBtn => difBtn.addEventListener('click', function (e) {
  let minTime = diff.elementId.min;
  let maxTime = diff.elementId.min;
  let elementId = e.target.getAttribute('id');
}));

let difficultyButtons = document.querySelectorAll('.difBtn')
let diff = {
    Easy: {
        min: 500,
        max: 1500
    },
    Normal: {
        min: 300,
        max: 1000
    },
    Hard: {
        min: 100,
        max: 700
    }
};