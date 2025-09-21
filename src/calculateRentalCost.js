/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAY_RENT_COST = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  let discount = 0;

  if (days >= 3 && days <= 6) {
    discount = SMALL_DISCOUNT;
  } else if (days >= 7) {
    discount = BIG_DISCOUNT;
  }

  const totalCost = days * DAY_RENT_COST - discount;

  return totalCost;
}

module.exports = calculateRentalCost;
