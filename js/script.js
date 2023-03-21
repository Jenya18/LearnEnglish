'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const popupMain = document.querySelector('#popupMain-js');
  const popupMask = document.querySelector('#popupMask-js');
  const popup = document.querySelector('#popup-js');
  const openWordList = document.querySelector('#openWordList-js');

  openWordList.addEventListener('click', function () {
    popupMain.classList.add('popupShow');
  });

  window.onclick = function (e) {
    if (e.target == popupMask) {
      popupMain.classList.remove('popupShow');
    }
  };

  const questionTitle = document.querySelector(
    '#questionBlock-content__question-js'
  );
  const questionInput = document.querySelector(
    '#questionBlock-content__input-js'
  );
  const questionButton = document.querySelector(
    '#questionButton-content__btn-js'
  );
  const correctAnswer = document.querySelector('#correctAnswer-js');

  // const baseWordsWords = [
  //   ['Как переводится hello?', 'привет'],
  //   ['2й вопрос', '2й индекс ответ'],
  // ];

  let randomNum = Math.floor(Math.random() * baseWords.length);

  questionTitle.innerText = baseWords[randomNum][0];
  let save = baseWords[randomNum][1];

  questionButton.addEventListener('click', function () {
    if (save == questionInput.value) {
      location.reload();
      alert('Правильно');
    } else if (questionInput.value == '' || questionInput.value == ' ') {
      alert('Пустое поле');
    } else {
      alert('Введенно неверно');
    }
  });

  correctAnswer.addEventListener('click', function () {
    correctAnswer.textContent = save;
    correctAnswer.classList.add('show');
  });

});
