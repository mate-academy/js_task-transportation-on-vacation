/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const SHORT_TERM = 3;
  const MIDDLE_TERM = 7;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days > 0 && days < SHORT_TERM) {
    return days * dayCost;
  }

  if (days >= SHORT_TERM && days < MIDDLE_TERM) {
    return days * dayCost - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return days * dayCost - LONG_TERM_DISCOUNT;
  }

  return 0;
}

module.exports = calculateRentalCost;
