/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = days * 40;
  const weekDiscount = 50;
  const twoDaysDiscount = 20;

  if (days >= 7) {
    totalCost -= weekDiscount;
  } else if (days > 2) {
    totalCost -= twoDaysDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
