/**
 * @param {number} days
 *
 * @return {number}
 */

const basePrice = 40;
const longTime = 7;
const shortTime = 3;

const longTimeDiscount = 50;
const shortTimeDiscount = 20;

function calculateRentalCost(days) {
  if (days >= longTime) {
    return basePrice * days - longTimeDiscount;
  } else if (days >= shortTime) {
    return basePrice * days - shortTimeDiscount;
  } else {
    return basePrice * days;
  }
}

module.exports = calculateRentalCost;
