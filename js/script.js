const title = document.getElementsByTagName('h1')[0].textContent
const btn = document.getElementsByClassName("handler_btn")
const sum = document.querySelector('.screen-btn').textContent
const calculate = btn[0].textContent
const reset = btn[1].textContent
const range = document.querySelector('.rollback > div > input  ')
const  rangeValue = document.querySelector('rooback> span')
const otherItemsP = document.querySelectorAll('.other-items.percent' ) 
const otherItemsN = document.querySelectorAll('.other-items.number' ) 
const totalInput = document.getElementsByClassName('total-input')
let screen = document.querySelectorAll('.screen')
let [totalInput1,totalInput2,totalInput3,totalInput4] =totalInput





const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,


    services: {},
    servicePrice1: 0,

    servicePrice2: 0,

    rollback: 20,
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    servicePercentPrice: 0,
    start: function () {
        appData.getTitle()
        appData.asking()
        appData.getAllServicePrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getRollbackMassege(appData.fullPrice)
        appData.logger()
    },
    numberСheck: function (number) {
        return !isNaN(parseFloat(number) && isFinite(number))
    },
    asking: function () {
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')

        for (let i = 0; i < 2; i++) {
            let neme = ''
            let price = 0

            do {
                neme = prompt('какие типы экранов нужны')
            } while (!isNaN(neme))

            do {
                price = +prompt('Сколько будет стоить данная работа?', 12000)

            } while (!appData.numberСheck(price))

            appData.screens.push({
                id: i,
                neme: neme,
                price: price
            })


        }

        for (let scren of appData.screens) {
            appData.screenPrice += scren.price
        }
        for (let i = 0; i < 2; i++) {
            let name = " "

            do {
                name = prompt('Какой дополнительный тип услуги нужен?')

            } while (!isNaN(name))
            let price = 0

            do {
                price = +prompt('Сколько это будет стоить?', 1200)
            }

            while (!appData.numberСheck(price))

            appData.services[name] = +price
        };


    },
    getAllServicePrices: function () {
        for (let key in appData.services) {
            appData.allServicePrices += +appData.services[key]
        }
    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback) / 100);

    },
    getTitle: function () {

        do {
            appData.title = prompt('Как называется ваш проект?', 'калькулятор')


        } while (!isNaN(appData.title))

        appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase()
    },
    getRollbackMassege: function (price) {
        if (price >= 30000) {
            return 'скидка 10%';
        } else if (price >= 15000 && price <= 30000) {
            return 'скидка 5%';
        } else if (price < 15000 && price >= 0) {
            return 'Скидка не предусмотрена';

        } else {
            return 'Что то пошло не так';
        }
    },
    logger: function () {
        console.log(appData.title)
        console.log(appData.allServicePrices)
        console.log(appData.fullPrice)
        console.log(appData.getRollbackMassege(appData.fullPrice));
        console.log(appData.servicePercentPrice)
        for (let key in appData) {
            console.log(key + ': ' + appData[key]);
        }
    }
}
// appData.start()