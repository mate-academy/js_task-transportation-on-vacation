/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_RATE = 40;
const THREE_DAY_THRESHOLD = 3;
const THREE_DAY_DISCOUNT = 20;
const SEVEN_DAY_THRESHOLD = 7;
const SEVEN_DAY_DISCOUNT = 50;

function calculateRentalCost(rentalDays) {
  const baseCost = rentalDays * DAILY_RATE;

  if (rentalDays >= SEVEN_DAY_THRESHOLD) {
    return baseCost - SEVEN_DAY_DISCOUNT;
  }

  if (rentalDays >= THREE_DAY_THRESHOLD) {
    return baseCost - THREE_DAY_DISCOUNT;
  }

  return baseCost;
}
module.exports = calculateRentalCost;
