/**
 * @param {number} days
 *
 * @return {number}
 */

const seven = 7;
const three = 3;
const saleForThreeDays = 20;
const saleForSevenDays = 50;
const startPrice = 40;

function calculateRentalCost(days) {
  if (days >= seven) {
    return days * startPrice - saleForSevenDays;
  } else if (days >= three) {
    return days * startPrice - saleForThreeDays;
  }

  return 80;
}

module.exports = calculateRentalCost;
