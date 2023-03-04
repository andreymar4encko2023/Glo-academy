"use strict";
const title = document.getElementsByTagName('h1')[0].textContent;
const btn = document.getElementsByClassName("handler_btn");
const ButtonAdd = document.querySelector('.screen-btn');
const calculate = btn[0];
const reset = btn[1].textContent
const range = document.querySelector('.rollback > div > input  ');
const rangeValue = document.querySelector('rooback> span');
const otherItemsP = document.querySelectorAll('.other-items.percent');
const otherItemsN = document.querySelectorAll('.other-items.number');
const totalInput = document.getElementsByClassName('total-input');
const input = document.querySelector('.main-controls__input>input')

let screens = document.querySelectorAll('.screen');
let [totalInput1, totalInput2, totalInput3, totalInput4, totalInput5] = totalInput;
let a = true;
const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    servicesPercent: {},
    servicesNumber: {},
    servicePrice1: 0,
    screenCount: 0,
    servicePrice2: 0,
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPricePercent: 0,
    servicePercentPriceNumber: 0,
    servicePercentPrice: 0,
    rollback: 0,
    checkScreans: function () {
        let screens = document.querySelectorAll('.screen');
        screens.forEach(function (screan, ) {
            const select = screan.querySelector('select');
            let selectAtribute = select.options[select.selectedIndex];
           
            if (selectAtribute.hasAttribute('selected')) {
                a = true;
            } else {
                a = false;
            };

        });
    },
    init: function () {
        appData.rollBack();
        appData.addTitle();
        calculate.addEventListener('click', () => {
            appData.checkScreans();
            if (a != true && +input.value >= 0 || input.value === "Количество экранов") {
                appData.start()
            } else {
                alert('вы не выбрали не одного экранна или указали некоректное  количество')
            }
            
        })
        ButtonAdd.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function () {
        document.title = title
    },
    start: function () {
        appData.addScreens();
        appData.addServises();
        appData.getAllServicePrices();
        appData.getServicePercentPrices();
        appData.ShowResult()


    },
    rollBack: function () {
        range.addEventListener('input', (e) => {
            let rangeText = document.querySelector('.main-controls__range>span');
            rangeText.textContent = e.target.value;
            appData.rollback = +e.target.value;

        });
    },
    ShowResult: function () {
        totalInput1.value = appData.screenPrice;
        totalInput3.value = appData.servicePercentPricePercent + appData.servicePercentPriceNumber;
        totalInput4.value = appData.fullPrice;
        totalInput2.value = appData.screenCount;
        totalInput5.value = appData.servicePercentPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screan, index) {
            const select = screan.querySelector('select');
            const input = screan.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            appData.screens.push({
                id: index,
                neme: selectName,
                price: +select.value * +input.value,
                count: +input.value,
            });
        });
    },
    addServises: function () {
        otherItemsP.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            };
        });
        otherItemsN.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            };
        });
    },
    addScreenBlock: function () {
        let clonScren = screens[0].cloneNode(true);
        screens[screens.length - 1].after(clonScren);
    },
    getAllServicePrices: function () {
        for (let screens of appData.screens) {
            appData.screenPrice += screens.price;
            appData.screenCount += screens.count;

        }
        for (let key in appData.servicesNumber) {
            appData.servicePercentPriceNumber += +appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent) {
            appData.servicePercentPricePercent += +appData.screenPrice * (appData.servicesPercent[key] / 100);
        }
        appData.fullPrice = appData.screenPrice + appData.servicePercentPriceNumber + appData.servicePercentPricePercent;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback) / 100);

    },
    alert
}
appData.init()