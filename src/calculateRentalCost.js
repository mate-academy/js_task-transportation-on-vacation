/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SUM_PER_DAY = 40;
  const LONGEST_DAYS_NUMBER = 7;
  const SHORTEST_DAYS_NUMBER = 3;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const RENTAL_COST = days * SUM_PER_DAY;
  let discount = 0;

  if (days >= LONGEST_DAYS_NUMBER) {
    discount += BIG_DISCOUNT;

    return RENTAL_COST - discount;
  }

  if (days >= SHORTEST_DAYS_NUMBER) {
    discount += SMALL_DISCOUNT;

    return RENTAL_COST - discount;
  }

  return RENTAL_COST;
}

module.exports = calculateRentalCost;
