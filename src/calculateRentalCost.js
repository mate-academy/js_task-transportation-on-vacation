/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // const dailyRent = 40;
  // let totalCost = days * dailyRent;

  // if (days >= 7) {
  //   totalCost -= 50;
  // } else if (days >= 3) {
  //   totalCost -= 20;
  // }

  // return totalCost;

  const dailyRent = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  const baseCost = days * dailyRent;

  if (days >= longTerm) {
    return baseCost - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return baseCost - mediumTermDiscount;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
