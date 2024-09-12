/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const MORE_7_DAYS_DISCOUNT = 50;
  const MORE_3_DAYS_DISCOUNT = 20;
  let cost = days * PRICE_PER_DAY;

  if (days >= 7) {
    cost -= MORE_7_DAYS_DISCOUNT;
  } else if (days >= 3) {
    cost -= MORE_3_DAYS_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
