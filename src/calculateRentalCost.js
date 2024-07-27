/**
 * @param {number} days
 *
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRASE_OF_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let basePrises = days * PRASE_OF_DAY;

  if (days >= LONG_TERM) {
    return (basePrises -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (basePrises -= SHORT_TERM_DISCOUNT);
  }

  return basePrises;
}

module.exports = calculateRentalCost;
