/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  let totalCost = days * oneDayCost;

  if (days >= 7) {
    totalCost -= bigDiscount;
  } else if (days >= 3) {
    totalCost -= smallDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
