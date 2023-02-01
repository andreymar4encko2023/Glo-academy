let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000)
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?', 1200)
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?', 1300);
let rollback = 20;
let fullPrice = screenPrice + servicePrice1 + servicePrice2

const showTypeOf= function(variable){
    console.log(typeof (variable)) ;
}
 
const getRollbackMassege =function (price){
    if (price >= 30000) {
        return 'скидка 10%';
    } else if (price >= 15000 && price <= 30000) {
        return 'скидка 5%';
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
}

const getAllServicePrices = function () {
    let allServicePrices = servicePrice1 + servicePrice2;

    function getFullPrice() {
        const fullPrice = screenPrice + allServicePrices
        return fullPrice
    }

    getFullPrice()
};

const getTitle = function () {
    title = title.trimStart ()
    if (!title) return title;
    title = title[0].toUpperCase () + title.slice(1).toLowerCase()
    return title
};

const getServicePercentPrices = function () {
    let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
    return servicePercentPrice
};

screens = screens.toLowerCase().split(',');

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log ( getRollbackMassege(fullPrice) );

console.log( getServicePercentPrices () )