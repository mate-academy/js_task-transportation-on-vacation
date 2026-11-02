/**
 * @param {number} numberOfDays
 *
 * @return {number}
 */

function calculateRentalCost(numberOfDays) {
  const DAILY_PRICE = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalRentalCost = numberOfDays * DAILY_PRICE;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return totalRentalCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM_DAYS) {
    return totalRentalCost - SHORT_TERM_DISCOUNT;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
