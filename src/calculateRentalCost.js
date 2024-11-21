/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const minDiscont=3;
  const baseDiscont=7;
  const baseCost=40*days;
  if (days<minDiscont){
    return baseCost;
  }
  if (days>=baseDiscont){
    return baseCost-50;
  }
  return baseCost-20;
}

module.exports = calculateRentalCost;
