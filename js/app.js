'use strict'
function calculateCashback(specialCategoryPurchases, otherCategoryPurchases) {
    const specialCategoryPercent=0.03;
    const otherCategoryPercent=0.01;
    const specialCategoryCashback=specialCategoryPurchases*specialCategoryPercent;
    console.log(specialCategoryCashback);
    const otherCategoryCashback=otherCategoryPurchases*otherCategoryPercent;
    console.log(otherCategoryCashback);
    let totalCashback=specialCategoryCashback+otherCategoryCashback;
    const limit =15000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}
// const cashback= calculateCashback(250000,700000);
// console.log(cashback);
// function handleClick(evt) {
//     debugger;
// }
function handleSubmit(evt) {
    evt.preventDefault();
    const specialAmountInputEl = document.getElementById('special-amount-input');
    const specialAmount = Number(specialAmountInputEl.value);
    if (Number.isNaN(specialAmount)){
        //TODO: show error
        return
    }
    if (!Number.isFinite(specialAmount)){
        //TODO: show error
        return
    }

    const otherAmountInputEl = document.getElementById('other-amount-input');
    const otherAmount = Number(otherAmountInputEl.value)
    if (Number.isNaN(otherAmount)){
        //TODO: show error
        return
    }
    if (!Number.isFinite(otherAmount)){
        //TODO: show error
        return
    }

    const result = calculateCashback(specialAmount, otherAmount);
    const   specialCashbackEl = document.getElementById('special-cashback')
    specialCashbackEl.textContent=`${result.specialCategoryCashback} руб.`;
    const otherCashbackEl = document.getElementById('other-cashback');
    otherCashbackEl.textContent=`${result.otherCategoryCashback} руб.`;
    const totalCashbackEl = document.getElementById(('total-cashback'));
    totalCashbackEl.textContent = `${result.totalCashback} руб.`

}
const formEl = document.getElementById('cashback-form');
 formEl.onsubmit = handleSubmit;
// calculateCashback();
// formEl.onclick=handleClick;