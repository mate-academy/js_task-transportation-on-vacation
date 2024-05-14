/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_RENT_COST = 40;
  const STANDART_DISCOUNT = 20;
  const ADVANSED_DISCOUNT = 50;
  const SHORT_RENT_PERIOD = 3;
  const LONG_RENT_PERIOD = 7;
  const TOTAL_COST_RENT = ONE_DAY_RENT_COST * days;

  if (days >= SHORT_RENT_PERIOD && days < LONG_RENT_PERIOD) {
    return TOTAL_COST_RENT - STANDART_DISCOUNT;
  }

  if (days >= LONG_RENT_PERIOD) {
    return TOTAL_COST_RENT - ADVANSED_DISCOUNT;
  }

  return TOTAL_COST_RENT;
}

module.exports = calculateRentalCost;
