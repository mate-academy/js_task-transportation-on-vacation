/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const weekDiscount = 50;
  const threeDayDiscount = 20;
  const totalRent = days * rentPerDay;
  if(days >= 7){
    return totalRent - weekDiscount;
}
  if(days >= 3){
    return totalRent - threeDayDiscount;
}
  return totalRent;
}

module.exports = calculateRentalCost;
