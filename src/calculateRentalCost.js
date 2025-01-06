/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;
  const carCosts = 40;

  if (days < 3) {
    totalAmount = days * carCosts;
  } else if (days >= 3 && days < 7) {
    totalAmount = days * carCosts - 20;
  } else if (days >= 7) {
    totalAmount = days * carCosts - 50;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
