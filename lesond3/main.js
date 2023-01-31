const title = prompt('Как называется ваш проект?'),
rollback  = 20;
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

const screenPrice = +prompt('Сколько будет стоить данная работа?', 12000),
adaptive = confirm('Нужен ли адаптив на сайте?'),
service1 = prompt('Какой дополнительный тип услуги нужен?'),
servicePrice1 = +prompt('Сколько это будет стоить?' ,1200),
service2 = prompt('Какой дополнительный тип услуги нужен?'),
servicePrice2 = +prompt('Сколько это будет стоить?',1300);
fullPrice = screenPrice +servicePrice1 +servicePrice2,
servicePercentPrice = Math.ceil( fullPrice- (fullPrice*rollback/100) );

console.log(servicePercentPrice)

console.log( typeof(title), typeof(fullPrice ),typeof(adaptive)) ;

console.log(screens.length);

console.log(`${screenPrice } Рублей, ${fullPrice} Рублей.`);

screens= screens.toLowerCase().split(',');

console.log(screens);

console.log(fullPrice *rollback/100);

if( fullPrice >= 30000) {
    console.log('скидка 10%')
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log('скидка 5%')
} else if (fullPrice < 15000&&fullPrice >= 0) {
    console.log('Скидка не предусмотрена')
} else {
    console.log('Что то пошло не так')
}