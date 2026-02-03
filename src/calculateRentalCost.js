/**
 * @param {number} days
 *
 * @return {number}
 */
const day_cost = 40;
const discount_7 = 50;
const discount_3 = 20;
const min_days_for_7day_disc = 7;
const min_days_for_3day_disc = 3;

function calculateRentalCost(days) {
  const result = days * day_cost;

  if (days >= min_days_for_7day_disc) {
    return result - discount_7;
  }

  if (days >= min_days_for_3day_disc) {
    return result - discount_3;
  }
  return result;
}

module.exports = calculateRentalCost;
