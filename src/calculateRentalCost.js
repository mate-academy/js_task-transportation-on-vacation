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
  let rentalCost = 0;

  if (days >= longTerm) {
    rentalCost = 40 * days - longTermDiscount;

    return rentalCost;
  }

  if (days >= shortTerm) {
    rentalCost = 40 * days - shortTermDiscount;

    return rentalCost;
  }

  rentalCost = 40 * days;

  return rentalCost;
}

module.exports = calculateRentalCost;
