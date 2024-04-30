/**
 * @param {number} days
 *
 * @return {number}
 */
const dayPrice = 40;
const lowOffValue = 20;
const highOffValue = 50;
const lowDaysOff = 3;
const highDaysOff = 7;

function calculateRentalCost(days) {
  if (days < lowDaysOff) {
    return days * dayPrice;
  } else if (days >= lowDaysOff && days < highDaysOff) {
    return (days * dayPrice) - lowOffValue;
  } else {
    return (days * dayPrice) - highOffValue;
  }
}

module.exports = calculateRentalCost;
