/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM_SALE = 20;
  const LONG_TERM_SALE = 50;
  const DAILY_RENT_COST = 40;
  const LONG_TERM_RENT_DAYS = 7;
  const SHORT_TERM_RENT_DAYS = 3;

  if (days >= LONG_TERM_RENT_DAYS) {
    return (DAILY_RENT_COST * days) - LONG_TERM_SALE;
  }

  if (days >= SHORT_TERM_RENT_DAYS) {
    return (DAILY_RENT_COST * days) - SHORT_TERM_SALE;
  }

  return (DAILY_RENT_COST * days);
}

module.exports = calculateRentalCost;
