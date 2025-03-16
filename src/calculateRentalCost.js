/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const discountThreshold2 = 3;
  const discountThreshold1 = 7;

  let totalCost = days * dayRent;

  if (days >= discountThreshold1) {
    totalCost -= 50;
  } else if (days >= discountThreshold2) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
