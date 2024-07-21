/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PER_DAY_COST = 40;
  const DISCOUNT_SEVEN_DAYS = 50;
  const DISCOUNT_THREE_DAYS = 20;
  const MIN_DAYS_FOR_SEVEN_DAY_DISCOUNT = 7;
  const MIN_DAYS_FOR_THREE_DAY_DISCOUNT = 3;

  let total = days * PER_DAY_COST;

  if (days >= MIN_DAYS_FOR_SEVEN_DAY_DISCOUNT) {
    total -= DISCOUNT_SEVEN_DAYS;
  }

  if (days >= MIN_DAYS_FOR_THREE_DAY_DISCOUNT && days < MIN_DAYS_FOR_SEVEN_DAY_DISCOUNT) {
    total -= DISCOUNT_THREE_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
