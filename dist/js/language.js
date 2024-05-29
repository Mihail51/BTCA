


// JavaScript для установки языка по умолчанию
document.addEventListener('DOMContentLoaded', function() {
  // Установка английского языка как языка по умолчанию
  const defaultLanguage = 'USA';
  const defaultFlag = './images/ic_baseline-language.svg'; // Путь к изображению флага
  const languageSpan = document.getElementById('selected-language');
  const flagImg = document.getElementById('selected-flag');

  languageSpan.textContent = defaultLanguage;
  flagImg.src = defaultFlag;
});

// JavaScript для обновления выбранного языка и флага
document.getElementById('language-dropdown').addEventListener('click', function(event) {
  if (event.target.dataset.language) {
    document.getElementById('selected-language').textContent = event.target.dataset.language;
    document.getElementById('selected-flag').src = event.target.dataset.flag;

    // Обновляем информацию о стоимости криптовалюты
    updateCryptoPrice(event.target.dataset.language);
  }
});

//  JavaScript для изменения стоимости крипты в соответствии с выбранным языком
function updateCryptoPrice(language) {
  var cryptoPrices = {
    "Eng": 3.340,
    "Рус": 10.451,
    "USA": 10.834 
    // Добавьте другие значения для каждого языка
  };

  var currencySymbols = {
    "Eng": "./images/icon-dollar-vector.svg",
    "Рус": "./images/icon-dollar-vector.svg",
    "USA": "./images/icon-dollar-vector.svg"
    // Добавьте пути к изображениям для других языков
  };

  // Обновляем значение стоимости криптовалюты
  document.getElementById('crypto-value').textContent = cryptoPrices[language];

  // Обновляем изображение символа валюты
  document.getElementById('currency-symbol').src = currencySymbols[language];
}