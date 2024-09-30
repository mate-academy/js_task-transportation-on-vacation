/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPrice = 40;
  const rentalCost = rentalPrice * days;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = rentalCost - 50;
  const shortTermDiscount = rentalCost - 20;

  if (days >= longTerm) {
    return longTermDiscount;
  }

  if (days >= shortTerm) {
    return shortTermDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
