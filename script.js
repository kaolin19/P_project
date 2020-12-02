let phrases = [
  { text: 'запилить пост на ЧикаБаке', image: 'images/1.gif' },
  { text: 'походить по Google Maps', image: 'images/1.gif' },
  { text: 'играть в Geoguessr', image: 'images/1.gif' },
  { text: 'пересматривать ролики Толяна', image: 'images/1.gif' },
  { text: 'расставить книги на полке по цвету', image: 'images/1.gif' },
  { text: 'читать про размножение желтохохлых какаду', image: 'images/1.gif' },
  { text: 'скроллить ленту', image: 'images/1.gif' },
  { text: 'слушать унылые песни в говномоде', image: 'images/1.gif' },
  { text: 'покушать', image: 'images/1.gif' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'images/1.gif' },
  { text: 'узнать про различие трансцендентного и трансцендентального', image: 'images/1.gif' },
  { text: 'делать пиццу', image: 'images/1.gif' },
  { text: 'сходить в магазин', image: 'images/1.gif' },
  { text: 'чекнуть обновления в filmom', image: 'images/1.gif' },
  { text: 'узнать про различие трансцендентного и трансцендентального', image: 'images/1.gif' },
  { text: 'сварить кофе', image: 'images/1.gif' },
  { text: 'поспать', image: 'images/1.gif' },
  { text: 'проверить, не вышел ли новый трек Коса', image: 'images/1.gif' },
  { text: 'узнать, какая ты феечка Винкс', image: 'images/1.gif' },
  { text: 'сталкерить чужие страницы ВК', image: 'images/1.gif' },
  { text: 'комментировать посты Чумачковой', image: 'images/1.gif' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
  smoothly (phrase, 'textContent', phrases[i].text);
}