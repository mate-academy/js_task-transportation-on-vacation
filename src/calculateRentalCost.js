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

  const baseCost = COST_PER_DAY * days;

  if (days >= NUMBER_OF_DAYS_FOR_SECOND_DISCOUNT) {
    return baseCost - SECOND_DISCOUNT;
  }

  if (days >= NUMBER_OF_DAYS_FOR_FIRST_DISCOUNT) {
    return baseCost - FIRST_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
