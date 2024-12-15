/**
 * @param {number} days
 *
 * @return {number}
 */

const minDiscount = 20;
const maxDiscount = 50;

let discountSum = 0;
const daysPrice = 40; /* $ */

function calculateRentalCost(days) {
  const totalSum = days * daysPrice;

  if (days < 3) {
    return totalSum;
  }

  if (days === 3 || days < 7) {
    discountSum = totalSum - minDiscount;

    return discountSum;
  }

  if (days === 7 || days > 7) {
    discountSum = totalSum - maxDiscount;

    return discountSum;
  }
}

module.exports = calculateRentalCost;
