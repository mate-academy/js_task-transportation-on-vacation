/**
 * @param {number} days
 *
 * @return {number}
 */

const carRentCost = 40;
const carRentDiscount3days = 20;
const carRentDiscount7days = 50;

function calculateRentalCost(days) {
  if (days < 3) {
    return days * carRentCost;
  }

  if (days < 7) {
    return days * carRentCost - carRentDiscount3days;
  }

  if (days >= 7) {
    return days * carRentCost - carRentDiscount7days;
  }
}

module.exports = calculateRentalCost;
