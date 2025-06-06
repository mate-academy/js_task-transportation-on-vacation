/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let total = days * 40;

  if (days >= 7) {
    total -= 50; // Desconto de $50
  } else if (days >= 3) {
    total -= 20; // Desconto de $20
  }

  return total;
}

module.exports = calculateRentalCost;
