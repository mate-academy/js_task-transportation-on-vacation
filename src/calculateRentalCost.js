/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const RENT_COST_DISCOUNT_SHORT = 20;
  const RENT_COST_DISCOUNT_LONG = 50;
  const DISCOUNT_SHORT_LENGHT = 3;
  const DISCOUNT_LONG_LENGHT = 4;
  if(days<DISCOUNT_SHORT_LENGHT){
    return days*RENT_COST;
  }
  if(days < DISCOUNT_LONG_LENGHT){
    return days*RENT_COST-RENT_COST_DISCOUNT_SHORT;
  }
  return days*RENT_COST-RENT_COST_DISCOUNT_LONG;
}

module.exports = calculateRentalCost;
