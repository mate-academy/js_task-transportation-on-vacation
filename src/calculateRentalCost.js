/**
 * @param {number} days
 *
 * @return {number}
 */

const RENT_FOR_DAY = 40;
const THREE_DAYS_DISCOUNT = 20;
const SEVEN_DAYS_DISCOUNT = 50;

const THREE_DAYS = 3;
const SEVEN_DAYS = 7;

function calculateRentalCost(days) {
  const RENT_PER_ALL_DAYS = days * RENT_FOR_DAY;

  if (days < THREE_DAYS) {
    return RENT_PER_ALL_DAYS;
  }

  if (days < SEVEN_DAYS) {
    return RENT_PER_ALL_DAYS - THREE_DAYS_DISCOUNT;
  }

  return RENT_PER_ALL_DAYS - SEVEN_DAYS_DISCOUNT;
}

module.exports = calculateRentalCost;
