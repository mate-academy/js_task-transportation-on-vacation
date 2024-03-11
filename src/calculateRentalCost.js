/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const DAYS_TO_HAVE_LARGE_DISCOUNT = 7;
  const DAYS_TO_HAVE_LOW_DISCOUNT = 3;
  const LARGE_DISCOUNT = 50;
  const LOW_DISCOUNT = 20;

  if (days >= DAYS_TO_HAVE_LARGE_DISCOUNT) {
    return days * DAILY_RENT - LARGE_DISCOUNT;
  }

  if (days >= DAYS_TO_HAVE_LOW_DISCOUNT) {
    return days * DAILY_RENT - LOW_DISCOUNT;
  }

  return days * DAILY_RENT;
}

module.exports = calculateRentalCost;
