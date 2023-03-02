let phrases = [
    { text: 'отправить бро смешную гифку', image: './assets/ideas_img/01.gif' },
    { text: 'купить билеты в кино', image: './assets/ideas_img/02.png' },
    { text: 'залипнуть в Ютуб', image: './assets/ideas_img/03.png' },
    { text: 'смотреть случайный ролик в рекомендациях', image: './assets/ideas_img/04.png' },
    { text: 'читать книги прямо в книжном магазине', image: './assets/ideas_img/05.png' },
    { text: 'читать про зарплаты разработчиков в Сан-Франциско', image: './assets/ideas_img/06.png' },
    { text: 'проскролить ленту новостей', image: './assets/ideas_img/07.png' },
    { text: 'слушать поток ностальгических песен и вспоминать ошибки молодости', image: './assets/ideas_img/08.png' },
    { text: 'посмотреть трейлер сериала... ну и сразу первый сезон', image: './assets/ideas_img/09.png' },
    { text: 'чекать сообщения в Telegram', image: './assets/ideas_img/10.png' },
    { text: 'загуглить почему же вымерли динозавры', image: './assets/ideas_img/11.png' },
    { text: 'пойти гладить кота', image: './assets/ideas_img/12.png' },
    { text: 'смотреть как твой кот сладко спит', image: './assets/ideas_img/13.png' },
    { text: 'искать очередной баг', image: './assets/ideas_img/14.png' },
    { text: 'врубить хард-рок', image: './assets/ideas_img/15.png' },
    { text: 'смотреть 25-й ролик о том, как стать программистом', image: './assets/ideas_img/16.png' },
    { text: 'го ещё одну катку', image: './assets/ideas_img/17.png' },
    { text: 'листать мемчики. Are you ok?', image: './assets/ideas_img/18.png' },
    { text: 'провести время с семьей... А это даже хорошо :)', image: './assets/ideas_img/19.png' },
    { text: 'плакать, потому что не нашел решения на Stack Overflow', image: './assets/ideas_img/20.png' },
    { text: 'cмотреть рейтинг языков программирования', image: './assets/ideas_img/21.png' },
    { text: 'зарыться в документацию', image: './assets/ideas_img/22.png' },
    { text: 'начать проходить 33-й курс по программированию', image: './assets/ideas_img/23.png' },
    { text: 'мечтать устроиться в FAANG', image: './assets/ideas_img/24.png' },
    { text: 'чинить свой комп', image: './assets/ideas_img/25.png' },
    { text: 'зависать на GitHub', image: './assets/ideas_img/26.png' },
    { text: 'объяснять бабушке, чем ты занимаешься на работе', image: './assets/ideas_img/27.png' },
    { text: 'посмотреть залпом все части «Гарри Поттера»', image: './assets/ideas_img/28.png' }
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(image, 'src', randomElement.image);
    smoothly(phrase, 'textContent', randomElement.text);

    if (randomElement.text.length > 40) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }
});

/*for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}*/
//Show a few ideas when loading pages
