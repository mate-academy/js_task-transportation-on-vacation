/**
 * @param {number} days
 *
 * @return {number}
 */
const LONG_TERM_RENT = 7;
const MEDIUM_TERM_RENT = 3;

const DISCOUNT_FOR_7_DAYS = 50;
const DISCOUNT_FOR_3_DAYS = 20;
const DOLLARS_PER_DAY = 40;

function calculateRentalCost(days) {
  const dailyRate = DOLLARS_PER_DAY;
  let totalCost = days * dailyRate;

  if (days >= MEDIUM_TERM_RENT && days < LONG_TERM_RENT) {
    totalCost -= DISCOUNT_FOR_3_DAYS;
  }

  if (days >= LONG_TERM_RENT) {
    totalCost -= DISCOUNT_FOR_7_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
