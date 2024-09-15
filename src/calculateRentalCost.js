/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRate = 40;
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;
  const cost = (days * dayRate);

  if (days < 3) {
    return cost;
  }

  if (days >= 3 && days < 7) {
    return cost - threeDayDiscount;
  } else {
    return cost - sevenDayDiscount;
  }
}

module.exports = calculateRentalCost;
