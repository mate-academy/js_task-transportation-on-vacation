/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const weekDiscount = 50;
  const threeDayDiscount = 20;
  const fullWeekDays = 7;
  const midwayDays = 3;
  const totalRent = days * rentPerDay;
  if(days >= fullWeekDays){
    return totalRent - weekDiscount;
}
  if(days >= midwayDays){
    return totalRent - threeDayDiscount;
}
  return totalRent;
}

module.exports = calculateRentalCost;
