'use strict';

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const conversionButton = document.getElementById('conversion');
const copyButton = document.getElementById('copy');

conversionButton.addEventListener('click', () => {
  const inputValue = inputEl.value;
  const output = inputValue.replace(/\u3000/g, '\x20');
  outputEl.value = output;
});

copyButton.addEventListener('click', () => {
  const outputValue = outputEl.value;

  navigator?.clipboard
    .writeText(outputValue)
    .then(() => {
      alert('クリップボードにコピーしました！');
    })
    .catch(() => {
      alert('Error: コピーできませんでした。');
    });
});
