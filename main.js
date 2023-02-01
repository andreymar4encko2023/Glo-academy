const title = 'калькулятор верстки',
screenPrice = 1000,
rollback  = 20,
fullPrice = 10000,
adaptive = true;

let screens = 'Простые, Сложные, Интерактивные';

console.log( typeof(title), typeof(fullPrice ),typeof(adaptive)) ;

console.log(screens.length);

console.log(`${screenPrice } Рублей, ${fullPrice} Рублей.`);

screens= screens.toLowerCase().split(',');

console.log(screens);

console.log(fullPrice *rollback/100);