/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  if(days<3){
    return days*RENT_COST;
  }
  if(days < 7){
    return days*RENT_COST-20;
  }
  return days*RENT_COST-40;
}

module.exports = calculateRentalCost;
