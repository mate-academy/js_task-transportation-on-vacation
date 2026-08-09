/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAY_FOR_DAY = 40;
  const DISCOUNT_LONG_TERM = 50;
  const DISCOUNT_SHORT_TERM = 20;
  const TOTAL_DAYS = days * PAY_FOR_DAY;

  if (days >= 7) {
    return TOTAL_DAYS - DISCOUNT_LONG_TERM;
  } else if (days >= 3) {
    return TOTAL_DAYS - DISCOUNT_SHORT_TERM;
  }

  return TOTAL_DAYS;
}

module.exports = calculateRentalCost;
