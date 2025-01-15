/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  let totalAmount = RENT_COST * days;

  if (days >= 7) {
    totalAmount -= 50;
  } else if (days >= 3) {
    totalAmount -= 20;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
