const numberСheck = function (number) {
    return !isNaN(parseFloat(number) && isFinite(number))
}
const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,


    service1: "",
    servicePrice1: 0,
    service2: "",
    servicePrice2: 0,

    rollback: 20,
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    servicePercentPrice: 0,
    start: function () {
        appData.asking()
        appData.getScreanPrice()

        appData.getAllServicePrices()
        appData.getFullPrice()


        appData.getServicePercentPrices()


        appData.getRollbackMassege(appData.fullPrice)

        appData.logger()
    },
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'калькулятор');
        if (!appData.title) return title;
        appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase()

        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные').toLowerCase().split(',');
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')



        return


    },
    getAllServicePrices: function () {
        let sum = 0
        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
            }


            while (!numberСheck(sum)) {

                sum = +prompt('Сколько это будет стоить?', 1200)


            }
            sum += +prompt('Сколько это будет стоить?', 1200)
            appData.allServicePrices = sum


        };
        return appData.allServicePrices
    },
    getScreanPrice: function () {
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 12000)
        } while (!numberСheck(appData.screenPrice)) {


        }

        return appData.screenPrice

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
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback) / 100);
        return appData.servicePercentPrice
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
appData.start()