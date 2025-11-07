/**
 * @param {number} days
 *
 * @return {number}
 */

const basePrice = 40;
const weekDiscount = 50;
const shortDiscount = 20;

function calculateRentalCost(days) {
  if (days >= 7) {
    return basePrice * days - weekDiscount;
  } else if (days >= 3) {
    return basePrice * days - shortDiscount;
  } else {
    return basePrice * days;
  }
}

module.exports = calculateRentalCost;
