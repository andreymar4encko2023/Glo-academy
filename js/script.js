"use strict";
const title = document.getElementsByTagName('h1')[0].textContent;
const btn = document.getElementsByClassName("handler_btn");
const ButtonAdd = document.querySelector('.screen-btn');
const calculate = btn[0];
const reset = btn[1];
let range = document.querySelector('.rollback > div > input  ');
let rangeValue = document.querySelector('.rollback span.range-value');
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
        screens.forEach((screan) => {
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
        this.rollBack();
        this.addTitle();
        calculate.addEventListener('click', () => {
            this.checkScreans();
            if (a != true && +input.value >= 0 || input.value === "Количество экранов") {
                this.start()
            } else {
                alert('вы не выбрали не одного экранна или указали некоректное  количество')
            }
        });
        reset.addEventListener('click', () => {
            this.resetBlock();
            this.openBlock();
        })
        ButtonAdd.addEventListener('click', this.addScreenBlock);
    },
    addTitle: function () {
        document.title = title;
    },
    start: function () {
        this.addScreens();
        this.addServises();
        this.getAllServicePrices();
        this.getServicePercentPrices();
        this.ShowResult();
        this.block();
    },
    rollBack: function () {
        range.addEventListener('input', (e) => {
            let rangeText = document.querySelector('.main-controls__range>span');
            rangeText.textContent = e.target.value;
            this.rollback = +e.target.value;
            this.getServicePercentPrices();
            totalInput5.value = this.servicePercentPrice;

        });
    },
    condition: function (name, values) {
        document.querySelectorAll(name).forEach(item => {
            item.disabled = values;
        });
    },
    block: function () {
        this.condition('.main-controls__select>select', true);
        this.condition('.main-controls__input>input', true);
        this.condition('.custom-checkbox', true);
        document.querySelector('.main-controls__range>input').disabled = true;
        ButtonAdd.disabled = true;
        calculate.style.display = "none";
        reset.style.display = "block";
    },
    openBlock() {
        this.condition('.main-controls__select>select', false)
        this.condition('.main-controls__input>input', false)
        this.condition('.custom-checkbox', false)
        document.querySelector('.main-controls__range>input').disabled = false
        ButtonAdd.disabled = false
        calculate.style.display = "block"
        reset.style.display = "none"
        const ContolsElements = document.querySelectorAll(".main-controls__item");
        ContolsElements.forEach((item) => {
            let input = item.querySelector("input");
            if (input.checked) {
                input.checked = !input.checked;
            } else {
                input.value = "";
            };
        });
        rangeValue.value = 0;
        rangeValue.textContent = `${rangeValue.value}%`;
    },
    ShowResult: function () {
        totalInput1.value = this.screenPrice;
        totalInput3.value = this.servicePercentPricePercent + this.servicePercentPriceNumber;
        totalInput4.value = this.fullPrice;
        totalInput2.value = this.screenCount;
        totalInput5.value = this.servicePercentPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach((screan, index) => {
            const select = screan.querySelector('select');
            const input = screan.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            this.screens.push({
                id: index,
                neme: selectName,
                price: +select.value * +input.value,
                count: +input.value,
            });
        });
    },
    addServises: function () {
        otherItemsP.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            };
        });
        otherItemsN.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            };
        });
    },
    addScreenBlock: function () {
        let clonScren = screens[0].cloneNode(true);
        screens[screens.length - 1].after(clonScren);
    },
    getAllServicePrices: function () {
        for (let screens of this.screens) {
            this.screenPrice += screens.price;
            this.screenCount += screens.count;
        }
        for (let key in this.servicesNumber) {
            this.servicePercentPriceNumber += +this.servicesNumber[key];
        }
        for (let key in this.servicesPercent) {
            this.servicePercentPricePercent += +this.screenPrice * (this.servicesPercent[key] / 100);
        }
        this.fullPrice = this.screenPrice + this.servicePercentPriceNumber + this.servicePercentPricePercent;
    },
    getServicePercentPrices: function () {
        this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * this.rollback) / 100);
    },
    resetBlock: function () {
        range = 0;
        console.log(rangeValue);
        rangeValue.textContent = 0;
        this.screenCount = 0;
        this.screenPrice = 0;
        this.servicePercentPrice = 0;
        this.servicePercentPriceNumber = 0;
        this.servicePercentPricePercent = 0;
        this.rollback = 0;
        this.fullPrice = 0;
        this.screens = [];
        this.servicesPercent = [];
        this.servicesNumber = [];
        totalInput.value = this.screenPrice;
        totalInput1.value = 0;
        totalInput2.value = 0;
        totalInput3.value = 0;
        totalInput4.value = 0;
        totalInput5.value = 0;
        screens = document.querySelectorAll(".screen");
        screens = document.querySelectorAll(".screen");
        screens.forEach((el, index) => {
            if (el.hasAttribute("disabled") || index == 0) {
                el.querySelector("select").disabled = false;
            } else {
                el.remove();
            }
            el.innerHTML += "";
            el.value = "";
        })
    },
}

appData.init()