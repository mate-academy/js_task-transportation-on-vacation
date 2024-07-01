/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;
  const SEVEN_DAYS = 7;
  const THREE_DAYS = 3;
  let total = days * RENT_PER_DAY;

  if (days < THREE_DAYS) {
    return total;
  }

  if (days < SEVEN_DAYS) {
    return total - THREE_DAYS_DISCOUNT;
  }

  return total - SEVEN_DAYS_DISCOUNT;
}

module.exports = calculateRentalCost;
