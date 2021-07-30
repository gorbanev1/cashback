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
const cashback= calculateCashback(250000,700000);
console.log(cashback);
// calculateCashback();
