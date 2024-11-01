/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;

  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  const rentalPerDay = 40;
  const rentalPrice = rentalPerDay * days;

  if (days >= longTerm) {
    return rentalPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return rentalPrice - shortTermDiscount;
  }

  return rentalPrice;
}

module.exports = calculateRentalCost;
