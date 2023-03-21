'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const popupMain = document.querySelector('#popupMain-js');
  const popupMask = document.querySelector('#popupMask-js');
  // const popup = document.querySelector('#popup-js');
  const openWordList = document.querySelector('#openWordList-js');

  openWordList.addEventListener('click', function () {
    popupMain.classList.add('popupShow');
  });

  window.onclick = function (e) {
    if (e.target == popupMask) {
      popupMain.classList.remove('popupShow');
    }
  };

  // words
  const questionWordsTitle = document.querySelector(
    '#questionWords-content__question-js'
  );
  const questionWordsInput = document.querySelector(
    '#questionWords-content__input-js'
  );
  const questionWordsButton = document.querySelector(
    '#questionWords-content__btn-js'
  );
  const correctWordAnswer = document.querySelector('#correctWordAnswer-js');

  // speach
  const questionSpeachTitle = document.querySelector(
    '#questionSpeech-content__question-js'
  );
  const questionSpeachInput = document.querySelector(
    '#questionSpeech-content__input-js'
  );
  const questionSpeachButton = document.querySelector(
    '#questionSpeech-content__btn-js'
  );
  const correctSpeachAnswer = document.querySelector('#correctSpeachAnswer-js');

  let randomNumWords = Math.floor(Math.random() * baseWords.length);
  let randomNumSpeach = Math.floor(Math.random() * baseSpeach.length);

  let saveWords = baseWords[randomNumWords][1];
  let saveSpeach = baseSpeach[randomNumSpeach][1];
  function btnClick(save, btn, inputs) {
    questionWordsTitle.innerText = baseWords[randomNumWords][0];
    questionSpeachTitle.innerText = baseSpeach[randomNumSpeach][0];

    btn.addEventListener('click', function () {
      if (save == inputs.value) {
        location.reload();
        alert('Правильно');
      } else if (inputs.value == '' || inputs.value == ' ') {
        alert('Пустое поле');
      } else {
        alert('Введенно неверно');
      }
    });

    correcAnswer(correctWordAnswer, saveWords);
    correcAnswer(correctSpeachAnswer, saveSpeach);
  }

  btnClick(saveWords, questionWordsButton, questionWordsInput);
  btnClick(saveSpeach, questionSpeachButton, questionSpeachInput);

  function correcAnswer(e, save) {
    e.addEventListener('click', function () {
      e.textContent = save;
      e.classList.add('show');
    });
  }
});

// Динамически из файла в таблицу создавать слова
// и закинуть в гит хаб бесплатный хостинг сайт

// https://github.com/Jenya18/LearnEnglish
