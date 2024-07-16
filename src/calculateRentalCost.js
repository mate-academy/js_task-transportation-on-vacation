/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DEFAULT_COST = 40;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  let rentalPrice = 0;

  if (days >= LONG_TERM) {
    rentalPrice = DEFAULT_COST * days - LONG_TERM_DISCOUNT;

    return rentalPrice;
  }

  if (days >= MEDIUM_TERM) {
    rentalPrice = DEFAULT_COST * days - MEDIUM_TERM_DISCOUNT;

    return rentalPrice;
  }

  rentalPrice = DEFAULT_COST * days;

  return rentalPrice;
}

module.exports = calculateRentalCost;
