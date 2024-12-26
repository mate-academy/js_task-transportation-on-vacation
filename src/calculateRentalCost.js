/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
}

const DAILY_RATE = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_RENTAL_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(numberOfDays) {
  const baseCost = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_RENTAL_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MID_TERM_RENTAL_DAYS) {
    return baseCost - MID_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
