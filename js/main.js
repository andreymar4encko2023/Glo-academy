
let screenPrice 

 
let service1 
let servicePrice1;
let service2 
let servicePrice2 ;
let rollback = 20;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
const numberСheck = function(number){
    return !isNaN(parseFloat(number) &&isFinite(number) )
}

const getScreanPrice = function(){
    do{
        screenPrice= +prompt('Сколько будет стоить данная работа?', 12000)
    } while(!numberСheck(screenPrice)){
        

    }
   
    return screenPrice

}

const asking = function (){
    let title =prompt('Как называется ваш проект?','калькулятор');
    if (!title) return title;
    title = title[0].toUpperCase () + title.slice(1).toLowerCase()

let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные').toLowerCase().split(',');
let adaptive = confirm('Нужен ли адаптив на сайте?')
showTypeOf(title)
showTypeOf(screens)
showTypeOf(adaptive)

getScreanPrice()

return 


}
const getAllServicePrices = function () {
    let sum = 0
   for(let i=0;i<2;i++){

       if(i===0){
           service1 = prompt('Какой дополнительный тип услуги нужен?')
       }else if(i===1){
          service2 = prompt('Какой дополнительный тип услуги нужен?')
       }

       
       while(!numberСheck(sum)){
        
        sum=  +prompt('Сколько это будет стоить?', 1200)

        
       }
       sum+=  +prompt('Сколько это будет стоить?', 1200)

       
       
   };
   return  sum
}

const showTypeOf= function(variable){

    console.log(typeof variable);
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

function getFullPrice() {
        return screenPrice + allServicePrices    
    }
const getServicePercentPrices = function () {
    let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * rollback) / 100);
    return servicePercentPrice
};
asking()
allServicePrices=getAllServicePrices()
fullPrice =getFullPrice()
servicePercentPrice=getServicePercentPrices()



console.log(allServicePrices)
console.log ( getRollbackMassege(fullPrice) );
console.log(fullPrice)
console.log(servicePercentPrice) 



