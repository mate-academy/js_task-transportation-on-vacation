/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;
  const VALUE_OF_ONE_DAY = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  if (days < SHORT_TERM) {
    return VALUE_OF_ONE_DAY * days;
  }

  if (days < LONG_TERM) {
    return VALUE_OF_ONE_DAY * days - SHORT_DISCOUNT;
  }

  return VALUE_OF_ONE_DAY * days - LONG_DISCOUNT;
}

module.exports = calculateRentalCost;
