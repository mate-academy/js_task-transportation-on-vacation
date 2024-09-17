/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const amount = days * 40;
  if (days >= 7) {
    return amount - 50;
  } else if (days >= 3) {
    return amount - 20;
  }
  return amount;
}

module.exports = calculateRentalCost;
