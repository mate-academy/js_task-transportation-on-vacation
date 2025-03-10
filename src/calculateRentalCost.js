/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const discountSevenDays = 50;
  const discountThreeDays = 20;

  let cost = days * dayPrice;

  if (days >= 7) {
    cost -= discountSevenDays;
  } else if (days >= 3) {
    cost -= discountThreeDays;
  }

  return cost;
}

module.exports = calculateRentalCost;
