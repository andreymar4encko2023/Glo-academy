const list =document.querySelectorAll('.book')
const bg =document.querySelector('body')
list[5].after(list[2])
list[3].after(list[4])
list[0].before(list[1])
list[4].insertAdjacentElement('afterend', list[3]);
bg.style.backgroundImage= 'url(./image/you-dont-know-js.jpg)'
list[4].querySelector('a').textContent= 'Книга 3. this и Прототипы Объектов';
document.querySelector('.adv').remove()
const bookСhapters= list[0].querySelectorAll('li');
const bookСhapters5 = list[5].querySelectorAll('li');
const bookСhapters6 = list[2].querySelectorAll('li');
const li = document.createElement('li');
li.textContent = 'Глава 8: За пределами ES6';
bookСhapters6[8].insertAdjacentElement('afterend', li);
bookСhapters5[1].insertAdjacentElement('afterend', bookСhapters5[9]);
bookСhapters5[9].insertAdjacentElement('afterend', bookСhapters5[3]);
bookСhapters5[8].insertAdjacentElement('beforebegin', bookСhapters5[5]);
bookСhapters5[6].insertAdjacentElement('beforebegin', bookСhapters5[2]);
bookСhapters[3].insertAdjacentElement('afterend', bookСhapters[6]);
bookСhapters[4].insertAdjacentElement('beforebegin', bookСhapters[8]);
bookСhapters[10].insertAdjacentHTML('beforebegin', bookСhapters[2]);

