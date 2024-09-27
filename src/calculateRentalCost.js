/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const smallDiscount = 20;
  const oneDayCost = 40;
  let totalCost = oneDayCost * days;

  if (days >= 7) {
    totalCost -= bigDiscount;
  } else if (days >= 3) {
    totalCost -= smallDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
