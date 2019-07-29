let cardsArray = [
{
  'name': 'ant',
  'img': 'assets/images/ant.png'
}, {
  'name': 'cap',
  'img': 'assets/images/cap.png'
}, {
  'name': 'spidey',
  'img': 'assets/images/spidey.png'
}, {
  'name': 'hulk',
  'img': 'assets/images/hulk.png'
}, {
  'name': 'iron',
  'img': 'assets/images/iron.png'
}, {
  'name': 'panther',
  'img': 'assets/images/panther.png'
}, {
  'name': 'thor',
  'img': 'assets/images/thor.png'
}, {
  'name': 'widow',
  'img': 'assets/images/widow.png'
}, {
  'name': 'doctor',
  'img': 'assets/images/doctor.png'
}, {
  'name': 'thanos',
  'img': 'assets/images/thanos.png'
}, {
  'name': 'hawk',
  'img': 'assets/images/hawk.png'
}, {
  'name': 'fury',
  'img': 'assets/images/fury.png'
}];

let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class','grid');
game.appendChild(grid);

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

gameGrid.forEach(function (item) {
  let card = document.createElement('div')
  card.classList.add('card');
  card.dataset.name = item.name;

  let front = document.createElement('div')
  front.classList.add('front')

  let back = document.createElement('div')
  back.classList.add('back')

  back.style.backgroundImage = `url(${item.img})`

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let  count = 0;
let firstTry = "";
let secondTry = "";
let previousTarget = null;

grid.addEventListener( "click", function(event) {
  let selected = event.target;
  if(selected.nodeName === 'SECTION' || selected === previousTarget) {
    return
  } if (count < 2) {
    count++;
    if (count ===1) {
      // First Try
      firstTry = selected.parentNode.dataset.name;
      console.log(firstTry);
      selected.parentNode.classList.add('selected');
    } else {
      // Second Try
      secondTry = selected.parentNode.dataset.name
      console.log(secondTry);
      selected.parentNode.classList.add('selected');
    }
    if (firstTry !== "" && secondTry !== "") {
      if(firstTry === secondTry) {
        setTimeout(match, delay);
        setTimeout(resetTries, delay);
      } else {
          setTimeout(resetTries, delay);
        }
    }
    previousTarget = selected;
  };
});


let match = function() {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(function(card) {
    card.classList.add('match');
  });
};

let resetTries = function () {
  firstTry = "";
  secondTry = "";
  count = 0;

  let selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected')
  })
};

let delay = 700;

