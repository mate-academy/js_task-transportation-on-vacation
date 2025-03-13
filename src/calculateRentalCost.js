/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RENTAL_COST = 40;
const DISCOUNT_FOR_SEVEN_DAYS = 50;
const DISCOUNT_FOR_THREE_DAYS = 20;

function calculateRentalCost(rentalDays) {
  const totalCost = rentalDays * DAILY_RENTAL_COST;

  if (rentalDays >= 7) {
    return totalCost - DISCOUNT_FOR_SEVEN_DAYS;
  }

  if (rentalDays >= 3) {
    return totalCost - DISCOUNT_FOR_THREE_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
