/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYS_FOR_FIRST_DISCOUNT = 3;
  const DAYS_FOR_SECOND_DISCOUNT = 7;
  const FIRST_DISCOUNT = 20;
  const SECOND_DISCOUNT = 50;
  const COST_PER_DAY = 40;

  let discount = 0;

  if (days >= DAYS_FOR_FIRST_DISCOUNT) {
    discount = FIRST_DISCOUNT;
  }

  if (days >= DAYS_FOR_SECOND_DISCOUNT) {
    discount = SECOND_DISCOUNT;
  }

  return COST_PER_DAY * days - discount;
}

module.exports = calculateRentalCost;
