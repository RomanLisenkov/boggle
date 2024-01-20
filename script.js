const arrOfLettersForDice = [
  'AAEEGN',
  'ABBJOO',
  'ACHOPS',
  'AFFKPS',
  'AOOTTW',
  'CIMOTU',
  'DEILRX',
  'DELRVY',
  'DISTTY',
  'EEGHNW',
  'EEINSU',
  'EHRTVW',
  'EIOSST',
  'ELRTTY',
  'HIMNUQu',
  'HLNNRZ',
];

const arrOfArr = [
  ['A', 'A', 'E', 'E', 'G', 'N'],
  ['A', 'B', 'B', 'J', 'O', 'O'],
  ['A', 'C', 'H', 'O', 'P', 'S'],
  ['A', 'F', 'F', 'K', 'P', 'S'],
  ['A', 'O', 'O', 'T', 'T', 'W'],
  ['C', 'I', 'M', 'O', 'T', 'U'], //!!! I, M, T, U, O, C
  ['D', 'E', 'I', 'L', 'R', 'X'],
  ['D', 'E', 'L', 'R', 'V', 'Y'],
  ['D', 'I', 'S', 'T', 'T', 'Y'],
  ['E', 'E', 'G', 'H', 'N', 'W'],
  ['E', 'E', 'I', 'N', 'S', 'U'],
  ['E', 'H', 'R', 'T', 'V', 'W'],
  ['E', 'I', 'O', 'S', 'S', 'T'],
  ['E', 'L', 'R', 'T', 'T', 'Y'],
  ['H', 'I', 'M', 'N', 'U', 'Qu'],
  ['H', 'L', 'N', 'N', 'R', 'Z'],
];

const body = document.getElementById('body');
const gameArea = document.querySelector('.boggle__gamearea');
const buttons = document.querySelectorAll('.boggle__gamearea__button');
const buttonToShuffle = document.getElementById('shuffle');
const output = document.querySelector('.boggle__result');
const reset = document.getElementById('shuffle');

let word = '';

const arrOfCorrectWords = [];

// Variable to track mouse state
let isMouseDown;

gameArea.addEventListener('mousedown', (event) => {
  event.preventDefault();
  if (event.target.className.includes('boggle__gamearea__button')) {
    isMouseDown = true;
    event.target.style.border = '5px solid black';
    event.target.classList.add('changed');
    let hoveredLetter = event.target.textContent;
    output.textContent = '';

    output.textContent += hoveredLetter;
    word += hoveredLetter;
  }
});

let arrOfChangedButtons = [];

// Event listener for mouse move
buttons.forEach((btn) => {
  btn.addEventListener('mouseover', (event) => {
    // or mousemove
    event.preventDefault();
    if (isMouseDown) {
      let addLetter = (trarrOfChangedButtons = []);
      if (!btn.className.includes('changed')) {
        if (arrOfChangedButtons.indexOf(btn) === -1) {
          btn.style.border = '5px solid black';
          let hoveredLetter = event.target.textContent;
          output.textContent += hoveredLetter;
          word += hoveredLetter;
          addLetter = false;
          btn.classList.add('changed');

          arrOfChangedButtons.push(btn);
        }
      } else if (btn.className.includes('changed')) {
        // let hoveredLetter = event.target.textContent;
        // output.textContent += hoveredLetter;
        // word += hoveredLetter;
        // addLetter = false;
        for (let each of buttons) {
          each.style = 'border: outset 10px #b07b4f;';

          each.classList.remove('changed');
        }
      }

      btn.classList.add('changed');
      btn.style.border = '5px solid black';
    }
  });
});

//!!!!!!!!!!!!!!!!!
// buttons.forEach((btn) => {
//   btn.addEventListener('mouseout',  (event) => {
//     // or mousemove
//     event.preventDefault();
//    if (isMouseDown) {
//        let addLetter = true;
//       if (btn.className.includes('changed')) {
//         btn.style = 'border: outset 10px #b07b4f;'

//     }
//   }});
// });

//event lestener to release mouse
body.addEventListener('mouseup', (event) => {
  event.preventDefault();
  for (let each of buttons) {
    each.style = 'border: outset 10px #b07b4f;';
    each.classList.remove('changed');
  }
  output.textContent = 'Выбери слово...';
  isMouseDown = false;
  arrOfChangedButtons = [];

  //fetch => get
  console.log('WORD ', word);
  //word =""
});

reset.addEventListener('click', (event) => {
  buttons.forEach((btn, index) => {
    btn.textContent = randomLetter(arrOfArr, index);
  });
  output.textContent = 'Выбери слово...';
});

function randomLetter(arr, diceNumber) {
  const randomInteger = Math.floor(Math.random() * 6);
  return arr[diceNumber][randomInteger];
}

var count = 3;
started = false;

function start() {
  if (started) {
    return;
  }
  var start_time = new Date();
  var stop_time = start_time.setMinutes(start_time.getMinutes() + count);

  var countdown = setInterval(function () {
    var now = new Date().getTime();
    var remain = stop_time - now;
    var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((remain % (1000 * 60)) / 1000);

    sec = sec < 10 ? '0' + sec : sec;

    document.querySelector('.timer').innerHTML = `${min}:${sec}`;

    if (remain < 0) {
      clearInterval(countdown);

      document.querySelector('.timer').innerHTML = 'Всё!';
    }
  }, 1000);

  started = true;
}
start();



// function check(word) {
  
//   let x = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', x);

//   xhr.responseType = 'json';

//   xhr.onload = () => {
//     return console.log(xhr.response[0]?.word);
//   };

//   xhr.send()

// return res;
  
// }
// function checkWord (word) {
// fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//   return data;
//   })
//   .catch(error => {
//     console.error('Нет такого слова');
//   });

// }
//   setTimeout(()=>c=2, 1000);
//   console.log(checkWord("dog"))

  
// function checkWord(word) {
//   return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       return data;
//     })
//     .catch(error => {
//       console.error('Нет такого слова');
//     });
// }
// let resArr = [];
// // Example usage
// checkWord("house")
//   .then(result => {
//    resArr.push(result);
//   });

  



// let letterFromArray = resArr[0];

// console.log(resArr[0]);

