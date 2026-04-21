/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SEVEN_DAYS_SALE = 50;
  const THREE_DAYS_SALE = 20;

  if (days >= LONG_TERM) {
    return DAILY_COST * days - SEVEN_DAYS_SALE;
  }

  if (days >= SHORT_TERM) {
    return DAILY_COST * days - THREE_DAYS_SALE;
  }

  return DAILY_COST * days;
}

module.exports = calculateRentalCost;
