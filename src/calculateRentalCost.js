/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const LONG_TERM = 7;
  const MIN_TERM = 3;
  const MIN_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const renCost = DAY_PRICE * days;

  if (days >= LONG_TERM) {
    return renCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MIN_TERM) {
    return renCost - MIN_TERM_DISCOUNT;
  }

  return renCost;
}

module.exports = calculateRentalCost;
