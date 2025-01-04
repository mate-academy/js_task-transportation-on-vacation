/**
 * @param {number} days
 *
 * @return {number}
 */
const daysRental = 40;
const longTermDiscount = 50;
const shortTermDiscount = 20;

function calculateRentalCost(days) {
  if (days < 3) {
    return daysRental * days;
  } else if (days >= 3 && days < 7) {
    return daysRental * days - shortTermDiscount;
  } else {
    return daysRental * days - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
