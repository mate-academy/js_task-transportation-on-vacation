/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  let RentalPrice = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    return (RentalPrice -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (RentalPrice -= SHORT_TERM_DISCOUNT);
  }

  return RentalPrice;
}

module.exports = calculateRentalCost;
