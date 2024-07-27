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

  let basePrise = days * PRASE_OF_DAY;

  if (days >= LONG_TERM) {
    return (basePrise -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (basePrise -= SHORT_TERM_DISCOUNT);
  }

  return basePrise;
}

module.exports = calculateRentalCost;
