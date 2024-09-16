/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalFee = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const rentalCost = days * rentalFee;

  if (days >= longTerm) {
    return rentalCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return rentalCost - shortTermDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
