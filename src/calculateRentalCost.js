/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_RENT_DAYS = 7;
  const MEDIUM_RENT_DAYS = 3;
  const ONE_DAY_RENT = 40;
  const DISCOUNT_LONG_RENT_DAYS = 50;
  const DISCOUNT_MEDIUM_RENT_DAYS = 20;

  if (days >= LONG_RENT_DAYS) {
    return ONE_DAY_RENT * days - DISCOUNT_LONG_RENT_DAYS;
  }

  if (days >= MEDIUM_RENT_DAYS) {
    return ONE_DAY_RENT * days - DISCOUNT_MEDIUM_RENT_DAYS;
  }

  return ONE_DAY_RENT * days;
}

module.exports = calculateRentalCost;
