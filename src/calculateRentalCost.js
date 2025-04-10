/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DAYS = 3;

  if (days >= LONG_TERM_DAYS) {
    return RENT_COST * days - 50;
  }

  if (days >= SHORT_TERM_DAYS) {
    return RENT_COST * days - 20;
  }

  return RENT_COST * days;
}

module.exports = calculateRentalCost;
