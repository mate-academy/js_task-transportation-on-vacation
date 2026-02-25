/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTermLength = 3;
  const longTermLength = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTermLength) {
    return days * basePrice - longTermDiscount;
  }

  if (days >= shortTermLength) {
    return days * basePrice - shortTermDiscount;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
