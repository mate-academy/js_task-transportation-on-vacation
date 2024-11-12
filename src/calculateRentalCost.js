/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPayOfDay = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const baseRentalCost = days * rentalPayOfDay;

  if (days >= longTerm) {
    return baseRentalCost - longTermDiscount;
  }

  if (days >= shortTerm) {
    return baseRentalCost - shortTermDiscount;
  }

  return baseRentalCost;
}

module.exports = calculateRentalCost;
