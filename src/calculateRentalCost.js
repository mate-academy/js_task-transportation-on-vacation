/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const AMOUNT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * AMOUNT - LONG_TERM_DISCOUNT;
  }

  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (days >= MIDDLE_TERM) {
    return days * AMOUNT - MIDDLE_TERM_DISCOUNT;
  }

  return days * AMOUNT;
}

module.exports = calculateRentalCost;
