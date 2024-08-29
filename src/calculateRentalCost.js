/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;

  const basecost = days * cost;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return basecost - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return basecost - SHORT_TERM_DISCOUNT;
  }

  return basecost;
}

module.exports = calculateRentalCost;
