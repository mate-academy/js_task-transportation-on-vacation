/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dayRentCost = 40;

  const longTerm = 7;
  const shortTerm = 3;

  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return days * dayRentCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return days * dayRentCost - shortTermDiscount;
  }

  return days * dayRentCost;
}

module.exports = calculateRentalCost;
