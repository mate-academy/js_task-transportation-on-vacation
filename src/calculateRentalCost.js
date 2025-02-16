/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRISE_PER_DAY = 40;
  const LOW_TERM = 3;
  const LOW_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrise = days * PRISE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrise - LONG_TERM_DISCOUNT;
  }

  if (days >= LOW_TERM) {
    return basePrise - LOW_TERM_DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
