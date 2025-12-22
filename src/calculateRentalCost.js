/**
 * @param {number} days
 *
 * @return {number}
 */
const dayRentalCost = 40;
const longTerm = 7;
const longTermDiscount = 50;
const shortTerm = 3;
const shortTermDiscount = 20;

function calculateRentalCost(days) {
  const rentalCost = dayRentalCost * days;

  if (days >= longTerm) {
    return rentalCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return rentalCost - shortTermDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
