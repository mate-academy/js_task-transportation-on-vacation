/**
 * @param {number} days
 *
 * @return {number}
 */

const daysWithLowADiscount = 3;
const daysWithLargeADiscount = 7;
const rentOfEveryDay = 40;
const lowDiscount = 20;
const largeDiscount = 50;

function calculateRentalCost(days) {
  if (days >= daysWithLowADiscount && days < daysWithLargeADiscount) {
    return days * rentOfEveryDay - lowDiscount;
  }

  if (days >= daysWithLargeADiscount) {
    return days * rentOfEveryDay - largeDiscount;
  }

  return days * rentOfEveryDay;
}

module.exports = calculateRentalCost;
