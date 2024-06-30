/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const RENT_COST_DISCOUNT_SHORT = 20;
  const RENT_COST_DISCOUNT_LONG = 50;
  const RENTAL_DAYS_MORE_7 = 7;
  const RENTAL_DAYS_MORE_3 = 3;
  if(days<RENTAL_DAYS_MORE_3){
    return days*RENT_COST;
  }
  if(days < RENTAL_DAYS_MORE_7){
    return days*RENT_COST-RENT_COST_DISCOUNT_SHORT;
  }
  return days*RENT_COST-RENT_COST_DISCOUNT_LONG;
}

module.exports = calculateRentalCost;
