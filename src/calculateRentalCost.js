/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const basePrice = 40;
  const MIDDLE_TERM = 3;
  const LONG_TERM = 7;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (numberOfDays >= LONG_TERM) {
    return numberOfDays * basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MIDDLE_TERM) {
    return numberOfDays * basePrice - MIDDLE_TERM_DISCOUNT;
  }

  return numberOfDays * basePrice;
}

module.exports = calculateRentalCost;
