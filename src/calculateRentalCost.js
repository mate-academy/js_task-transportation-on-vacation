/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceWithoutDiscount = days * 40;
  const middleRentTerm = 3;
  const longRentTerm = 7;
  const middleRentDiscount = 20;
  const longRentDiscount = 50;

  if (days < middleRentTerm) {
    return priceWithoutDiscount;
  }

  if (days < longRentTerm) {
    return priceWithoutDiscount - middleRentDiscount;
  }

  return priceWithoutDiscount - longRentDiscount;
}

module.exports = calculateRentalCost;
