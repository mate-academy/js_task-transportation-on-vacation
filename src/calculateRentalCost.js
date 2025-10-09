/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const NUMBER_OF_DAYS_FOR_FIRST_DISCOUNT = 3;
  const NUMBER_OF_DAYS_FOR_SECOND_DISCOUNT = 7;
  const FIRST_DISCOUNT = 20;
  const SECOND_DISCOUNT = 50;
  const COST_PER_DAY = 40;

  let finalDiscount = 0;

  if (days >= NUMBER_OF_DAYS_FOR_FIRST_DISCOUNT) {
    finalDiscount = FIRST_DISCOUNT;
  }

  if (days >= NUMBER_OF_DAYS_FOR_SECOND_DISCOUNT) {
    finalDiscount = SECOND_DISCOUNT;
  }

  return COST_PER_DAY * days - finalDiscount;
}

module.exports = calculateRentalCost;
