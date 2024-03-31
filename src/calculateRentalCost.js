/**
 * @param {number} days
 *
 * @return {number}
 */
const WEEKLY_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const totalCost = days * 40;

  if (days >= 7) {
    return totalCost - WEEKLY_DISCOUNT;
  } else if (days >= 3) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
